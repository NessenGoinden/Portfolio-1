var basic, learnMoreBasic, pro, learnMorePro, master, learnMoreMaster;
// Basic Pricing Card variable
basic = document.getElementById("pricingtable_basic");
learnMoreBasic = document.getElementById("learnMore_basic");
// pro pricing Card variable
pro = document.getElementById("pricingtable_pro");
learnMorePro = document.getElementById("learnMore_pro");
// Master Pricing Card variable
master = document.getElementById("pricingtable_master");
learnMoreMaster = document.getElementById("learnMore_master");

// function for Basic Pricing card annimation
function mouseOverBasic() {
    // style for the section Basic
    basic.style.transition = "all 1s ease-in-out";
    basic.style.transform = "scale(1.1)"
    basic.style.background = "linear-gradient(90deg, rgba(105,111,221,1) 20%, rgba(33,44,202,1) 100%)";
    basic.style.color = "white";
    basic.style.zIndex = "2";
    // style for the Basic button learn more
    learnMoreBasic.style.background = "white";
    learnMoreBasic.style.color = "rgba(33,44,202,1)";
}

function mouseOutBasic() {
    // style for the section Basic
    basic.style.transition = "all 1s ease-in-out";
    basic.style.transform = "scale(1.0)"
    basic.style.background = "white"
    basic.style.color = "hsl(232, 13%, 33%)";
    basic.style.zIndex = "0";
    // style for the Basic button learn more
    learnMoreBasic.style.background = "";
    learnMoreBasic.style.color = "";
}

// function for pro pricing card animation
function mouseOverPro() {
    // style for the section professionnal
    pro.style.transition = "all 1s ease-in-out";
    pro.style.transform = "scale(1.1)"
    pro.style.background = "linear-gradient(90deg, rgba(105,111,221,1) 20%, rgba(33,44,202,1) 100%)";
    pro.style.color = "white";
    pro.style.zIndex = "2";
    // style for the professionnal button learn more
    learnMorePro.style.background = "white";
    learnMorePro.style.color = "rgba(33,44,202,1)";
}

function mouseOutPro() {
    // style for the section professionnal
    pro.style.transition = "all 1s ease-in-out";
    pro.style.transform = "scale(1.0)"
    pro.style.background = "white"
    pro.style.color = "hsl(232, 13%, 33%)";
    pro.style.zIndex = "0";
    // style for the professional button learn more
    learnMorePro.style.background = "";
    learnMorePro.style.color = "";
}

// function for master pricing card animation
function mouseOverMaster() {
    // style for the section master
    master.style.transition = "all 1s ease-in-out";
    master.style.transform = "scale(1.1)"
    master.style.background = "linear-gradient(90deg, rgba(105,111,221,1) 20%, rgba(33,44,202,1) 100%)";
    master.style.color = "white";
    master.style.zIndex = "2";
    // style for the master button learn more
    learnMoreMaster.style.background = "white";
    learnMoreMaster.style.color = "rgba(33,44,202,1)";
}

function mouseOutMaster() {
    // style for the section master
    master.style.transition = "all 1s ease-in-out";
    master.style.transform = "scale(1.0)"
    master.style.background = "white"
    master.style.color = "hsl(232, 13%, 33%)";
    master.style.zIndex = "0";
    // style for the master button learn more
    learnMoreMaster.style.background = "";
    learnMoreMaster.style.color = "";
}