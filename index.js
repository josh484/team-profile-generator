const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const checkEmail = async (input) => {
    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(input)
}
const checkLetters = async (input) => {
    if(/[a-zA-Z]/.test(input) == false){
        return "only letters please"
    }
    else if (/[a-zA-Z]/.test(input) == true && /[0-9]/.test(input) == false){
        return true
    }
    
}
const validateNumber = async (answer) => {
    if (isNaN(answer)) {
        return "please enter a number";
      }
      return true;
}

// TODO: Write Code to gather information about the development team members, and render the HTML file.
questions = [
    {
    type: 'input',
    message: 'Name?',
    name: 'eName',
    validate: checkLetters
    },
    {
        type: 'input',
        message: 'Employee ID',
        name: 'id',
        validate: validateNumber
    },
    {
        type: 'input',
        message: 'What is your E-mail?',
        name: 'email',
        validate: checkEmail
    },
    {
        type: 'number',
        message: 'Office Number',
        name: 'oNumber',
        validate: validateNumber
    },
]


inquirer.prompt(questions).then(function (response) {

})