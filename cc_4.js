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