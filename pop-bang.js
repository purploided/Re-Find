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