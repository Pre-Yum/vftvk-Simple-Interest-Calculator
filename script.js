function compute()
{
     principal = document.getElementById("principal").value;
    if (principal <= 0)
    {
        alert("Enter a positive number");
        document.getElementById("prinicipal").focus();
        document.getElementById("prinicipal").click();
        return null;
    }
     rate = document.getElementById("rate").value;
     years = document.getElementById("years").value;
    console.log(years);
    interest = principal * rate * years / 100;
    console.log(principal * rate);
    var ndate = new Date();
    newdate = ndate.getFullYear();
    newdate += parseInt(years);
    document.getElementById("result").innerHTML = "<br>" + "<br>" + "If you deposit " + "<span class='highlight'>" + principal + '</span>' + '<br>' + ' at an interest rate of ' + "<span class='highlight'>" + rate + '</span>' + '%.' + '<br>' + 'You will recive an amount of ' + "<span class='highlight'>" + interest + '</span>' + '<br>' + 'In the year ' + "<span class='highlight'>" + newdate + '</span>';
}
function ratechange() {
    var rate = document.getElementById("rate").value;
    document.getElementById("rate-display").innerHTML = rate + '%';
