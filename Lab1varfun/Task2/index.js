

function calculateTotalCost(price, quanity, taxRate) {

    if (typeof price !== "number" || price <= 0 ||
        typeof quanity !== "number" || quanity <= 0 ||
        typeof taxRate !== "number" ||
        taxRate <= 0) {
        return 'Invalid Input';
    }

    let totalCost = (price * quanity) * (1 + taxRate);

    return totalCost;


}

console.log(calculateTotalCost(-1, 2, 8));