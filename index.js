// TODO: Include packages needed for this application
const path = require("path")
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require("fs")


// TODO: Create an array of questions for user input
inquirer
    .prompt([{
        name: "name",
        type: "input",
        message: "What is your name?"
    },
    {
        name: "username",
        type: "input",
        message: "What is your GitHub User Name?"
    },
    {
        name: "title",
        type: "input",
        message: " What is the title of your project?"
    },
    {
        name: "description",
        type: "input",
        message: "Please share a detailed description about your project"
    },
    {
        name: "issues",
        type: "input",
        message: "Were there any issues you had that you would like to share?"
    },
    {
        name: "shoutouts",
        type: "input",
        message: "If you worked in a group, please share their names."
    },
    ])

    // TODO: Create a function to write README file


    .then((data) => {
        const filename = `${data.name.toLowerCase().split('').join('')}.json`;

        fs.writeFile("README.md", JSON.stringify(data, null, '\r\n' ), (err) =>

            err ? console.log(err) : console.log("Success!!! Your ReadMe is now created")
        );
    });


// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();

