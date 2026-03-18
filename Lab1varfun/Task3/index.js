
function checkEligibility(age, isEmployed) {
  
    if (age > 18 && isEmployed)
    {
        return 'You are eligible';
    }

    if (age > 18 && !isEmployed ) {
        return 'Conditionally eligible'
    }

    if (age <= 18) {
        return 'Not eligibale';
    }

}

console.log(checkEligibility(20, false));