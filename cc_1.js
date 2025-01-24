// Task 1: Variables //

let employeeName = "Lucy"; // Declares employee name as string
const employeeID = 1234; // Declares employee ID as a number
var isActive = true; // Declares that employee being active is true as a Boolean

console.log("Employee Name:", employeeName, "(", typeof employeeName, ")"); // Displays "Employee Name: Lucy (String)""
console.log("EmployeeID:", employeeID, "(", typeof employeeID, ")");  // Displays "Employee ID: 1234 (Number)"
console.log("Is Active?", isActive, "(", typeof isActive, ")");  // Displays "Is Active? True (Boolean)"

// Task 2: Primitive Data Types //

let productName = "Coffee" // Declares product name as a string
const productPrice = 4 // Declares product price as a number
var isAvailable = true; // Declares product availability as true as a Boolean

console.log("Product Name:", productName, "(", typeof productName, ")"); // Displays "Product Name: Coffee (String)"
console.log("Product Price: $", productPrice, "(", typeof productPrice, ")"); // Displays "Product Price: $4 (Number)"
console.log("Product Available?", isAvailable, "(", typeof isAvailable, ")"); // Displays "Product Available? True (Boolean)"

// Task 3: Number Data Type //

let accountBalance = 1200; // Declares original account balance
console.log("Your Account Balance: $", accountBalance); // Displays "Your Account Balance: $1200"


accountBalance +=2600; // Adding 2600 to balance
console.log("Your Account Balance After $2600 Deposit (Addition): $" , accountBalance); // Displays total amount in account after addition: "Your Account Balance After $2600 Deposit (Addition): $3800"

accountBalance -=1000; // Subtracting 1000 from account balance
console.log("Your Account Balance After $1000 Withdrawl (Subtraction): $" , accountBalance); // Displays total amount in account after subtraction: "Your Account Balance After $1000 Withdrawl (Subtraction): $2800"

accountBalance *=1.08 // Multiplies account balance by 1.08
console.log("Your Account Balance After 8% Interest Earnings (Multiplication): $" , accountBalance); // Displays total amount in account after multiplication: "Your Account Balance After 8% Interest Earnings (Multiplication): $3024"

accountBalance /= 2 // Divides account by 2
console.log("Your Account Balance After Losing Half Your Funds (Division): $" , accountBalance); //Displays total amount in account after division: "Your Account Balance After Losing Half Your Funds (Division): $1512"

// Task 4: String Data Type //

let customerName = "Mark"; // Declares customer name as Mark as a string
console.log("Customer Name:", customerName); // Displays "Customer Name: Mark"

let greeting = "Welcome " + customerName + ". How can we help you today?"; // concatenates strings to form welcome message
console.log(greeting); // string, shows welcome message "Welcome Mark. How can we help you today?"

// Task 5: Boolean Data Type //

let isLoggedIn = true; // Declares isLoggedIn variable as Boolean
let answerSecurityQuestion = true // Declares answerSecurityQuestion variable as Boolean

if (isLoggedIn && answerSecurityQuestion) { // Establishes an if clause for if both conditions are true
    console.log ("You may access your account."); // Message "you may access your account" will display

} else { // Establishes that if both conditions are not true
    console.log("Access denied. Invalid login credentials."); // Meessage "Access denied. Invalid login credentials." will display instead
}