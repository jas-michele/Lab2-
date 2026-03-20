let shopping = [];
let itemInput = document.getElementById("itemInput");
let addItemButton = document.getElementById("addItemButton");
let removeItemButton = document.getElementById("removeItemButton");
let list = document.getElementById("list");

addItemButton.addEventListener("click", function () {
    let item = itemInput.value;
    shopping.push(item);

    list.innerHTML = "";
    for (let i = 0; i < shopping.length; i++) {
        let li = document.createElement("li");
        li.innerText = shopping[i];
        list.appendChild(li);
        itemInput.value = "";

    }
})

removeItemButton.addEventListener("click", function () {
    shopping.pop();

    list.innerHTML = "";
    for (let i = 0; i < shopping.length; i++) {
        let li = document.createElement("li");
        li.innerText = shopping[i];
        list.appendChild(li);
    }
})