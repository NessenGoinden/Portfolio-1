// the checkbox animation variable
var month = document.getElementById("monthly");
var annually = document.getElementById("annually");
var check = document.getElementById("toggle");
// amount variable
var amountBasic = document.getElementById("amount_basic");
var amountPro = document.getElementById("amount_pro");
var amountMaster = document.getElementById("amount_master");

function myFunction() {
    if (check.checked == false) {
        // when checkbox is no check
        month.style.fontWeight = "bold";
        month.style.color = "rgba(33,44,202,1)";
        annually.style.fontWeight = "300";
        annually.style.color = "hsl(233, 13%, 49%)"
        // amount appear when the checkbox is not check
        amountBasic.innerHTML = "$19.99";
        amountPro.innerHTML = "$24.99";
        amountMaster.innerHTML = "$39.99";
    } else if (check.checked == true) {
        // when checkbox is checked
        month.style.fontWeight = "300";
        month.style.color = "hsl(233, 13%, 49%)"
        annually.style.fontWeight = "bold";
        annually.style.color = "rgba(33,44,202,1)";
        // amount appear when the checkbox is checked
        amountBasic.innerHTML = "$199.99";
        amountPro.innerHTML = "$249.99";
        amountMaster.innerHTML = "$399.99";
    }
}