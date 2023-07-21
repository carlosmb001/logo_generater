const generateLogo = require('./generateLogo');
let inquirer = require('inquirer');
let fs = require('fs');

const questions = [
    {
        type: 'maxlength-input',
        name: 'title',
        message: 'Type in three characters for your logo:',
        maxLength: 3
    },
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