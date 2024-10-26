/*
    Had to make a separate file for this because I didn't want anything to look messy.

    So here's an avatar decoration concept.
    Use the secret code to get a fancy avatar decoration. (it looks like shit)
*/

let currentDecor = 0;

function avatarDecorUnlockSecret(code) {
    if (code == "2fef5942") {
        const avdecordefault = new Image();
        avdecordefault.src = "Extras/avdecortest.png";

        localStorage.setItem("Hearts", avdecordefault.src);
        console.log("%cSuccessfully Unlocked the 'Hearts' Avatar Decor!", "font-weight: bold; color: yellow;");
    }
}

function avatarDecorBlahaj() {
    const avdecorBlahaj = new Image();
    avdecorBlahaj.src = "Extras/blahajdecor.png";

    localStorage.setItem("Blahaj", avdecorBlahaj.src);
    console.log("%cSuccessfully Unlocked the 'Blahaj' Avatar Decor!", "font-weight: bold; color: yellow;");
}

function SwitchBlahaj() {
    if (localStorage.getItem("Blahaj") === null) {
        const avdecorPlaced = document.getElementById("avdecor");
        avdecorPlaced.src = "Extras/noavdecor.png";
    } else {
        const avdecorPlaced = document.getElementById("avdecor");
        const avdecorBlahaj = localStorage.getItem("Blahaj");

        if (avdecorBlahaj) {
            avdecorPlaced.src = avdecorBlahaj;
        }

        localStorage.setItem("CurrentDecor", "1");
        currentDecor = 1;
    }
}

function SwitchHearts() {
    if (localStorage.getItem("Hearts") === null) {
        const avdecorPlaced = document.getElementById("avdecor");
        avdecorPlaced.src = "Extras/noavdecor.png";
    } else {
        const avdecorPlaced = document.getElementById("avdecor");
        const avdecorHearts = localStorage.getItem("Hearts");

        if (avdecorHearts) {
            avdecorPlaced.src = avdecorHearts;
        }

        localStorage.setItem("CurrentDecor", "2");
        currentDecor = 2;
    }
}

function checkCurrentDecor() {
    if (localStorage.getItem("CurrentDecor") === null) {
        currentDecor = 0;
    } else if (currentDecor == 0) {
        currentDecor = Number(localStorage.getItem("CurrentDecor"));
    } else if (currentDecor == 1) {
        SwitchBlahaj();
    } else if (currentDecor == 2) {
        SwitchHearts();
    } else {
        const avdecorPlaced = document.getElementById("avdecor");
        avdecorPlaced.src = "Extras/noavdecor.png";
    }
}

setInterval(checkCurrentDecor, 1000);

const rft = document.getElementById("findtwtr");

if (rft) {
    rft.addEventListener("click", function () {
        avatarDecorBlahaj();
    });
}

/*
    Avatar Decoration Menu
*/

function avatarDecorationMenu() {
    const divInserter = document.getElementById("menu1");

    if (divInserter) {
        divInserter.innerHTML = `
        <div style="background-color: white; border-radius: 10px; height: 500px; width: 300px;">
            <center><h1 style="font-family: 'Courier New', Courier, monospace; font-size: 20px;">Avatar Decoration Menu</h1></center>
            <p>Choose your avatar decoration!</p>
            <button onclick="SwitchBlahaj()">Switch to Blahaj</button>
            <button onclick="SwitchHearts()">Switch to Hearts</button>
        </div>
        `;
    }
}
