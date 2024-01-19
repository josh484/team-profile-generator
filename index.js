const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

let employees = []
let eQuestions
let iQuestions
//Some validations
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
let questions = [
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
    const manager = new Manager(response.eName, response.id, response.email, response.oNumber) 
    employees.push(manager);
    questions.splice(3,1)

    //new questions for engineer
    eQuestions = [].concat(questions, [{
        type: 'input',
        message: 'github username?',
        name: 'github',
    }])

    //new questions for intern
    iQuestions = [].concat(questions, [{
        type: 'input',
        message: 'school?',
        name: 'school',
    }])
    console.log(iQuestions)
    choice();
})

function choice(){
    inquirer.prompt([
        {
            type: 'list',
            message: 'Choose one of the following',
            name: 'choice',
            choices: ['Add an Engineer', 'Add an intern', 'Finish building the team'],
        }
    ]).then(function (answer) {
        if (answer.choice == 'Add an Engineer'){
            promptu(eQuestions, Engineer);
        }
        else if(answer.choice == 'Add an intern'){
            promptu(iQuestions, Intern);
        }
        else{
            fs.writeFile('teams.html', render(employees), (err) =>
            err ? console.error(err) : console.log('hee ho')
            )
        }
    })
}

function promptu(qChoice, classP){
    inquirer.prompt(qChoice).then(function (answer) {
        if(classP == Engineer){
            const engineer = new Engineer(answer.eName, answer.id, answer.email, answer.github)
            employees.push(engineer)
        }
        else{
            const intern = new classP(answer.eName, answer.id, answer.email, answer.schools)
            employees.push(intern)
        }
        choice();
    })
    
}