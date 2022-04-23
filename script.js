function calcInterest(principal, rate, years) {
    var interest = 0;
    for (var i = 0; i < years; i++)
    {
        interest = (+principal) * (+rate) / 100;
        principal = (+principal) + (+interest)
    }
    return principal;
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML=rateval+"%";
}

function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var result = calcInterest(principal, rate, years) - (+principal);
    var year = new Date().getFullYear()+parseInt(years);

    if (isNaN(principal) || principal <= 0)
    {
        alert("Enter a positive number.");
        document.getElementById("principal").value="";
    }
    else {
        document.getElementById("result").innerHTML = "If you deposit " +principal+ ",\<br\>at an interest rate of "+rate+ "%. \<br\>You will receive an amount of "+ (+result.toFixed(2)) + ",\<br\>in the year "+year
    }
}


