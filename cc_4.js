// Task 1: Customer Discounts
let purchaseAmount = 130; // Example purchase amount
let discount = 0; // Variable for discount
// Apply discount if purchase amount is greater than $100
if (purchaseAmount > 100) {
    discount = 0.1; // 10% discount
}
let finalAmount = purchaseAmount - (purchaseAmount * discount);
console.log(`Final amount after discount: $${finalAmount.toFixed(2)}`);