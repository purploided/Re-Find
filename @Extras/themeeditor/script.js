const body = document.querySelector("body");
const bodyColor = document.getElementById("background-color");
const bodyImage = document.getElementById("background-image");
const logoImage = document.getElementById("logo-image");
const bodyColorCheckbox = document.getElementById("use-background-color");
const themeJSON = {
  "BODY_COLOUR": "",
  "BODY_IMAGE": "",
  "GOGGLE_LOGO": ""
};

function JSON_EXPORTER() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(themeJSON));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", "theme.gfft");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

function saveTheme() {
    themeJSON.BODY_COLOUR = bodyColorCheckbox.checked ? bodyColor.value : '';
    if (bodyImage.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        themeJSON.BODY_IMAGE = reader.result;
      });
      reader.readAsDataURL(bodyImage.files[0]);
    } else {
      themeJSON.BODY_IMAGE = "";
    }
    if (logoImage.files.length > 0) {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
        themeJSON.GOGGLE_LOGO = reader.result;
        JSON_EXPORTER();
        });
        reader.readAsDataURL(logoImage.files[0]);
    } else {
        themeJSON.GOGGLE_LOGO = "";
    }
}
  

const saveButton = document.getElementById("save-theme");
saveButton.addEventListener("click", saveTheme);

const goBack = document.getElementById("goback");
goBack.addEventListener("click", function(){
    window.location.assign("/index.html")
});