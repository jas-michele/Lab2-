let shoppingList = ["gum", "tires", "taco"];

function addItem(item) {

    shoppingList.push(item);
    return shoppingList;

}




function removeLastItem() {
    shoppingList.pop();
    return shoppingList;
}

function displayList() {
    let ul = document.createElement("ul");

    document.body.appendChild(ul);

    shoppingList.forEach(item => {
        let li = document.createElement("li");
        li.innerText = item;
        ul.appendChild(li);
    });
}

addItem("candy");
removeLastItem();
displayList();
