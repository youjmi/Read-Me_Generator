
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README



// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require("fs");


// TODO: Create an array of questions for user input

    inquirer
        .prompt([{

            //FIND A WAY TO MAKE SURE SOMETHING IS ALWAYS ADDED AND NOT BLANK//
            name: "name",
            type: "input",
            message: "What is your name?",
            //Validation. Making sure user doesnt just press enter to skip. //
            validate: entryInput => {
                if (entryInput) {
                    return true
                }
                else {
                    console.log ("Please put in your name!")
                }
            }
        },
        {
            name: "username",
            type: "input",
            message: "What is your GitHub User Name?",
            //Validation. Making sure user doesnt just press enter to skip. //
            validate: entryInput => {
                if (entryInput) {
                    return true
                }
                else {
                    console.log ("Please put in your User Name!")
                }
            }
        },
        {
            name: "title",
            type: "input",
            message: "What is the title of your project?",
            //Validation. Making sure user doesnt just press enter to skip. //
            validate: entryInput => {
                if (entryInput) {
                    return true
                }
                else {
                    console.log ("Please put in your Title of this project!")
                }
            }
        },
        {
            name: "description",
            type: "input",
            message: "Please share a detailed description about your project if you have anything you would like to share?"
        },
        {
            name: "installation",
            type: "input",
            message: "Please share detailed instructions on how to properly install your program?"
        },
        {
            name: "usage",
            type: "input",
            message: "What is the usage?"

        },
        {
            name: "license",
            type: "list",
            message: "Which license did you use?",
            choices: [
                "MIT",
                "APACHE-2.0",
                "ISC",
                "GNU GPL-v3.0",
                "MOZILLA",
                "No License Applicable"
            ],
        },
        {
            name: "constribution",
            type: "input",
            message: "Are there any resources or any contributors that you would like to mention?"
        },
        {
            name: "test",
            type: "input",
            message: "Figure out a good questions for this..... FOLLOW UP?" ///FOLLOW UP ON WHAT THIS MEANS SPECIFICALLY
        },


        {
            name: "questions",
            type: "input",
            message: "Are there any questions or any issues that you would like to share with me?"
        },
        {
            name: "contact",
            type: "input",
            message: "Thank you for sharing! \n Lastly, please share your email so that I can contact you personally to answer your concerns if any:"
        },
        ])

        // TODO: Create a function to write README file


        .then((data) => {

            fs.writeFile("README.md", generateMarkdown(data, null, '\t'), (err) => //(`/r/n`) <-New Line each time

                err ? console.log(err) : console.log("Success!!! Your ReadMe is now created")
            );
        });
