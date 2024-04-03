import inquirer from 'inquirer';

function calculator() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'num1',
            message: 'Enter the first number:'
        },
        {
            type: 'input',
            name: 'num2',
            message: 'Enter the second number:'
        },
        {
            type: 'list',
            name: 'operation',
            message: 'Choose an operation:',
            choices: ['Addition', 'Subtraction', 'Multiplication', 'Division']
        }
    ]).then((answers: { num1: string; num2: string; operation: any; }) => {
        const num1 = parseFloat(answers.num1);
        const num2 = parseFloat(answers.num2);
        let result: number | undefined;

        switch (answers.operation) {
            case 'Addition':
                result = num1 + num2;
                break;
            case 'Subtraction':
                result = num1 - num2;
                break;
            case 'Multiplication':
                result = num1 * num2;
                break;
            case 'Division':
                if (num2 === 0) {
                    console.log('Error: Division by zero');
                    return;
                }
                result = num1 / num2;
                break;
            default:
                console.log('Invalid operation');
                return;
        }

        console.log('Result:', result);
    }).catch((error: any) => {
        console.log('Error:', error);
    });
}

calculator();
