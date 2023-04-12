// this function generates final read me file.


function generateMarkdown(data) {
  //license
  let licenseSelected = `${data.license}`;

  // link is empty when nothing is yet selected
  let licenseLink = '';


  //if conditional to give the license the correct link
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
  if (licenseSelected === 'The Unlicense') {
    licenseSelected = 'TheUnlicense';
    licenseLink = 'https://choosealicense.com/licenses/unlicense/';
  };



//this variable hold the read me template
let readMeMarkUp =

`
## ${data.title}
## Description
${data.information}
`;

//table of contents

let tableOfContents =
`## Table of Contents`;
  if (data.installation) {
    tableOfContents +=
      `
  * [Installation](#installation)`
  };
  if (data.usage) {
    tableOfContents +=
      `
  * [Usage](#usage)`
  };
  if (data.credits) {
    tableOfContents +=
      `
  * [Credits](#credits)`
  };
  if (data.features) {
    tableOfContents +=
      `
  * [Features](#features)`
  };
  if (data.contribute) {
    tableOfContents +=
      `
  * [How to Contribute](#contribute)`
  };

  tableOfContents +=
      `
  * [Questions](#questions)`


  tableOfContents +=
      `
  * [License](#license)`




  readMeMarkUp += tableOfContents;



  if (data.installation) {
    readMeMarkUp +=
      `
  ## Installation

  **Follow these steps to install this application:**

  ${data.installation}`
  };

  //usage
  if (data.usage) {
    readMeMarkUp +=
      `

  ## Usage

  *Instructions for use:*

  ${data.usage}`
  };

  //howtocontribute
  if (data.contribute) {
    readMeMarkUp +=
      `
  ## Contribute

  *If you would like to contribute, please follow these guidelines:*

  ${data.contribute}`
  };
