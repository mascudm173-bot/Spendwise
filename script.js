// SpendWise - JavaScript Foundation

// 1. Application data
let budget = 0;
let expense = 0;
let remainingBalance = 0;

// Expense-related data
let expenseName = "";
let expenseCategory = "";
let expenseAmount = 0;

// 2. Function to calculate the remaining balance
function calculateRemainingBalance(budget, expense) {
    return budget - expense;
}

// 3. Function to display budget information in the console
function displayBudgetSummary() {
    console.log("===== SpendWise Budget Summary =====");
    console.log("Budget: KES " + budget.toFixed(2));
    console.log("Expense: KES " + expense.toFixed(2));
    console.log("Remaining Balance: KES " + remainingBalance.toFixed(2));
}

// 4. Collect user input
budget = parseFloat(prompt("Enter your total budget in KES:"));

expenseName = prompt("Enter the name of your expense:");

expenseCategory = prompt("Enter the expense category:");

expenseAmount = parseFloat(
    prompt("Enter the expense amount in KES:")
);

// Use the expense amount for the calculation
expense = expenseAmount;

// 5. Calculate remaining balance
remainingBalance = calculateRemainingBalance(budget, expense);

// 6. Display the results in the browser console
displayBudgetSummary();

console.log("Expense Name: " + expenseName);
console.log("Expense Category: " + expenseCategory);
console.log("Expense Amount: KES " + expenseAmount.toFixed(2));
console.log("====================================");