function checkQuantity(quantity, maxOrder, stock) {
    // Ensure the quantity does not exceed the maxOrder or the stock
    quantity = Math.min(quantity, maxOrder, stock);

    // If maxOrder is more than stock, return the lower value (stock)
    if (maxOrder > stock) {
        return stock;
    }
    // If quantity is more than maxOrder, return the lower value (maxOrder)
    else if (quantity > maxOrder) {
        return maxOrder;
    }
    // If quantity is more than stock, return the lower value (stock)
    else if (quantity > stock) {
        return stock;
    }
    // If none of the above conditions are met, return the quantity
    else {
        return quantity;
    }
}

console.log(checkQuantity(1,5,10))
console.log(checkQuantity(2,10,10))
console.log(checkQuantity(10,1,10))
console.log(checkQuantity(2,2,2))
console.log(checkQuantity(5,5,2))