// Read values from the cli or user type on terminal

// import readline
const readline = require('readline');

// 2. Configure interface to connnect with terminal/command line

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 3. Read values

interface.question('Enter your name: ', (name) => {
    console.log(`Hello ${name}`);
    interface.close();
});


// This will provide the sum as 20+40=2040
interface.question('Enter first number: ', (num1) => {
    interface.question('Enter second number: ', (num2) => {
        const sum = num1 + num2;
        console.log(`The sum is ${sum}`);
    })
});

interface.question('Enter first number: ', (num1) => {
    interface.question('Enter second number: ', (num2) => {
        const sum = Number(num1) + Number(num2);
        console.log(`The sum is ${sum}`);
    })
});