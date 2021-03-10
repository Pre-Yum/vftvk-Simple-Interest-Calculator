
function compute()
{
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);
    if (principal <= 0) {
        alert("Enter a positive number");

        document.getElementById("principal").focus();
        document.getElementById("principal").click();
    }
    
    var interest = principal * years * rate / 100;
    var d = new Date();
    var futureYear = years + d.getFullYear();
   
    document.getElementById("result").innerHTML = "If you deposit <mark>" + principal + "</mark>,<br/>at an interest rate of <mark>" + rate + "%</mark>.<br/>You will receive an amount of <mark>" + interest + "</mark>,<br/>in the year <mark>" + futureYear + "</mark><br/>";
}

function displayRate() {
    var rate = document.getElementById("rate").value;
    document.getElementById("ratechange").innerHTML = rate + "%";
}
