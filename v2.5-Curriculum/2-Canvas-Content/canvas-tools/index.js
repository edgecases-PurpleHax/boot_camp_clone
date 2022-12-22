require('dotenv').config();

const fs = require("fs");
const path = require("path");
const open = require("open");
const inquirer = require("inquirer");
const colors = require('colors');

const Canvas = require("./tools/Canvas.js");
const Markup = require("./tools/Markup.js");
const Metrics = require("./tools/Metrics.js");
const Studio = require("./tools/Studio.js");

const supplementalMapping = [
  "introduction.md",
  "roadmap.md",
  "getting-ready.md",
  "up-and-running.md",
  "challenge.md",
  "reflection.md",
  "career-connection.md",
  "dessert.md"
];

let supplementalPos = 1;

async function promptUser() {
  // ask user what they wanna do
  let {command} = await inquirer.prompt({
    message: "Choose an option:",
    name: "command",
    type: "list",
    choices: [
      "List Deployed Lessons", 
      "Upload a Lesson",
      "Upload Supplementals",
      "Get Lesson Metrics", 
      "Exit"
    ]
  });

  if (command === "Exit") process.exit();

  let canvas;

  if (command.indexOf("Upload") !== -1 || command.indexOf("Deploy") !== -1) {
    // check for key
    if (!process.env.CANVAS_TOKEN) {
      console.error("Must define CANVAS_TOKEN environment variable");
      process.exit();
    }
    
    // check for course id
    if (!process.env.CANVAS_COURSE_ID) {
      console.error("Must define CANVAS_COURSE_ID environment variable");
      process.exit();
    }
    
    // check for api url
    if (!process.env.CANVAS_API_URL) {
      console.error("Must define CANVAS_API_URL environment variable");
      process.exit();
    }

    // create new canvas api object
    canvas = new Canvas(
      process.env.CANVAS_API_URL,
      process.env.CANVAS_TOKEN,
      process.env.CANVAS_COURSE_ID
    );
  }

  let message = command === "List Deployed Lessons" || command === "Upload Supplementals" ?
    "Enter module number (e.g., 2):" :
    "Enter lesson number (e.g., 2.1):";
  
  let {input} = await inquirer.prompt({
    message,
    name: "input",
    type: "text"
  });

  let moduleNum = input.split(".")[0];
  let lessonNum = input.split(".")[1];
  let contentPath = "../";
  let lessonPath;

  if (command !== "List Deployed Lessons") {
    // find folder that matches module number
    fs.readdirSync(contentPath).forEach((file) => {
      if (file.match(new RegExp(`^0?${moduleNum}-`))) {
        contentPath += file + "/content/";
      }
    });

    if (contentPath === "../" || !fs.existsSync(contentPath)) {
      console.error(`No content exists for Module ${moduleNum}`);
      process.exit();
    }
  }

  if (lessonNum) {
    // find matching lesson
    if (fs.existsSync(contentPath)) {
      fs.readdirSync(contentPath).forEach((file) => {
        if (file.match(new RegExp(`^lesson-${lessonNum}-`))) {
          lessonPath = contentPath + file;
        }
      });
    }
    
    // ensure lesson exists
    if (!fs.existsSync(lessonPath)) {
      console.error(`Lesson ${lesson} doesn't exist.`);
      process.exit();
    }
  }

  switch(command) {
    case "List Deployed Lessons":
      await listDeployedLessons(canvas, moduleNum);

      break;
    case "Upload a Lesson":        
      uploadLesson(canvas, moduleNum, lessonNum, lessonPath);

      break;
    case "Upload Supplementals":
      // check if lesson content exists first
      const lessons = await canvas.getLessonsByModule(moduleNum);
      
      if (lessons.length === 0) {
        console.error("Lessons should be uploaded before supplemental content.");
        process.exit();
      }
  
      let {files} = await inquirer.prompt({
        message: "Select supplemental files to upload",
        name: "files",
        choices: fs.readdirSync(contentPath)
          .filter(f => f.indexOf(".md") > 0 && f.indexOf("lesson-") === -1),
        type: "checkbox"
      });

      // sort array to match the correct order defined above
      files.sort((a, b) => {  
        return supplementalMapping.indexOf(a) - supplementalMapping.indexOf(b);
      });

      for (let file of files) {
       await uploadLesson(canvas, moduleNum, 0, contentPath + file);
       }
  
      break;
    case "Get Lesson Metrics":
      let metrics;

      // single lesson
      if (lessonNum) {
        metrics = new Metrics(lessonPath);
      }
      // assume they want the full module
      else {
        let metricPaths = [];

        fs.readdirSync(contentPath).forEach((file) => {
          if (file.indexOf("lesson-") === 0) {
            metricPaths.push(contentPath + file);
          }
        });

        metrics = new Metrics(...metricPaths);
      }

      // get and print data
      let totals = metrics.getWordCount();

      console.log(`Word count: ${totals.words}\nLines of code: ${totals.code}`);
      console.log("See report for full details.");

      open(metrics.generateReport("./reports/"));
      
      break;
  }
}

async function listDeployedLessons(canvas, module) {
  try  {
    let lessons = await canvas.getLessonsByModule(module);
    lessons.forEach(lesson => {
      console.log(`${lesson.page_id}: ${lesson.title}`);
      return;
    })
    return lessons;
  } catch(e) {
    return(e);
  }
}

/**
 * 
 * @param {Canvas} canvas Canvas instance
 * @param {String} module Module number
 * @param {String} lesson Lesson number (0 means supplemental)
 * @param {String} lessonPath Local path to lesson content
 * 
 */
