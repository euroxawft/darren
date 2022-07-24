var loggedIn = localStorage.getItem("login");
if(typeof(loggedIn) == undefined || loggedIn == "false" || !loggedIn){
    location.href = "login.html";
}