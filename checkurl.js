
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