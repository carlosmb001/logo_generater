const generateLogo = require('./lib/shapes');
let inquirer = require('inquirer');
let fs = require('fs');
const shapes = require("./lib/shapes");
console.log(shapes);


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

function createLogo( fileName, logo){
    fs.writeFile(fileName, logo, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`File ${fileName} created successfully`);
        }
    })
};


function init(){
    inquirer.prompt(questions).then((answers) => {
      console.log(answers);
      const Shape = shapes[answers.shape];
      console.log(Shape);
      const shape = new Shape(answers.title, answers.titleColor, answers.shapeColor);
      console.log(shape);
      const logo = shape.render();
      console.log(logo);
      createLogo('logo.svg',logo)
    });
}

init();