const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");

module.exports = class Canvas {

  constructor(apiUrl, canvasToken, courseId) {
    this.courseApiBaseUrl = `${apiUrl}/courses/${courseId}`;
    this.authHeader = {
      headers: {
        Authorization: "Bearer " + canvasToken
      }
    };
  }

  formatPageTitle(title) {
    return title.toLowerCase()
    .replace(/[^\w-\. ]/g, '') //removes unwanted characters like ? and :, inverted regex match
    .replace('.', '-dot-') //changes first dot as in module.lesson to module-dot-lesson
    .replace(/[\. ]/g, '-') // change all . and spaces to -
  }

  async fetchLessons(dataSoFar, nextUrl) {

    dataSoFar = dataSoFar || [];
    const url = nextUrl || `${this.courseApiBaseUrl}/pages?sort=title&order=asc&per_page=100`;
    const linkPattern = /,\s*<(.+?)>;\s*rel="next"/

    const { data, headers } = await axios.get(url, this.authHeader);

    if (headers.link) {
      // Yank out the "next" url, if there is one
      const matches = headers.link.match(linkPattern);
      if (matches && matches[1]) {
        return this.fetchLessons([...dataSoFar, ...data], matches[1]);
      }
    }
    return [...dataSoFar, ...data];
  }

  async deleteLesson(pageUrl) {
    const url = `${this.courseApiBaseUrl}/pages/${pageUrl}`;
    console.log(`Deleting page URL ${pageUrl}`);
    const { data, status } = await axios.delete(url, this.authHeader);
    if (status !== 200) {
      console.log(`ERROR! ${status}, ${JSON.stringify(data)}`);
    }
    return status;
  }

  async getLessonsByModule(module) {
    const lessons = await this.fetchLessons(module)
    // Get lesson titles that start with module number e.g. "1."
    const moduleLessons = lessons.filter(lesson => lesson.title && lesson.title.startsWith(`${module}.`));
    return moduleLessons;
  }

  // update page content or create new page if it doesn't exist
  async updatePage(title, body) {
    let url = this.formatPageTitle(title);
    console.log(url)
    const {data} = await axios.put(
      `${this.courseApiBaseUrl}/pages/${url}`, 
      { wiki_page: {title, body},
      on_duplicate: "overwrite" }, 
      this.authHeader
    );

    return data;
  }

  // put a page inside an existing module
  async addPageToModule(mod, page, indent = 0, position = null) {
    return await axios.post(
      `${this.courseApiBaseUrl}/modules/${mod}/items`, 
      {
        module_item: {
          type: "Page",
          page_url: page,
          indent,
          position
        }
      },
      this.authHeader
    );
  }

  // add a lesson header to module, if not already there
  async addHeaderToModule(mod, title) {
    const {data: items} = await axios.get(
      `${this.courseApiBaseUrl}/modules/${mod}/items?per_page=100`, 
      this.authHeader
    );

    for (let item of items) {
      // look for match
      if (item.title.indexOf(title) === 0) {
        return item;
      }
    }

    // create new header
    const {data: newItem} = await axios.post(
      `${this.courseApiBaseUrl}/modules/${mod}/items`, 
      {
        module_item: {
          type: "SubHeader",
          title
        }
      },
      this.authHeader
    );

    return newItem;
  }

  // check for existing module in canvas
  async getModuleId(mod) {
    let {data: modules} = await axios.get(
      `${this.courseApiBaseUrl}/modules?per_page=100`,
      this.authHeader
    );

    for (let module of modules) {
      // look for match
      if (module.name.match(new RegExp(`Module ${mod}[^0-9]`))) {
        return module.id;
      }
    }

    // never found module
    return null;
  }

  async makeModule(mod, title) {
    let {data: newModule} = await axios.post(
      `${this.courseApiBaseUrl}/modules`,
      {
        module: {
          name: `Module ${mod}: ${title}`,
          position: mod
        }
      },
      this.authHeader
    );

    return newModule.id;
  }

  // upload single image to canvas
  async uploadImage(folder, image) {
    let stats = fs.statSync(image);

    // initial request preps canvas for file upload
    const {data: prep} = await axios.post(
      `${this.courseApiBaseUrl}/files`, 
      {
        name: image.split("/").pop(),
        size: stats.size,
        content_type: "image/jpeg",
        parent_folder_path: folder,
        on_duplicate: "overwrite"
      }, 
      this.authHeader
    );

    // format post data
    let fData = new FormData();
    fData.append("filename", prep.upload_params.filename);
    fData.append("content_type", prep.upload_params.content_type);
    fData.append("file", fs.createReadStream(image));
  
    // use returned url to send actual file to canvas
    try {
      let {data: newFile} = await axios.post(
        prep.upload_url, 
        fData, 
        { headers: { ...fData.getHeaders() } }
      );
  
      return newFile;
    }
    catch(e) {
      return null;
    }
  }

  // get assignment id based on its name
  async getAssignmentId(name) {
    let {data} = await axios.get(
      `${this.courseApiBaseUrl}/assignments?search_term=${name}`,
      this.authHeader
    );

    for (let assignment of data) {
      // look for match
      if (assignment.name === name) {
        return assignment.id;
      }
    }

    // never found assignment
    return null;
  }

  // adds a new assignment to canvas
  async createAssignment(title, body) {
    const {data: newItem} = await axios.post(
      `${this.courseApiBaseUrl}/assignments`, 
      {
        assignment: {
          name: title,
          description: body,
          submission_types: ["online_text_entry", "online_url"],
          points_possible: 100
        }
      },
      this.authHeader
    );

    return newItem;
  }

  // updates an existing assignment in canvas
  async updateAssignment(id, body) {
    const {data: newItem} = await axios.put(
      `${this.courseApiBaseUrl}/assignments/${id}`, 
      {
        assignment: {
          description: body
        }
      },
      this.authHeader
    );

    return newItem;
  }

  // put an assignment inside an existing module
  async addAssignmentToModule(mod, assignment, indent = 0, position = null) {
    return await axios.post(
      `${this.courseApiBaseUrl}/modules/${mod}/items`, 
      {
        module_item: {
          type: "Assignment",
          content_id: assignment,
          indent,
          position
        }
      },
      this.authHeader
    );
  }
}
