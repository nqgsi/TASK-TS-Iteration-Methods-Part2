// don't edit or remove the type declaration
type TransactionType = "income" | "expense";
type Transaction = [TransactionType, number];

/**
 * You can use this array to
 * manually test your functions
 */
const transactions: Transaction[] = [
  ["income", 1000],
  ["income", 1500],
  ["expense", 500],
  ["expense", 300],
  ["income", 700],
];

// `filterIncomeTransactions` function that:
// - Accepts a "transactions" parameter of type "Transaction[]".
// - Returns a new array containing only the income transactions.
// example:
// filterIncomeTransactions(transactions); // => [["income", 1000], ["income", 1500], ["income", 700]]
function filterIncomeTransactions(transactions: Transaction[]): Transaction[] {
  let onI = transactions.filter((a) => a.includes("income"));

  return onI; // replace empty array with what you see is fit
}
console.log(filterIncomeTransactions(transactions));

// `filterExpenseTransactions` function that:
// - Accepts a "transactions" parameter of type "Transaction[]".
// - Return a new array containing only the expense transactions.
// example:
// filterExpenseTransactions(transactions); // => [["expense", 500], ["expense", 300]]
function filterExpenseTransactions(transactions: Transaction[]): Transaction[] {
  let onE = transactions.filter((b) => b.includes("expense"));

  return onE; // replace empty array with what you see is fit
}
console.log(filterExpenseTransactions(transactions));
// `calculateTotalIncome` function that:
// - Accepts a "transactions" parameter of type "Transaction[]".
// - calculates the total income and returns it.
// example:
// calculateTotalIncome(transactions); // => 3200  (1000 + 1500 + 700)
function calculateTotalIncome(transactions: Transaction[]): number {
  let calI = transactions
    .filter((c) => c.includes("income"))
    .map((c) => 1)
    .reduce((sum, amount) => sum + amount, 0);

  return calI; // replace -1 with what you see is fit
}

// `calculateTotalExpenses` function that:
// - Accepts a "transactions" parameter of type "Transaction[]".
// - calculates the total expense and returns it.
// example:
// calculateTotalExpenses(transactions); // => 800  (500 + 300)
function calculateTotalExpenses(transactions: Transaction[]): number {
  let calcE = transactions
    .filter((d) => d.includes("expense"))
    .map((d) => 1)
    .reduce((sum, amount) => sum + amount, 0);

  return calcE; // replace -1 with what you see is fit
}
console.log(calculateTotalExpenses(transactions));
// `calculateNetTotal` function that:
// - Accepts a "transactions" parameter of type "Transaction[]".
// - calculates the net total (total income - total expenses) and returns it.
// example:
// calculateNetTotal(transactions); // => 2400  (3200 - 800)
function calculateNetTotal(transactions: Transaction[]): number {
  let neti = transactions
    .filter((n) => n.includes("income"))
    .map((n) => 1)
    .reduce((sum, amount) => sum + amount, 0);
  let nete = transactions
    .filter((ne) => ne.includes("expense"))
    .map((ne) => 1)
    .reduce((sum, amount) => sum + amount, 0);
  let netTotal = neti + nete;

  return netTotal; // replace -1 with what you see is fit
}
console.log(calculateNetTotal(transactions));
// `filterSignificantTransactions` function that:
// - Accepts 2 parameters:
// - a "transactions" parameter of type "Transaction[]".
// - a "threshold" parameter of type "number"
// - identifies and creates a new array with transactions (both incomes and expenses) above or equal to "threshold".
// example:
// filterSignificantTransactions(transactions, 1000); // =>  [["income", 1000], ["income", 1500]]
function filterSignificantTransactions(
  transactions: Transaction[],
  threshold: number
): Transaction[] {
  return transactions.filter((k) => k[1] >= threshold); // replace empty array with what you see is fit
}

export {
  Transaction,
  filterIncomeTransactions,
  filterExpenseTransactions,
  calculateTotalIncome,
  calculateTotalExpenses,
  calculateNetTotal,
  filterSignificantTransactions,
};
