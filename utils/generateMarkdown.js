// Function to generate markdown for README
function generateMarkdown(data) {
  //Holds the URL value for the license badge
  let badge;
  //Holds the license name for the license section of the README
  let licenseInfo;
  //Holds text as part of the license description for the README; this is reset to "" if the user selects "No License".
  let licenseText = "This project is licensed under the "
  
  //Conditional to determine the appropriate values for the three variables above, based upon user input regarding the 
  //project license
  if (data.license === "Apache 2.0") {
    badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    licenseInfo = "Apache License 2.0";
  } else if (data.license === "GNU GPL v3") {
    badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    licenseInfo = "GNU General Public License v3.0";
  } else if (data.license === "MIT") {
    badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    licenseInfo = "MIT License";
  } else if (data.license === "BSD 2") {
    badge = "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
    licenseInfo = "BSD 2-Clause 'Simplified' License";
  } else if (data.license === "Boost 1.0") {
    badge = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    licenseInfo = "Boost Software License 1.0";
  } else if (data.license === "CC0-1.0") {
    badge = "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";
    licenseInfo = "Creative Commons Zero v1.0 Universal";
  } else {
    badge = "";
    licenseText = "";
    licenseInfo = "No license."
  }
  
  //README template, completed with user information, "data", obtained from "informer"
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
