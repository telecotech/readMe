// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![License](https://img.shields.io/badge/${license}-yellow.svg)`;
}


function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  const licenseUrl = `https://opensource.org/licenses/${license}`;

  return `[${license}](${licenseUrl})`;
}


function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Github Usernam
  ${data.gethub}

  ## Email Address
  ${data.email}

  ## License
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}


 
  `;
  

}

module.exports = { generateMarkdown };






