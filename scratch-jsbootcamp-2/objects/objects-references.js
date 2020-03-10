


let myAccount = {
    name : 'Andrew Mead',
    expenses : 0,
    income: 0
}
/* 
let otherAccount = myAccount
otherAccount.income = 1000
 */
let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}
/* 
aaddExpense(myAccount, 2.50)
console.log(myAccount)
 */

// addIncome

// resetAccount

// getAccpuntSummary
// Account for Andrew has 900 in income . $100 in expenses

// addincome
// addExpense
// getAccountSummary
// resetAccount
// getAccountSummary

let addIncome = function (account, income) {
    account.income = account.income = income
}

let resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
}

let getAccountSummary = function(account) {
    let balance = account.income - account.expenses
    // return `Account for ${account.name} has $${balance}. $${account.income} `
    return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`
}


addIncome(myAccount, 2000)
addExpense(myAccount, 2.50)
addExpense(myAccount, 160)

console.log(getAccountSummary(myAccount))


