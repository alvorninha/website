var angemeldet = false;
//yeet
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "admin" && password == "test") {
        alert("Login als Administrator")
        angemeldet = true
        return false;

    }
    else {
        alert("Login fehlgeschlagen");
    }
}










