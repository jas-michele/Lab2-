let firstName = "";
let lastName = "";

firstName = "tom";
lastName = "myspace";

function formateFullName(fName, lName) {
     fName = firstName; 
     lName = lastName;

    if (fName === "" || lName === "") {
        alert("Invalid name input");
        return;
    }
    
   let capFName = fName.charAt(0).toUpperCase() + fName.slice(1);
   let capLName = lName.charAt(0).toUpperCase() + lName.slice(1);

    let fullName = capLName + "," + capFName;
    return fullName;

}

console.log(formateFullName(firstName, lastName));