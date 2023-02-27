// function to generate markdown for README
function generateMarkdown(data) {
  let badge;
  let licenseInfo;
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
    licenseInfo = "No license."
  }
  return `${badge}
  # ${data.title}
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
  ${data.installation}
  ${data.dependencies}
  ## Usage
  ${data.usage}
  ## License
  ${licenseInfo}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ${data.testCommand}
  ## Questions
  ${data.email}
  ${data.github}
`;
}

module.exports = generateMarkdown;
