var button1 = document.getElementById("submit");
button1.addEventListener("click", function() {
    var username1 = document.getElementById("usernametag");
    var password1 = document.getElementById("passwordtag");

    localStorage.setItem("username", username1.value);
    localStorage.setItem("password", password1.value);

    window.location.assign("/index.html");
});