const inquirer = require("inquirer");
const fs = require("fs");
//const generateMarkdown = require("C:Usersashle\bootcamp\readme-generatorDevelopindex.js");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `#${title}
        
    ##Description
            ${motivationDesc}.${whyDesc}.${problemSolvedDesc}. ${learnedDesc}.
    ##Table of Contents
        Installation
        Usage
        License
        Contributing
        Tests
        Questions
               
    ##Installation
        ${installsteps}\n
       
    ##Usage
        ${usage}\n
        
    ##License
        ${license}\n
        
    ##Contributing
        ${contributing}\n
       
    ##Tests
        ${tests}\n
       
        
    ##Questions
        My Email Address: ${contactemail}\n
        My Github username: ${contactgithub}\n
        

`;
}

module.exports = generateMarkdown;
