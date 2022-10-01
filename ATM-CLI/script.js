// CLI Q & A
/*
? app idea: simple atm cli app

? app functionality:
    * What account to access
    * if account does not exist ask to create account
    * What to do with that account ?
        excute command
           view
           Deposit
           withdraw
? think throug:
    
*/
const account = require('./Account.js')
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('which account would you like to access? ', (answer) => {
    console.log(answer)
    rl.close();
});
