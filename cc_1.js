// Task 1: Variables //

let employeeName = "Lucy"; // String, showing employee name
const employeeID = 1234; // Number, showing employee ID number
var isActive = true; // Boolean, showing that employee is active
console.log(employeeName, typeof employeeName);  // String, showing employee name
console.log(employeeID, typeof employeeID);  // Number, showing employee ID number
console.log(isActive, typeof isActive);  // Boolean, showing that employee is active

// Task 2: Primitive Data Types //

let productName = "Coffee" // String, showing name of product is coffee
const productPrice = 4 // Number, showing price of coffee is $4
var isAvailable = true; // Boolean, showing that coffee is available
console.log(productName, typeof productName); //String, showing name of product is coffee
console.log(productPrice, typeof productPrice); //Number, showing price of coffee is $4
console.log(isAvailable, typeof isAvailable); //Boolean, showing that coffee is available

// Task 3: Number Data Type //

let accountBalance = 1200; //original account balance
let accountDeposit = 2600; //adding 2600 to account
let totalAccountBalance1 = accountBalance + accountDeposit // adds 1200 to 2600
console.log("Your Account Balance After Deposit (Addition):" , totalAccountBalance1); // will show total account balance after addition 

let accountWithdrawl = 1000 //subtracting 1000 from account
let totalAccountBalance2 = totalAccountBalance1 - accountWithdrawl //subtracts 1000 from prior balance of 2800
console.log("Your Account Balance After Withdrawl (Subtraction):" , totalAccountBalance2); // will show total account balance after subtraction

let accountMultiply = 1.08 //multiply account by 8% interest earnings
let totalAccountBalance3 = totalAccountBalance2 * 1.08 //multiply 2800 by 1.08
console.log("Your Account Balance After Interest Earnings (Multiplication):" , totalAccountBalance3); //will show total in account after interest is earned

let accountDivide = 2 //divide account by half
let totalAccountBalance4 = totalAccountBalance3 / 2 //divide 3024 by 2
console.log("Your Account Balance After Losing Half Your Funds (Division):" , totalAccountBalance4); //shows results after division

let totalAccountBalance = accountBalance + accountDeposit - accountWithdrawl; 

// Task 4: String Data Type //

let customerName = "Mark"; //String, defines customer name as Mark
console.log(customerName, typeof customerName); //String, defines customer name

let greeting = "Welcome " + customerName + ". How can we help you today?"; //concatenates strings to form welcome message
console.log(greeting); //string, shows welcome message
