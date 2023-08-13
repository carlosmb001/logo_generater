const generateLogo = require('./generateLogo');
let inquirer = require('inquirer');
let fs = require('fs');

const questions = [
    {
      name: 'title',
      message: 'Type in three characters for your logo:',
      type: 'maxlength-input',
      maxLength: 3
    },
    {
      name: 'text-color',
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
      name: 'logo-color',
      message: 'What color do you want the logo?',
      type: 'input',
    }
];

function writeToFile( fileName, data){
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`File ${fileName} created successfully`);
        }
    })
};

function init(){
    inquirer.prompt(questions).then((answers) => {
        let generatedLogo = generateLogo(answers);
        writeToFile('logo.svg',generatedLogo)
    });
}

init();