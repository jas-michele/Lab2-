let shoppingList = ["pickles", "candy",
    "water"];

function addItem(item) {
    if (shoppingList.includes(item)) {
        alert('Item already added ...');
        return;
    }
    shoppingList.push(item);
    return shoppingList;
}
// test
console.log(addItem("water"));

function filterItems(search) {
    let results = shoppingList.filter(item =>
        item.toLowerCase().includes(search.toLowerCase()));
    return results;
}

// test
console.log(filterItems("candy"));