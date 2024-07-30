// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "motivationDesc",
    message: "What was your motivation?",
  },
  {
    type: "input",
    name: "whyDesc",
    message: "Why did you build this project?",
  },
  {
    type: "input",
    name: "problemSolvedDesc",
    message: "What problem does it solve?",
  },
  {
    type: "input",
    name: "learnedDesc",
    message: "What did you learn?",
  },
  {
    type: "input",
    name: "installsteps",
    message: "What are the steps required to install your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide details on usage",
  },
  {
    type: "list",
    name: "license",
    choices: [
      "MIT License",
      "Apache License 2.0",
      "GNU General Public License v3.0",
      "Boost Software License 1.0",
      "Creative Commons Zero v1.0 Universal",
      "Eclipse Public License 2.0",
      "The Unlicense",
      "Mozilla Public License 2.0",
    ],
  },
  {
    type: "input",
    name: "contributing",
    message: "Provide contributing detalils",
  },
  {
    type: "input",
    name: "tests",
    message: "Provide test details",
  },
  {
    type: "input",
    name: "contactemail",
    message: "What is your email address",
  },
  {
    type: "input",
    name: "contactgithub",
    message: "What is your Github username",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Successfully wrote to README.md")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    // console.log(answers);
    const RMcontent = generateMarkdown(answers);
    writeToFile("README.md", RMcontent);
  });

  // Use writeFile method imported from fs.promises to use promises instead of
  // a callback function
  //.then((response) => FileSystem.writeFile("README.md", writeToFile(response)))
  //.then(() => console.log("Successfully wrote to README.md"))
  //.catch((err) => console.error(err));
}

// module.exports = questions();

// Function call to initialize app
init();
