const inquirer = require("inquirer");
//const fs = require("fs");
// const data = require("../index.js");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  if (license) {
    return `![License](https://img.shields.io/badge/License-${license}-brightgreen)`;
  } else {
    return "";
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  if (license) {
    return `[License](https://opensource.org/licenses/${license})`;
  } else {
    return "";
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {
  if (license) {
    return `## License

This project is licensed under the [${license}](https://opensource.org/licenses/${license}) license.`;
  } else {
    return "";
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // const {
  //   title,
  //   motivationDesc,
  //   whyDesc,
  //   problemSolvedDesc,
  //   learnedDesc,
  //   installsteps,
  //   usage,
  //   license,
  //   contributing,
  //   tests,
  //   contactgithub,
  //   contactemail,
  // } = data;

  return `#${data.title}

  
        
    ## Description ${renderLicenseBadge(data.license)}
       ${data.motivationDesc}.${data.whyDesc}.${data.problemSolvedDesc}. ${
    data.learnedDesc
  }.
    ## Table of Contents
        -[Installation](#installation)
        -[Usage](#usage)
        -[License] ${renderLicenseLink(data.license)}
        -[Contributing]
        -[Tests]
        -[Questions]
               
    ##Installation
        ${data.installsteps}
       
    ##Usage
        ${data.usage}
        
    ##License
        ${renderLicenseSection(data.license)}
        
    ##Contributing
        ${data.contributing}
       
    ##Tests
        ${data.tests}
       
        
    ##Questions
        My Email Address: ${data.contactemail}
        My Github username: ${data.contactgithub}
        

`;
}

module.exports = generateMarkdown;
