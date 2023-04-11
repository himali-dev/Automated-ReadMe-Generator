// TODO: Include packages needed for this application
const inquireCmd = require('inquirer');


// Questions Array
const questions = [{
  type: 'input',
  name: 'title',
  message: 'Let us know the Project Name(Required)',
  validate: nameInput => {
    if (nameInput) {
      return true;
    } else {
      console.log('Please enter Project Name.');
      return false;
    }
  }
},

//Description of the project
{
  type: 'input',
  name: 'information',
  message: 'What was your motivation? Why did you build this project? (Note: the answer is not "Because it was a homework assignment.") What problem does it solve? What did you learn?',
  validate: nameInput => {
    if (nameInput) {
      return true;
    } else {
      console.log('Please enter Project Description.');
      return false;
    }
  }
},

//Installation of the project
{
  type: 'confirm',
  name: 'confirmInstall',
  message: 'Would you like to give instructions to install this project?'
},
{
  type: 'input',
  name: 'installation',
  message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
  when: ({ confirmInstall }) => {
    if (confirmInstall) {
      return true;
    } else {
      return false;
    }
  }
},

// Credits
{
  type: 'confirm',
  name: 'confirmCredits',
  message: 'Would you like to add collaborators?'
},
{
  type: 'input',
  name: 'credits',
  message: 'List your collaborators, if any, with links to their GitHub profiles.If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.If you followed tutorials, include links to those here as well.',
  when: ({ confirmCredits }) => {
    if (confirmCredits) {
      return true;
    } else {
      return false;
    }
  }
},

// Github UserName
{
  type: 'input',
  name: 'username',
  message: 'What is your GitHub username? (Required)',
  validate: nameInput => {
    if (nameInput) {
      return true;
    } else {
      console.log('Please enter your GitHub username.');
      return false;
    }
  }
},

// dev email
{
  type: 'input',
  name: 'email',
  message: 'What is your email address? (Required)',
  validate: nameInput => {
    if (nameInput) {
      return true;
    } else {
      console.log('Please enter your email.');
      return false;
    }
  }
},


//license

{
  type: 'checkbox',
  name: 'license',
  message: 'Please select license.',
  choices: ['Apache License 2.0', 'MIT License', 'Boost Software License 1.0',
  'The Unlicense','GNU AGPLv3', 'GNU GPLv3',
    'GNU LGPLv3', 'Mozilla Public License 2.0',
    ],
  validate: nameInput => {
    if (nameInput) {
      return true;
    } else {
      console.log('Please select license.');
      return false;
    }
  }
}


];
// question array ends

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
