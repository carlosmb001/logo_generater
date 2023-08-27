const generateLogo = require('./lib/shapes');
let inquirer = require('inquirer');
let fs = require('fs');
const shapes = require("./lib/shapes");

//input questions
const questions = [
    {
      name: 'title',
      message: 'Type in three characters for your logo:',
      type: 'maxlength-input',
      maxLength: 3
    },
    {
      name: 'titleColor',
      message: 'Choose a text color?',
      type: 'input',
    },
    {
      name: "shape",
      type: "list",
      message: "What shape would you like the logo to render?",
      choices: ["Triangle", "Square", "Circle"],
    },
    {
      name: 'shapeColor',
      message: 'What color do you want the logo?',
      type: 'input',
    }
];

//creates logo
function createLogo( fileName, logo){
    fs.writeFile(fileName, logo, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`File ${fileName} created successfully`);
        }
    })
};

// will run program
function init(){
    inquirer.prompt(questions).then((answers) => {
      const Shape = shapes[answers.shape];
      const shape = new Shape(answers.title, answers.titleColor, answers.shapeColor);
      const logo = shape.render();
      createLogo('logo.svg',logo)
    });
}

init();