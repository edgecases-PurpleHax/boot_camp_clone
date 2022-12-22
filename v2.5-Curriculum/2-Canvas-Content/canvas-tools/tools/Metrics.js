const fs = require('fs');

module.exports = class Metrics {
  constructor() {
    this.title = arguments[0].split("/")[1];
    this.content = "";

    // merge multiple lessons together
    for (let path of arguments) {
      this.content += fs.readFileSync(path, 'utf-8');
    }

    // only one lesson, so use that title
    if (!arguments[1]) {
      this.title += "-" + arguments[0].substr(arguments[0].lastIndexOf("/")+1).replace(".md", "");
    }
  }

  getWordCount() {
    let count = {
      words: 0,
      code: 0
    };

    let inCodeBlock = false;

    this.content.split("\n").forEach((line) => {
      // ignore empty lines and images
      if (line.length > 0 && !line.match(/!\[.*\]\(.*\)/)) {
        // ignore code blocks
        if (line.indexOf("```") > -1) {
          inCodeBlock = !inCodeBlock;
        }
        else if (!inCodeBlock) {
          // count up them words
          count.words += (line.match(/\b[\w.'-\/:]+\b/g) || []).length;
        }
        else {
          // inside a code snippet, so count the lines
          count.code++;
        }
      }
    });

    return count;
  }

  getImageCount() {
    let images = this.content.match(/!\[.*\](.*)/g) || [];

    return {
      count: images.length,
      gifs: images.filter((img) => img.indexOf(".gif") > -1).length
    };
  }

  getCallouts() {
    let callouts = {};

    // find callout labels
    // i.e. first instance of `> **text**` not preceeded by previous `>` lines
    (this.content.match(/(?<=(?<!\s>[^\n]*)(\s> *\*\*))[\w -]*/gs) || []).forEach((item) => {
      let key = item.toLowerCase().replace(/-/g, " ");

      // skip
      if (key.indexOf("asset") === 0) return;

      // add or update value on object map
      if (!callouts[key]) {
        callouts[key] = 1;
      }
      else {
        callouts[key]++;
      }
    });

    return callouts;
  }

  getNeededAssets() {
    return this.content.match(/(?<=> *\*\* *asset need.*)http[^\s>]*/gi) || [];
  }

  generateReport(folder) {
    // create reports folder
    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder);
    }

    let reportPath = `${folder}${this.title}-${Date.now()}.csv`;

    // gather data
    let totals = this.getWordCount();
    let images = this.getImageCount();
    let callouts = this.getCallouts();
    let assets = this.getNeededAssets();

    // add up callouts
    let calloutTotal = Object.values(callouts).reduce((total, val) => total + val);

    // start constructing string for csv file
    let content = `Word Count,${totals.words}\nLines of Code,${totals.code}\nImages,${images.count}`;
    
    if (images.gifs > 0) {
      content += `\nGIFs,${images.gifs}`;
    }

    content += `\n\nCallouts,${calloutTotal}\n`;

    for (let key in callouts) {
      content += `${key},${callouts[key]}\n`;
    }

    if (assets.length > 0) {
      content += `\nAssets Needed:\n`;
  
      assets.forEach((asset) => {
        content += `${asset}\n`;
      });
    }
  
    // write and return
    fs.writeFileSync(reportPath, content);
    return reportPath;
  }
};