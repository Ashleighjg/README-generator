const inquirer = require("inquirer");
//const fs = require("fs");
// const data = require("../index.js");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
/*
      "MIT License" [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT),
      "Apache License 2.0" [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0),
      "GNU General Public License v3.0" [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0),
      "Boost Software License 1.0" [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt),
      "Creative Commons Zero v1.0 Universal" [![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/),
      "Eclipse Public License 2.0" [![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0),
      "The Unlicense"[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/),
      "Mozilla Public License 2.0" [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0),
*/

const renderLicenseBadge = (license) => {
  if (license == "MIT License") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
  if (license == "Apache License 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
  if (license == "GNU General Public License v3.0") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  }
  if (license == "Boost Software License 1.0") {
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
  }
  if (license == "Creative Commons Zero v1.0 Universal") {
    return `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`;
  }
  if (license == "Eclipse Public License 2.0") {
    return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
  }
  if (license == "The Unlicense") {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
  }
  if (license == "Mozilla Public License 2.0") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  } else {
    return "";
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  if (license == "MIT License") {
    return `([${license}](https://opensource.org/licenses/MIT))`;
  }
  if (license == "Apache License 2.0") {
    return `([${license}](https://opensource.org/licenses/Apache-2.0))`;
  }
  if (license == "GNU General Public License v3.0") {
    return `([${license}](https://www.gnu.org/licenses/gpl-3.0))`;
  }
  if (license == "Boost Software License 1.0") {
    return `([${license}](https://www.boost.org/LICENSE_1_0.txt))`;
  }
  if (license == "Creative Commons Zero v1.0 Universal") {
    return `([${license}](http://creativecommons.org/publicdomain/zero/1.0/))`;
  }
  if (license == "Eclipse Public License 2.0") {
    return `([${license}](https://opensource.org/licenses/EPL-1.0))`;
  }
  if (license == "The Unlicense") {
    return `([${license}](http://unlicense.org/)`;
  }
  if (license == "Mozilla Public License 2.0") {
    return `([${license}](https://opensource.org/licenses/MPL-2.0)`;
  } else {
    return "";
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {
  if (license) {
    return `This project is licensed under the ${renderLicenseLink(
      license
    )} license.`;
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

  return `
  # ${data.title}

  
        
  ## Description ${renderLicenseBadge(data.license)}
  ${data.motivationDesc}. ${data.whyDesc}. ${data.problemSolvedDesc}. ${
    data.learnedDesc
  }.

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
               
  ## Installation
  ${data.installsteps}
       
  ## Usage
  ${data.usage}
        
  ## License
  ${renderLicenseSection(data.license)}
        
  ## Contributing
  ${data.contributing}
       
  ## Tests
  ${data.tests}
       
  ## Questions
  If you have any questions you can email me at ${
    data.contactemail
  } or contact me via Github username ${data.contactgithub}.
        

`;
}

module.exports = generateMarkdown;
