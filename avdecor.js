/*
    Had to make a seperate file for this because I didn't want anything to look messy.

    So here's an avatar decoration concept.
    Use the secret code to get a fancy avatar decoration. (it looks like shit)
*/

function avatarDecorUnlockSecret(code) {
    if (code == "2fef5942") {
        var avdecordefault = new Image();
        avdecordefault.src = "@Extras/avdecortest.png";

        localStorage.setItem("Hearts", avdecordefault.src);
        console.log("%cSuccessfully Unlocked the 'Hearts' Avatar Decor!", "font-weight: bold; color: yellow;");
    }
}

function avatarDecorCheck() {
    let avdecorPlaced = document.getElementById("avdecor");
    let avdecorHearts = localStorage.getItem("Hearts");

    if (localStorage.getItem("Hearts") === null) {
        avdecorPlaced.src = "@Extras/noavdecor.png";
    }
    else {
        avdecorPlaced.src = avdecorHearts;
    }
}

setInterval(() => {avatarDecorCheck();}, 100);