require('dotenv').config();

const fs = require("fs");
const open = require("open");
const inquirer = require("inquirer");

const Canvas = require("./tools/Canvas.js");

async function promptUser() {
  let {command} = await inquirer.prompt({
    message: "Choose an option:",
    name: "command",
    type: "list",
    choices: ["Nuke Module Lessons", "Exit"]
  });

  if (command === "Exit") process.exit();

  if (command === "Nuke Module Lessons") {
    let {module} = await inquirer.prompt({
      message: "Enter module number (e.g., 2):",
      name: "module",
      type: "text"
    });

    const canvas = new Canvas(
      process.env.CANVAS_API_URL,
      process.env.CANVAS_TOKEN,
      process.env.CANVAS_COURSE_ID
    );

    let lessons = [];

    try  {
      lessons = await canvas.getLessonsByModule(module);
      lessons.forEach(lesson => console.log(`${lesson.page_id}: ${lesson.title}`));
    } catch(e) {
      console.log(e);
      process.exit();
    }

    let {confirm} = await inquirer.prompt({
      message: "Nuke these lessons? y/n",
      name: "confirm",
      type: "text"
    });

    if (confirm.toLowerCase() === "y" ) {
      lessons.forEach(async lesson => {
        try {
          const status = await canvas.deleteLesson(lesson.url);
          if (status) {
            console.log(`${lesson.page_id}: ${lesson.title} delete response: ${status}`);
          }
        } catch(e) {
          console.log(e);
          process.exit();
        }
      });
    } else {
      process.exit();
    }
  }
}

// prompt user to kick off application
promptUser();
