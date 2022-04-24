/* 
I used a for loop to calculate the interest according to number of years. The fonction take principal, rate and years as parameters. 
I add the unary '+' to perform calculation with data.
The function return the sum of the investment and the interest made
*/

function calcInterest(principal, rate, years) {
    var interest = 0;
    /*
    for (var i = 0; i < years; i++)
    {
        interest = (+principal) * (+rate) / 100;
        principal = (+principal) + (+interest)
    }
    */
    principal = (+principal) * (+years) * (+rate) /100;
    return principal;
}

/*
    the function updateRate() is used to dynamically display the value on the rate while the user move the thumb of the slider
*/

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML=rateval+"%";
}

/* 
    the function compute() if the main function of my JS program. All the  important variables for coding the logic are declared here.

    first I check if the amount is a number with "isNaN()" and also if it'q 0 zero.
    if it's not, an alert message ask the user to enter a valid number and empty the text field
    if it's a correct value, the function display the user query.
*/

function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var result = calcInterest(principal, rate, years)/* - (+principal)*/;
    var year = new Date().getFullYear()+parseInt(years);

    if (isNaN(principal) || principal <= 0)
    {
        alert("Enter a positive number.");
        document.getElementById("principal").value="";
    }
    else {
        document.getElementById("result").innerHTML = 'If you deposit <span class="showdata">' +principal+ '</span>,<br>at an interest rate of <span class="showdata">'+rate+'%</span>. ' + ' <br>You will receive an amount of <span class="showdata">'+ (+result.toFixed(2)) + '</span>,<br>in the year <span class="showdata">'+year+'</span>'
    }
}


