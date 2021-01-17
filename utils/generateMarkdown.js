

// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  else if (license === "APACHE-2.0") {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
  else if (license === "ISC") {
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
  }
  else if (license === "GNU GPL-v3.0") {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  }
  else if (license === "MOZILLA") {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  }
  else {
    return ""
  }
};

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return '(https://opensource.org/licenses/MIT)'
  }
  else if (license === "APACHE-2.0") {
    return '(https://opensource.org/licenses/Apache-2.0)'
  }
  else if (license === "ISC") {
    return '(https://opensource.org/licenses/ISC)'
  }
  else if (license === "GNU GPL-v3.0") {
    return '(https://www.gnu.org/licenses/gpl-3.0)'
  }
  else if (license === "MOZILLA") {
    return '(https://opensource.org/licenses/MPL-2.0)'
  }
  else {
    return ""
  }
}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "No License Applicable") {
    return ""
  }
  else {
    return `${renderLicenseLink(license)}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ## ${data.title}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributions](#constribution)
  * [Test](#test)
  * [Questions or Concerns?](#questions)


  ## [Description] 
  ${data.description}
  
  ## [Installation]
  ${data.installation}
  

  ## [Usage]
  ${data.usage}

  ## [License]
  
  License used is from :
  ${renderLicenseBadge(data.license)}
  
  source:
  ${renderLicenseSection(data.license)}

  ## [Contributions]
  ${data.constribution}

  ## [Test]
  ${data.test}


  ## [Questions or Concerns?]
  - Issues: ${data.questions}
  - Name: ${data.name}
  - GitHub Username: ${data.username}
  - Email: ${data.contact}
  
  `
}

module.exports = generateMarkdown;
