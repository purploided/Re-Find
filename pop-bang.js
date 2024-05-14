var d = new Date();
var month = d.getMonth();
let goggleLogo = document.getElementById("goggle");

/*
    Check url code
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

let refindLogo = document.getElementById("goggle");
let findtwtr = document.getElementById("findtwtr");
let containerOne = document.getElementById("search");

function checkURL(url) {
    if (url.includes("#gsc.tab=0&gsc.q=")) {
        if (refindLogo) {
            refindLogo.style.display = "none";
        }
        if (findtwtr) {
            findtwtr.style.display = "none";
        }
        if (containerOne) {
            search.style.top = "0px";
        }
    }
}


setInterval(() => {checkURL(window.location.href);}, 2500);



/*
    time to add chrome dinosaur game, minus the google part

    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    OFFLINE!!

    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

function updateStatus() {
    if(navigator.onLine) {
        var goggleOne = document.getElementById("goggleOne");
        var offlineDive = document.getElementById("offlinegame");

        goggleOne.style.display = "block";
        offlineDive.style.display = "none";
    }
    else {
        var goggleOne = document.getElementById("goggleOne");
        var offlineDive = document.getElementById("offlinegame");

        goggleOne.style.display = "none";
        offlineDive.style.display = "block";
    }
}

setInterval(() => {updateStatus();}, 2500);

function clearHistory() {
    window.history.back(-(window.history.length - 2));
    console.log("removed");
}

/*
    Context Menu for Sessions
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

var randomNum1 = Math.floor(Math.random() * 100);
const genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
var randomNum = genRanHex(9);
var pfpDiceBear = `https://api.dicebear.com/8.x/thumbs/svg?seed=${randomNum}`;

console.warn(`%c
.d8888b.                              d8b                   
d88P  Y88b                            Y8P                   
Y88b.                                                       
 "Y888b.    .d88b.  .d8888b  .d8888b  888  .d88b.  88888b.  
    "Y88b. d8P  Y8b 88K      88K      888 d88""88b 888 "88b 
      "888 88888888 "Y8888b. "Y8888b. 888 888  888 888  888 
Y88b  d88P Y8b.          X88      X88 888 Y88..88P 888  888 
 "Y8888P"   "Y8888   88888P'  88888P' 888  "Y88P"  888  888 
 
Session ID: #${randomNum}
`, "color: #ffff00; font-weight: bold; font-size: 16px; padding: 5px;");



document.getElementById("pfp").src = pfpDiceBear;

var pfp = document.getElementById("pfp");
pfp.addEventListener("contextmenu", function(event) {
    event.preventDefault();
    var contextMenu = document.querySelector(".context-menu");

    if (!contextMenu) {
        contextMenu = document.createElement("div");
        contextMenu.classList.add("context-menu");

        var sessionId = document.createElement("div");
        sessionId.innerText = `Session ID: #${randomNum}`;
        contextMenu.appendChild(sessionId);

        var refreshButton = document.createElement("button");
        refreshButton.innerText = "Refresh Session";
        refreshButton.addEventListener("click", function() {
            // Call the clearHistory function
            clearHistory();
            setTimeout(() => {window.location.reload();}, 1000);
        });
        contextMenu.appendChild(refreshButton);

        contextMenu.style.top = event.clientY + "px";
        contextMenu.style.left = event.clientX + "px";

        document.body.appendChild(contextMenu);
    }
});

document.addEventListener("click", function(event) {
    var contextMenu = document.querySelector(".context-menu");

    if (contextMenu && !contextMenu.contains(event.target)) {
        contextMenu.remove();
    }
});