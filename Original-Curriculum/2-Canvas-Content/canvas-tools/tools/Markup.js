const fs = require('fs');
const showdown = require('showdown');
showdown.setFlavor('github');
showdown.setOption('simpleLineBreaks', false);
showdown.setOption('simplifiedAutoLink', false);

module.exports = class Markup {
  constructor(path) {
    let mdFilePath = fs.readFileSync(path, 'utf-8');
  
    // initial conversion by showdown
    this.html = new showdown.Converter().makeHtml(mdFilePath);

    // apply any custom transformations afterwards
    this.customizeComponents();
  }

  customizeComponents() {
    // learning block class names
    this.html = this.html.replace(/<blockquote>\n  <p><strong>(.*?)<\/strong>/gm, (match, name) => {
      let title = name.replace(":", "").toLowerCase();
      let className = title.replace(/ /g, "-");

      return `<blockquote class="callout ${className}">\n  <strong>${title}</strong>\n  <p>`;
    });

    // image alignment
    this.html = this.html.replace(/<img src="(.*?)#(left|right?)"/g, (match, src, dir) => {
      return `<img src="${src}" class="image-${dir}"`;
    });

    // disable youtube previews
    this.html = this.html.replace(/<a href=[^>]+youtu[^>]+>/g, (match) => {
      return match.replace('<a ', '<a class="inline_disabled" ');
    });

    // convert ellipsis in links back to dots
    this.html = this.html.replace(/<a href=[^>]+…[^>]+>/g, (match) => {
      return match.replace('…', '...');
    });
  }

  getImages() {
    return this.html.match(/(?<=<img src=").*?(?=")/gi) || [];
  }

  insertImage(localFile, remoteFile) {
    if (this.html.indexOf(localFile) !== -1) {
      this.html = this.html.replace(new RegExp(`(?<=<img src=").*?${localFile}(?=")`, "g"), remoteFile);

      return true;
    }

    return false;
  }

  getVideos() {
    return this.html.match(/(?<=!video: *)[\w\-.]+/gi) || [];
  }

  insertVideo(video, url) {
    if (this.html.indexOf(video) !== -1) {
      // replace video name with iframe pointing to url
      this.html = this.html.replace(
        new RegExp(`!video: *${video}`, "g"), 
        `<iframe style="width: 720px; height: 420px;" src="${url}" width="720" height="420" allowfullscreen="allowfullscreen" webkitallowfullscreen="webkitallowfullscreen" mozallowfullscreen="mozallowfullscreen" allow="autoplay *"></iframe>`
      );

      return true;
    }

    return false;
  }

  getAssessments() {
    return this.html.match(/(?<=!assessment: *)[0-9A-Za-z]+/gi) || [];
  }

  insertAssessment(id, url) {
    if (this.html.indexOf(id) !== -1) {
      // replace id with iframe pointing to assessment url
      this.html = this.html.replace(
        new RegExp(`!assessment: *${id}`, "g"), 
        `<iframe style="width: 100%; height: 800px;" src="${url}" width="100%" height="800px" allowfullscreen="allowfullscreen" webkitallowfullscreen="webkitallowfullscreen" mozallowfullscreen="mozallowfullscreen" allow="autoplay *"></iframe>`
      );

      return true;
    }

    return false;
  }

  getTitle() {
    return (this.html.match(/(?<=<h1.*?>).*?(?=<\/h1>)/) || [])[0];
  }

  getPageChunks(banner) {
    // since h2 became the title, need to bump up all other h* tags
    const bumpHeaders = (content) => {
      return content.replace(/^(<h)([2-6])( id=.*<\/h)([2-6])(>)/gm, (line, open, num1, middle, num2, close) => {
        return open + (num1-1) + middle + (num2-1) + close;
      });
    };

    // insert hidden image
    const insertBanner = () => {
      if (banner) {
        return `<img src="${banner}" alt="lesson banner" style="display:none" />`;
      }

      return '';
    };

    // split on <h2> tags
    return this.html.match(/<h2.*?(?=<h2|$)/gs).map((page) => {
      // ignore first line (the title)
      let body = page.replace(/^.*?\n/, '');

      // separate title and content
      return {
        title: page.match(/(?<=<h2.*?>).*?(?=<\/h2>)/)[0],
        body: `<div id="bootcamp">${bumpHeaders(body)}${insertBanner()}</div>`
      }
    });
  }
}
