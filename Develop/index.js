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
      console.log('Please enter Project Name.');
      return false;
    }
  }
},
//Description of the project
{
  type: 'input',
  name: 'information',
  message: '- What was your motivation? Why did you build this project? (Note: the answer is not "Because it was a homework assignment.") What problem does it solve? What did you learn?',
  validate: nameInput => {
    if (nameInput) {
      return true;
    } else {
      console.log('Please enter Project Description.');
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
