// Task 1: Customer Discounts
let purchaseAmount = 130; // Example purchase amount
let discount = 0; // Variable for discount
// Apply discount if purchase amount is greater than $100
if (purchaseAmount > 100) {
    discount = 0.1; // 10% discount
}
let finalAmount = purchaseAmount - (purchaseAmount * discount);
console.log(`Final amount after discount: $${finalAmount.toFixed(2)}`);
// Task 2: Sales Report
let sales = [120, 85, 200, 150, 90]; // Array of sales figures
let totalSales = 0;
for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i]; // Adding each sales figure to totalSales
}
console.log(`Total sales: $${totalSales}`);
// Task 3: Inventory Depletion
let stock = 10; // Initial stock value
while (stock > 0) {
    console.log(`Stock remaining: ${stock}`);
    stock--; // Decreasing stock by 1 in each loop
}
console.log("Inventory is now depleted.");
// Task 4: Customer Survey
let responses = 0; // Starting with 0 responses
do {
    responses++;
    console.log(`Response count: ${responses}`);
} while (responses < 3);
console.log("Survey completed.");
// Task 5: Employee Information
let employee = {
    name: "Nathan",
    position: "Doctor",
    salary: 125000
};
for (let key in employee) {
    console.log(`${key}: ${employee[key]}`);
}
// Task 6: Product Listings
let products = ["Laptop", "Mouse", "Keyboard"]; // List of products
for (let product of products) {
    console.log(`Product: ${product}`);
}
// Task 7: Order Processing
let orders = [101, 102, 103]; // Array of order IDs
orders.forEach(order => {
    console.log(`Order ID: ${order}`);
});
// Task 8: Tax Calculation
function calculateTax(amount, taxRate) {
    return amount * taxRate;
}
let amount = 400; // Example amount
let taxRate = 0.09; // 9% tax rate
let tax = calculateTax(amount, taxRate);
console.log(`Calculated tax: $${tax.toFixed(2)}`);
// Task 9: Discount Application
let applyDiscount = function(price, discountPercentage) {
    return price - (price * discountPercentage);
};
let price = 144; // Example price
let discountPercentage = 0.1; // 10% discount
let discountedPrice = applyDiscount(price, discountPercentage);
console.log(`Discounted price: $${discountedPrice.toFixed(2)}`);
// Task 10: Loyalty Points
let calculatePoints = (purchaseAmount) => {
    return Math.floor(purchaseAmount / 10); // 1 point for every $10 spent
};
let purchaseAmount = 250; // Example purchase amount
let points = calculatePoints(purchaseAmount);
console.log(`Points earned: ${points}`);