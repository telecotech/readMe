const inquirer = require('inquirer');
const fs = require('fs');
const { generateMarkdown } = require('./generateMarkdown');

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    validate: function (input) {
      return input !== '' || 'Please enter a title for your project';
    },
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a short description of your project:',
    validate: function (input) {
      return input !== '' || 'Please enter a description for your project';
    },
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How do you install your project?',
    validate: function (input) {
      return input !== '' || 'Please provide instructions on how to install your project';
    },
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How do you use your project?',
    validate: function (input) {
      return input !== '' || 'Please provide instructions on how to use your project';
    },
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can others contribute to your project?',
    validate: function (input) {
      return input !== '' || 'Please provide information on how others can contribute to your project';
    },
  },
  {
    type: 'input',
    name: 'tests',
    message: 'How can others test your project?',
    validate: function (input) {
      return input !== '' || 'Please provide instructions on how others can test your project';
    },
  },
  {
    type: 'list',
    name: 'license',
    message: 'What kind of license does your project have?',
    choices:['MIT','Apache-2.0','GPL-3.0','BSD-3-Clause'],
    validate: function (input) {
      return input !== '' || 'Please provide information on what kind of license your project has';
    },
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: 'What is your GitHub username?',
    validate: function (input) {
      return input !== '' || 'Please enter your GitHub username';
    },
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
    validate: function (input) {
      return input !== '' || 'Please enter your email address';
    },
  },
];


// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Successfully wrote ${fileName}!`);
    }
  });
}

// function to initialize app
function init() {
  inquirer.prompt(questions)
    .then(answers => {
      const markdown = generateMarkdown(answers);
      writeToFile('README.md', markdown);
    })
    .catch(error => {
      console.error(error);
    });
}

// call the init function
init();
