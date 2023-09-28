import * as inquirer from "inquirer";
import chalk from "chalk";
// calculater opraters
var Oprater;
(function (Oprater) {
    Oprater["ADD"] = "addition";
    Oprater["SUBTRACT"] = "Submtraction";
    Oprater["MULTIPLY"] = "Multiplication";
    Oprater["DIVIDE"] = "Division";
})(Oprater || (Oprater = {}));
const prompt = inquirer.createPromptModule();
function validationNumber(input) {
    if (isNaN(Number(input))) {
        return "Please enter a valid number";
    }
    return true;
}
async function main() {
    const input = await prompt([
        {
            type: "input",
            name: "num1",
            message: "Please enter the first number:",
            validate: validationNumber,
        },
        {
            type: "rawlist",
            name: "operator",
            message: "slect an operation:",
            choices: Object.values(Oprater)
        },
        {
            type: "input",
            name: "num2",
            message: "Please enter the second number:",
            validate: validationNumber,
        },
    ]);
    const num1 = parseFloat(input.num1);
    const num2 = parseFloat(input.num2);
    const slectedOperator = input.operator;
    let result;
    if (slectedOperator === Oprater.ADD) {
        result = num1 + num2;
        console.log(chalk.bgBlueBright.bgGray(`Result is : ${result}`));
    }
    else if (slectedOperator === Oprater.DIVIDE) {
        result = num1 / num2;
        console.log(chalk.yellow.bgGray(`Result is : ${result}`));
    }
    else if (slectedOperator === Oprater.MULTIPLY) {
        result = num1 * num2;
        console.log(chalk.blue.blueBright(`Result is : ${result}`));
    }
    else if (slectedOperator === Oprater.SUBTRACT) {
        result = num1 - num2;
        console.log(chalk.blue.blueBright(`Result is : ${result}`));
    }
}
export default main;
