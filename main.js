/*
-I used to have like 100 lines or more of code here because I copied my first function and did it for each button,
instead of the function I have now. So I cleaned that up and added in the flex for the form.
- Added in the validation form and made it work with my website.
*/

function Fun(event, x) {
    document.getElementById("Home").style.display = "none"
    document.getElementById("Gold").style.display = "none"
    document.getElementById("Plat").style.display = "none"
    document.getElementById("Diamond").style.display = "none"
    document.getElementById("Champ").style.display = "none"
    document.getElementById("GrandChamp").style.display = "none"
    document.getElementById("SSL").style.display = "none"
    document.getElementById("container").style.display = "none"
    document.getElementById(x).style.display = "block"
}

function Fun2(event, x) {
    document.getElementById("Home").style.display = "none"
    document.getElementById("Gold").style.display = "none"
    document.getElementById("Plat").style.display = "none"
    document.getElementById("Diamond").style.display = "none"
    document.getElementById("Champ").style.display = "none"
    document.getElementById("GrandChamp").style.display = "none"
    document.getElementById("SSL").style.display = "none"
    document.getElementById("container").style.display = "none"
    document.getElementById(x).style.display = "flex"
}

function theme() {
    x = document.getElementById("theme").getAttribute("href");
    if (x == "") {
        document.getElementById("theme").href = "theme.css";
    }
    else {
        document.getElementById("theme").href = "";
    }
}