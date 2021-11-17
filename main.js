function Fun(event, x) {
    document.getElementById("Home").style.display = "none"
    document.getElementById("Gold").style.display = "none"
    document.getElementById("Plat").style.display = "none"
    document.getElementById("Diamond").style.display = "none"
    document.getElementById("Champ").style.display = "none"
    document.getElementById("GrandChamp").style.display = "none"
    document.getElementById("SSL").style.display = "none"
    document.getElementById(x).style.display = "block"
    
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