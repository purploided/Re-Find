const feelinlucky = document.getElementById("feelinlucky");
const search = document.getElementById("search");

search.addEventListener("click", function() {
    feelinlucky.style.opacity = "100";

    setTimeout(() => {feelinlucky.innerHTML = "I'm Feelin Lucky??"}, 1500);
});

feelinlucky.addEventListener("click", function() {
    let num = Math.floor(Math.random() * 12);

    if (num == 1) {
        window.location.replace("https://www.google.com/search?q=" + "cows");
    }
    if (num == 2) {
        window.location.replace("https://www.google.com/search?q=" + "cars");
    }
    if (num == 3) {
        window.location.replace("https://www.google.com/search?q=" + "human");
    }
    if (num == 4) {
        window.location.replace("https://www.google.com/search?q=" + "javascript");
    }
    if (num == 5) {
        window.location.replace("https://www.google.com/search?q=" + "iphone");
    }
    if (num == 6) {
        window.location.replace("https://www.google.com/search?q=" + "when was the leaning tower of piza made?");
    }
    if (num == 7) {
        window.location.replace("https://www.google.com/search?q=" + "when was the first pizza made?");
    }
    if (num == 8) {
        window.location.replace("https://www.google.com/search?q=" + "why was the playstation made?");
    }
    if (num == 9) {
        window.location.replace("https://www.google.com/search?q=" + "what happens when we die?");
    }
    if (num == 10) {
        window.location.replace("https://www.google.com/search?q=" + "labrador retriever");
    }
    if (num == 11) {
        window.location.replace("https://www.google.com/search?q=" + "german shepherd");
    }
});