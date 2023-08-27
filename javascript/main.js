
function error() {
    let username = document.getElementById("username").value
    let email = document.getElementById("email").value
    if  (username == "") {
        alert("Enter your name")
    }
    else if (email == "") {
        alert("Enter your email as well, remember to add the message too")
    }
    else {
        alert("You are good to go :)")
    }
}