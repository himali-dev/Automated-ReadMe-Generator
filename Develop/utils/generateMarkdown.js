function generateMarkdown(data) {

  //returns a license badge based on which license is passed in


  let licenseLink = "";
  let licenseSelected = `${data.license}`;


  if (licenseSelected === 'GNU AGPLv3') {
    licenseSelected = 'GNUAGPLv3';
    licenseLink = 'https://choosealicense.com/licenses/agpl-3.0/';
  };
  if (licenseSelected === 'GNU GPLv3') {
    licenseSelected = 'GNUGPLv3';
    licenseLink = 'https://choosealicense.com/licenses/gpl-3.0/';
  };
  if (licenseSelected === 'GNU LGPLv3') {
    licenseSelected = 'GNULGPLv3';
    licenseLink = 'https://choosealicense.com/licenses/lgpl-3.0/';
  };
  if (licenseSelected === 'Mozilla Public License 2.0') {
    licenseSelected = 'MozillaPublicLicense2.0';
    licenseLink = 'https://choosealicense.com/licenses/mpl-2.0/';
  };
  if (licenseSelected === 'Apache License 2.0') {
    licenseSelected = 'ApacheLicense2.0';
    licenseLink = 'https://choosealicense.com/licenses/apache-2.0/';
  };
  if (licenseSelected === 'MIT License') {
    licenseSelected = 'MITLicense';
    licenseLink = 'https://choosealicense.com/licenses/mit/';
  };
  if (licenseSelected === 'Boost Software License 1.0') {
    licenseSelected = 'BoostSoftwareLicense1.0';
    licenseLink = 'https://choosealicense.com/licenses/bsl-1.0/';
  };
  if (licenseSelected === 'The Unlicense') {
    licenseSelected = 'TheUnlicense';
    licenseLink = 'https://choosealicense.com/licenses/unlicense/';
  };



}




// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
