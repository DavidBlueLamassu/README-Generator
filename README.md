# README Generator

## Description
The purpose of this project was to use Node.js to create an application to generate README files in Markdown according to user specifications. npm "inquirer" provides the command line interface to generate questions and to receive information from the user regarding the contents of the README. The questions used by "inquirer" require replies that are either a simple "input" or the selection of an option from a "list"; some questions also provide default answers. Once collected, this information allows the completion of a README template which includes the following sections: Title, Description, Installation, Usage, License, Contributing, Tests and Questions. There is also a Table of Contents which provides internal links to the different sections of the README. The Markdown code for the README is generated in a separate JavaScript file (utils/generateMarkdown.js). This employs the "data" received by "inquirer" to complete a README template. The "generateMarkdown" file also includes conditional code which specifies the license information to be diplayed in the README, including a license badge. Once the Markdown code has been generated, "fs.writeFile" creates a README file in the "project" folder. A separate folder is used for this README in order to prevent the README for the application being overwritten by the README Generator. Once the application generates a new README the user may open the "project" folder, and then copy and paste the README into his or her project. A sample README is provided in the "project" folder.

## Installation
To run the README Generator, this repo must first be cloned onto the user's machine with GitBash or a similar application. Installation may then be completed using VS Code. Once the relevant folder is opened in VS Code, right-click on "index.js" and select "Open in Integrated Terminal". Then type "npm install" at the prompt and hit Enter. "inquirer" will install automatically and the README Generator will be ready to use.

## Usage
To use the README Generator right-click on "index.js" and select "Open in Integrated Terminal". Then type "node index.js" and answer the questions asked by "inquirer". Once these questions have been correctly answered the application will print "Success!" and a README will be generated in the "project" folder. This README can then be copied and pushed to the user's project. Upon download the README Generator contains a sample README file in the "project" folder; this, and any subsequent README, will be overwritten when the user generates a new README file using the application.

## Credits
N/A

## License
N/A

## https://davidbluelamassu.github.io/Weather-Dashboard/

![Screenshot of the Weather Dashboard](./images/weather-dashboard-screenshot.png)