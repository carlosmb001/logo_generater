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
