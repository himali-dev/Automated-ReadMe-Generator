// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const util = require('util');
const fs = require('fs');
const inquirer = require('inquirer');




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

//Usage of the project
{
  type: 'confirm',
  name: 'confirmUsage',
  message: 'Would you like to add Usage information?'
},
{
  type: 'input',
  name: 'usage',
  message: 'Provide instructions and examples for use.',
  when: ({ confirmUsage }) => {
    if (confirmUsage) {
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
},


// Features
{
  type: 'confirm',
  name: 'confirmFeatures',
  message: 'Would you like to add features?'
},
{
  type: 'input',
  name: 'features',
  message: 'If your project has a lot of features, list them here.',
  when: ({ confirmFeatures }) => {
    if (confirmFeatures) {
      return true;
    } else {
      return false;
    }
  }
},

// How to Contribute
{
  type: 'confirm',
  name: 'confirmContribute',
  message: 'Would you like instructions on how to contribute to this project?'
},
{
  type: 'input',
  name: 'contribute',
  message: 'If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you would prefer.',
  when: ({ confirmContribute }) => {
    if (confirmContribute) {
      return true;
    } else {
      return false;
    }
  }
}

];


// question array ends

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, error => {
    if (error) {
      return console.log('Error in generating Read Me' + error);
    }
  })
}

const readMeCreate = util.promisify(writeToFile);
// function to initialize app
async function init() {
  try {
    const answers = await inquirer.prompt(questions);
    console.log('Thanks for the answers. The data is processed in README_PROFESSIONAL.md: ', answers);


    // fill as per the template
    const finalReadMeData = generateMarkdown(answers);

    //write the readme and console dot log
    await readMeCreate('README_PROFESSIONAL.md', finalReadMeData);
    console.log(finalReadMeData);

  } catch (error) {
    console.log('Sorry there was an error.' + error);
  }
};





// Function call to initialize app
init();
