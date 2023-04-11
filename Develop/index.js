// TODO: Include packages needed for this application
const inquireCmd = require('inquirer');


// TODO: Create an array of questions for user input
const questions = [{
  type: 'input',
  name: 'title',
  message: 'Let us know the Project Name(Required)',
  validate: nameInput => {
    if (nameInput) {
      return true;
    } else {
      console.log('Please enter Project.');
      return false;
    }
  }
}];
// question array ends

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
