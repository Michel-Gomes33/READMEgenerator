// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name: 'title',
        message: "What is the name of your project?"
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project',

    },
    {
        type: 'input',
        name: 'installation',
        message: 'Describe installion instructions',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe usage of this project',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Licenses:',
        choices: ['Apache', 'Boost', 'BSD', 'Eclipse', 'GNU', 'MIT', 'Mozilla']
    },
    {
    type: 'input',
    name: 'contributing',
    message: 'Contribution guidelines:',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter your test instructions:',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Github username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email:',
    }
   
];

// TODO: Create a function to write README file
function generateReadMe(data) {
    return `# ${data.title}

${getLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

This project is licensed under the ${data.license} license.

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

For any questions, please contact me at [${data.email}](mailto:${data.email}).

Check out my GitHub profile: [${data.github}](https://github.com/${data.github})
    `;
}
//License Plate:
function getLicenseBadge(license) {
    const badges = {
        'Apache': '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
        'Boost': '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
        'BSD': '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
        'Eclipse': '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
        'GNU': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
        'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
        'Mozilla': '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
        'None': ' '
    };
    return badges[license];
}

// TODO: Create a function to initialize app
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('README.md successfully generated!');
        }
    });
}

// TODO: Function call to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = generateReadMe(answers);
        writeToFile('README.md', readmeContent);
    });
};
init();
