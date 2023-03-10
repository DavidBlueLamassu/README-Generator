// Function to generate markdown for README
function generateMarkdown(data) {
  //Holds the URL value for the license badge
  let badge;
  //Holds the license name for the license section of the README
  let licenseInfo;
  //Holds text as part of the license description for the README; this is reset to "" if the user selects "No License".
  let licenseText = "This project is licensed under the "
  
  //Conditional to determine the appropriate values for the three variables above, based upon user input regarding the 
  //project license. The license URLs were obtained from Github: "Markdown License badges", GitHub, 
  //https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba, last viewed 27 February 2023.
  
  if (data.license === "Apache 2.0") {
    badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    licenseInfo = "Apache License 2.0.";
  } else if (data.license === "GNU GPL v3") {
    badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    licenseInfo = "GNU General Public License v3.0.";
  } else if (data.license === "MIT") {
    badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    licenseInfo = "MIT License.";
  } else if (data.license === "BSD 2") {
    badge = "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
    licenseInfo = "BSD 2-Clause 'Simplified' License.";
  } else if (data.license === "Boost 1.0") {
    badge = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    licenseInfo = "Boost Software License 1.0.";
  } else if (data.license === "CC0-1.0") {
    badge = "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";
    licenseInfo = "Creative Commons Zero v1.0 Universal.";
  } else {
    badge = "";
    licenseText = "";
    licenseInfo = "No license."
  }
  
  //README template, completed with user information ("data") obtained from "informer". A source I found useful 
  //for writing Markdown code for internal references, in the Table of Contents section, was a question by 
  //Minstrel on "Stack Overflow": Minstrel, "Markdown : internal link to section doesn't work", Stack Overflow 
  //(25 October 2018), https://stackoverflow.com/questions/52991381/markdown-internal-link-to-section-doesnt-work, 
  //last viewed 28 February 2023. kotchwane's answer to another question on "Stack Overflow" provided a useful method 
  //for creating boxes in Markdown using triple tildes ("~~~"), as employed in the "Installation" and "Tests" sections 
  //below: TJB, "How can I create a text box for a note in markdown?", Stack Overflow (3 September 2014), 
  //https://stackoverflow.com/questions/25654845/how-can-i-create-a-text-box-for-a-note-in-markdown, last viewed: 
  //28 February 2023.
  return `
  # ${data.title}
  
  ${badge}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  To install necessary dependencies, run the following command:
  ~~~
  ${data.dependencies}
  ~~~
  ## Usage
  ${data.usage}

  ## License
  ${licenseText}${licenseInfo}

  ## Contributing
  ${data.contributing}

  ## Tests
  To run tests, run the following command:
  ~~~
  ${data.tests}
  ~~~

  ## Questions
  If you have any questions regarding the repo, open an issue or contact me directly at ${data.email}.
  You can find more of my work at [${data.github}](https://github.com/${data.github}).
`;
}

module.exports = generateMarkdown;
