function relocate() {
    try {
        let searching = document.getElementById("search");
        let title = document.getElementById("goggletitle");

        if (searching.value == "3b1dc0873ab7c0eac07a5a68fe1fdd7a17449958409fd87c5754a99a2d0e2f0fa4246be41ee914206e7980ddeca2dc312710") {
            title.innerHTML = searching.value + " - Goggle Search";

            window.location.replace("./@Extras/god.html");
        }
        else if (searching.value == "Google") {
            title.innerHTML = searching.value + " - Goggle Search";

            window.location.replace("./@Extras/NO THIS IS GOGGLE/nothisisgoggle.html");
        }
        else if (searching.value == "google") {
            title.innerHTML = searching.value + " - Goggle Search";

            window.location.replace("./@Extras/NO THIS IS GOGGLE/nothisisgoggle.html");
        }
        else {
            title.innerHTML = searching.value + " - Goggle Search";
            setTimeout(() => {window.location.replace("https://www.google.com/search?q=" + searching.value);}, 350);
        }
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

eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('b a(0){9 0="1";8(0=="1"){7.6.5("./@4/3.2")}}',12,12,'code|3b1dc0873ab7c0eac07a5a68fe1fdd7a17449958409fd87c5754a99a2d0e2f0fa4246be41ee914206e7980ddeca2dc312710|html|god|Extras|replace|location|window|if|var|f729695|function'.split('|'),0,{}))