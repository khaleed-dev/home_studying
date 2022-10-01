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
const Account = require('./Account.js')
const CommandLine = require('./CommandLine')

async function main(){
    const accountName = await CommandLine.ask('Which account do you want to access?')
}


main()