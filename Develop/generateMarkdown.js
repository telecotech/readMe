// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  return `![License](https://img.shields.io/badge/${license}-yellow.svg)`;
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

return  `(https://opensource.org/licenses/${license})`;
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const licenseUrls = {
  'MIT': 'https://opensource.org/licenses/MIT',
  'Apache-2.0': 'https://opensource.org/licenses/Apache-2.0',
  'GPL-3.0': 'https://www.gnu.org/licenses/gpl-3.0',
  'BSD-3-Clause': 'https://opensource.org/licenses/BSD-3-Clause'
};



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

  
  ## License
 ${renderLicenseBadge(data.license)}
 ${renderLicenseLink(data.license)}
 
  `;
  

}

module.exports = { generateMarkdown };






