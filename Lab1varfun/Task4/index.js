function calculateTotalCost(price, quanity, taxRate, discount) {

    if (typeof price !== "number" || price <= 0 ||
        typeof quanity !== "number" || quanity <= 0 ||
        typeof taxRate !== "number" ||
        taxRate <= 0) {
        return 'Invalid Input';
    }

    let baseCost = price * quanity;

    if (discount !== undefined) {
        baseCost = baseCost - discount;
    }

    let totalCost = baseCost * (1 + taxRate);
    return totalCost;


}

console.log(calculateTotalCost(15, 1, .08, 10));