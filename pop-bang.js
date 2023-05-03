var d = new Date();
var month = d.getMonth();
let goggleLogo = document.getElementById("goggle");

if(month == 1) {
    let goggleLogo = document.getElementById("goggle");

    goggleLogo.src = "./@Extras/goggle5months.png";
    console.log("%cHappy Birthday Goggle!", "color: blue; font-family:Comic Sans MS; font-size: 23px");
}
else {
    let goggleLogo = document.getElementById("goggle");

    goggleLogo.src = "./@Extras/goggle.png";
}

/* 
    I'm just casually gonna steal my tank api code for the popup lmao

    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    P O P U P S

    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/



function popup() {
    var popUpMessage = document.getElementById("popup");

    setTimeout(() => { popUpMessage.style.top = "1%"; }, 0);
    setTimeout(() => { popUpMessage.style.top = "-50%"; }, 3000);

    let num = Math.floor(Math.random() * 4);

    if (num == 1) {
        popUpMessage.textContent = "Did you know?: The website https://www.goggle-net.tk is not affiliated with or owned by Google, despite its similarity in appearance and functionality.";
    }
    else if (num == 2) {
        popUpMessage.textContent =  "Did you know?: The search results on https://www.goggle-net.tk are powered by Google Custom Search, which allows website owners to create a custom search engine that prioritizes certain websites and content.";
    }
    else if (num == 3) {
        popUpMessage.textContent =  "Did you know?: The '.tk' domain extension used by https://www.goggle-net.tk is the country code top-level domain (ccTLD) for the Tokelau, a territory of New Zealand.";
    }
    else if (num == 4) {
        popUpMessage.textContent =  "Did you know?: The website https://www.goggle-net.tk offers users the ability to search for images, videos, news articles, and other types of content in addition to web pages.";
    }
}

const debug = { ForcePopup() { popup(); }, };

setInterval(() => {popup();}, 120000);

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

/*
    now its time to throw an attempt at themes or something

    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    THEMES!!

    (.gfft stands for Goggle File Format Type. It's a JSON file, but it's special)

    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/


const body = document.getElementById("body");
const themeJSON = {
    'BODY_COLOUR': '',
    'BODY_IMAGE': '',
    'GOGGLE_LOGO': './@Extras/goggle.png'
}

function JSON_IMPORTER() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.gfft';
    input.addEventListener('change', () => {
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            try {
                const json = JSON.parse(reader.result);
                Object.assign(themeJSON, json);
                importThemes();
            } catch (error) {
                console.error(error);
                alert('Invalid JSON file');
            }
        });
        reader.readAsText(input.files[0]);
    });
    input.click();
}

function JSON_EXPORTER() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(themeJSON));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", "theme.gfft");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

const exportBtn = document.getElementById('export-btn');

exportBtn.addEventListener('click', () => {
  window.location.assign("./@Extras/themeeditor/edit.html")
});

function importThemes() {
    if (themeJSON.BODY_COLOUR === '') {
        body.style.backgroundImage = `url(${themeJSON.BODY_IMAGE})`;
    } else {
        body.style.backgroundColor = themeJSON.BODY_COLOUR;
    }
    goggleLogo.src = themeJSON.GOGGLE_LOGO;
}

const defaultTheme = {
    importThemes() {
        body.style.backgroundColor = '#202124';
        goggleLogo.src = './@Extras/goggle.png';
    }
};