function relocate() {
    try {
        let searching = document.getElementById("search")
        let title = document.getElementById("goggletitle");
        title.innerHTML = searching.value + " - Goggle Search";
        setTimeout(() => {window.location.replace("https://www.google.com/search?q=" + searching.value);}, 350);
    }
    catch(err) {
        window.location.replace("./@Error/error.html");
    }
}

function forceError(status) {
    if (status == 404) {
        window.location.replace("./@Error/error.html");
    }
    else {
        //
    }
}