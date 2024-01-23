[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
# team-profile-generator
Link to Repository: https://github.com/josh484/team-profile-generator <br />
Link to HTML file: [Team example](./output/team.html)
## Description
A team profile generator which highlights my understanding of testing with jest and using the node inquirer to prompt the user for a series of questions.
## Table of Contents
[Installation](#installation) <br />
[Usage](#usage) <br />
[Lisence](#lisence) <br />
[Tests](#tests) <br />
[Questions](#questions) 
## Installation
In order to install the project simply click the green code button and download the file as a zip. Once downloaded simply right click on the file and unzip the folder.
## Usage
Once the file is downloaded simply in a terminal locate the application folder and type ```node index.js``` and you will be given a series of prompts. <br />
![Node example](./assets/images/node_example.png) <br />
Once filled it will then generate a html file at output/team.html.
[Team example](./output/team.html)
## Lisence
This work is using the lisence: MIT
## Tests
To do the tests, simply download the file and inside the file within a terminal type ```npm test``` which will run the jest test inside the tests folders the result should be: <br />
![Test example](./assets/images/tests.png)
## Features
The application uses node.js and jests to create a html file and also run tests. 
- Firstly the task asked me to create classes for all the files in the ```lib``` directory where each other file in that directory inherits from the ```Employee.js```. After doing so I then ran all the tests to make sure all the classes were correct as show in the test examples above.
- Secondly, the ```index.js``` file handles all the work. Using Inquirer to prompt the user for questions about the manager and puts that into an employee array by creating a new instance of manager and then prompting the user for a choice between "adding an Engineer". "adding an Intern" or "Completing Team". 
1. Choosing the former two accesses a function that asks similar questions to the manager but concats a unique question specifically for that type of role, creating a new instance of that role and pushing it to the employee array. 
2. By choosing "Complete Team" it writes the file ```team.html``` to a folder called ```output``` if it doesnt exists it creates the folder first. To create the file it takes in the render variable which is a file in the directory called ```./src/page-template.js``` which outputs html code and takes in the employee array and uses that data to fill in the html file.
## Questions
Github username: josh484 <br /> 
[GitHub](https://www.github.com/josh484) <br />
Reach out to me for additional instructions at: [josh.m.mendoza1@gmail.com](mailto:josh.m.mendoza1@gmail.com.com)