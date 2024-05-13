var d = new Date();
var month = d.getMonth();
let goggleLogo = document.getElementById("goggle");


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
    window.history.go(-(window.history.length - 1));
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

console.warn(`Session ID = #${randomNum}`);

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