

// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  Table of Contents

  *[Description] 
  ${data.description}
  
  *[Installation Instructions]
  ${data.installation}

  *[Usage]
  ${data.usage}

  *[License]
  ${data.license}

  *[Contributions]
  ${data.constributor}

  *[Test]

  *[Questions or Concerns?]
  Name: ${data.name}
  GitHub Username: ${data.username}
  Email: ${data.contact}
  Issuese: ${data.questions}
  `
}











module.exports = generateMarkdown;