async function uploadLesson(canvas, module, lesson, lessonPath) {

  // get existing module id, if there is one
  let moduleID = await canvas.getModuleId(module);

  if (!moduleID) {
    // never found, so ask for name to make a new one
    let {name} = await inquirer.prompt({
      message: "Module doesn't exist yet. What should it be called?",
      name: "name",
      type: "text"
    });

    moduleID = await canvas.makeModule(module, name);
  }

  let markup = new Markup(lessonPath);
  let assetPath = lessonPath.substr(0, lessonPath.lastIndexOf("/"));
  let name = lessonPath.split("/").pop().replace(".md", "");
  let banner;

  // upload background banner img
  if (fs.existsSync(assetPath + '/assets/banner.jpg')) {
    const { id: bannerId } = await canvas.uploadImage(
      `images/module-${module}`, 
      assetPath + '/assets/banner.jpg'
    );

    banner = `/courses/${process.env.CANVAS_COURSE_ID}/files/${bannerId}/preview`;

    console.log("banner uploaded".green);
  }

  // get linked images
  let images = markup.getImages();
  
  if (images.length < 1) {
    console.error(`No assets found for ${name}`);
  }
  else {  
    for (let image of images) {
      let folder = lesson === 0 ? name : `lesson-${lesson}`;
      
      // upload to canvas
      let newFile = await canvas.uploadImage(
        `images/module-${module}/${folder}`, 
        path.posix.join(assetPath, image)
      );
    
      if (newFile) {
        console.log(image + " uploaded".green);

        const filePath = `/courses/${process.env.CANVAS_COURSE_ID}/files/${newFile.id}/preview`;
    
        // replace local file in converted markdown
        markup.insertImage(newFile.display_name, filePath);
      }
      else {
        console.log(image + " failed to upload!".brightRed);
      }
    }
  }

  // create lesson header/label in module navigation
  // if (lesson > 0) {
  //   await canvas.addHeaderToModule(moduleID, markup.getTitle());
  // }
  
  // get assessment placeholders
  let assessments = markup.getAssessments();

  for (let i = 0; i < assessments.length; i++) {
    // and replace in markup
    const  url = `/courses/${process.env.CANVAS_COURSE_ID}/external_tools/retrieve?display=borderless&url=https://learnosityplayer.atomicjoltapps.com/lti_launches/${assessments[i]}`;
    markup.insertAssessment(assessments[i], url); 
    console.log(`assessment ${assessments[i]} embedded`.green);
  }
  
  if (process.env.STUDIO_API_URL) {
    // get video placeholders
    let videos = markup.getVideos();
  
    // set up studio api access
    const studio = new Studio(process.env.STUDIO_API_URL);
    await studio.getCredentials(process.env.STUDIO_EMAIL, process.env.STUDIO_PASSWORD);
  
    for (let i = 0; i < videos.length; i++) {
      const videoUrl = await studio.getVideoUrl(videos[i]);

      if (videoUrl) {
        const canvasUrl = `/courses/${process.env.CANVAS_COURSE_ID}/external_tools/retrieve?display=borderless&url=${encodeURIComponent(videoUrl)}`;

        markup.insertVideo(videos[i], canvasUrl); 
        console.log(`video ${videos[i]} embedded`.green);
      }
      else {
        console.log(`video ${videos[i]} doesn't exist yet`.brightRed);
      }
    }
  }

  // split up into sub-lessons to become separate pages
  let chunks = markup.getPageChunks(banner);

  for (let i = 0; i < chunks.length; i++) {
    // check if page is an assignment
    if (chunks[i].title.indexOf("<assignment>") !== -1) {
      let title = chunks[i].title.replace("<assignment>", "").trim();
      let assignmentId = await canvas.getAssignmentId(title);

      if (!assignmentId) {
        // create new assignment
        let assignment = await canvas.createAssignment(title, chunks[i].body);

        console.log(title + " assignment created".green);

        // enforces correct module order
        let index = name === "introduction" || name === "roadmap" || name === "getting-ready" || name === "up-and-running" ? supplementalPos++ : null;
        let indent = i > 0 ? 1 : 0;
    
        // append assignment to module navigation
        await canvas.addAssignmentToModule(moduleID, assignment.id, indent, index);
      }
      else {
        await canvas.updateAssignment(assignmentId, chunks[i].body);

        console.log(title + " assignment updated".brightYellow);
      }

      continue;
    }

    // format for canvas
    // let title = lesson === 0 ? 
    //   `${module}. ${markup.getTitle()}${chunks.length > 1 ? `: ${chunks[i].title}` : ''}` :
    //   `${module}.${lesson}.${i+1}: ${chunks[i].title}`;

    let title = lesson === 0 ? 
      `${markup.getTitle()}${chunks.length > 1 ? `: ${chunks[i].title}` : ''}` :
      `${module}.${lesson}: ${chunks[i].title}`;

    console.log(title)

    let body = `${chunks[i].body} <!-- timestamp: ${Date.now()} -->`;

    let page = await canvas.updatePage(title, body);
  
    // page is brand new
    if (page.created_at === page.updated_at) {
      console.log(page.url + " page created".green);

      // enforces correct module order
      let index = name === "introduction" || name === "roadmap" || name === "getting-ready" || name === "up-and-running" ? supplementalPos++ : null;
      let indent = i > 0 ? 1 : 0;
  
      // append page to module navigation
      await canvas.addPageToModule(moduleID, page.url, indent, index);
    }
    else {
      console.log(page.url + " page updated".brightYellow);
    }
  }
}

// prompt user to kick off application
promptUser();
