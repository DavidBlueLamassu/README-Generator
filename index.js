const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please describe all necessary installation instructions for your project.',
    },
    {   //look up commands for installing default text
        type: 'input',
        name: 'dependencies',
        message: 'Please provide the command line to install all necessary dependencies.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide all relevant information regarding project usage.',
    },
    {   //make this a menu for choosing the relevant license
        type: 'list',
        name: 'license',
        message: 'Please select the license (if any) you are using for this project.',
        choices: ['Apache 2.0', 'GNU GPL v3', 'MIT', 'BSD 2', 'Boost 1.0', 'CC0-1.0', 'No License'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide instructions for how other designers may contribute to your project.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide instructions for running tests on this project.',
    },
    {
        type: 'input',
        name: 'testCommand',
        message: 'Please provide the command line to test the project.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide an e-mail address where you can be contacted for questions regarding this project.',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide your GitHub address.',
    },
];

// function to write README file
// function writeToFile(fileName, data) {
// }

// function to initialize program
function init() {
    inquirer
    .prompt(questions).then((data) => {
    const filename = `${data.title}.md`;
    const fileContents = generateMarkdown(data);
    fs.writeFile(filename, fileContents, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
})
}

// function call to initialize program
init();
