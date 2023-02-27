const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for user
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub user name?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your e-mail address?',
    },
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
        name: 'dependencies',
        message: 'What command should be run to install dependencies?',
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide all relevant information regarding usage of this project.',
    },
    {   
        type: 'list',
        name: 'license',
        message: 'Please select the license (if any) you are using for this project.',
        choices: ['Apache 2.0', 'GNU GPL v3', 'MIT', 'BSD 2', 'Boost 1.0', 'CC0-1.0', 'No License'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How may other designers contribute to your project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command is required to run tests?',
        default: 'npm test'
    },
];

// Function to initialize program and to write README file
function init() {
    //Activates "inquirer"; once questions have been answered employs user input, "data", to construct a README file
    inquirer
    .prompt(questions).then((data) => {
    //Variable to create README file name
    const filename = `README.md`;
    //Variable to call the generateMarkdown() function using the answers, "data", obtained from "inquirer"
    const fileContents = generateMarkdown(data);
    //Writes a README file in the project folder; using a separate folder prevents "writeFile" from overwriting the README
    //for this programme
    fs.writeFile("./project/" + filename, fileContents, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
})
}

// Function call to initialize program
init();
