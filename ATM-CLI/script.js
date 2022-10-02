/*
? app idea: simple atm cli app

? app functionality:
    // * Ask for account
    // * if account does not exist ask to create account
    // * Ask What to do with that account ?
    // * Excute command
        // view
        // Deposit
        // withdraw
*/
const Account = require('./Account.js')
const CommandLine = require('./CommandLine')


async function main(){
    try{
        const accountName = await CommandLine.ask('Which account do you want to access?')
        //! should check for length & type
        let account = await Account.find(accountName)  
        if(account == null){
            account = await promptCreatAccount(accountName)
        }
        if(account != null){
            await promptTask(account)
        }
    }catch(e){
        CommandLine.print("Error: Please try again")
    }
} 
async function promptCreatAccount(accountName){
    const response = await CommandLine.ask('That account doesn not exist. Would you like to create it? (yes/no)')
    if(response === 'yes'){
        CommandLine.print(`${accountName} is created.`)
        return await Account.create(accountName)
    }
}
async function promptTask(account){
    const response = (await CommandLine.ask('What would you like to do? (View/Deposit/Withdraw)')).toLowerCase()
    if(response === 'deposit'){
        const amount = parseFloat(await CommandLine.ask("How Much"))
        //! should check amount and type
        await account.deposit(amount)
    }
    else if(response === 'withdraw'){
        //! should check type
        const amount = parseFloat(await CommandLine.ask("How Much"))
        try{
            await account.withdraw(amount)
        }catch(e){
            CommandLine.print('you don\'t have enough balance to withdraw')
        }
    }
    CommandLine.print(`${account.name} current balance is: ${account.balance}`)
}

main() 