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

function avatarDecorBlahaj() {
    var avdecorBlahaj = new Image();
    avdecorBlahaj.src = "@Extras/blahajdecor.png";

    localStorage.setItem("Blahaj", avdecorBlahaj.src);
    console.log("%cSuccessfully Unlocked the 'Blahaj' Avatar Decor!", "font-weight: bold; color: yellow;");
}

function avatarDecorCheck() {
    let avdecorPlaced = document.getElementById("avdecor");
    let avdecorHearts = localStorage.getItem("Hearts");
    let avdecorBlahaj = localStorage.getItem("Blahaj");

    if (localStorage.getItem("Hearts") === null) {
        avdecorPlaced.src = "@Extras/noavdecor.png";
    }
    else {
        avdecorPlaced.src = avdecorHearts;
    }
    if (localStorage.getItem("Blahaj") === null) {
        avdecorPlaced.src = "@Extras/noavdecor.png";
    }
    else {
        avdecorPlaced.src = avdecorBlahaj;
    }
}

var rft = document.getElementById("findtwtr");

rft.addEventListener("click", function() {
    avatarDecorBlahaj();
});

setInterval(() => {avatarDecorCheck();}, 100);