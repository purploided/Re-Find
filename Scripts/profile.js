/*
    profile picture changer and session id
*/

let pfp = document.getElementById("avdecor");
if (pfp) {
    pfp.addEventListener("contextmenu", function(event) { // context menu
        event.preventDefault();
        let contextMenu = document.querySelector(".context-menu");

        if (!contextMenu) {
            contextMenu = document.createElement("div");
            contextMenu.classList.add("context-menu");

            let sessionId = document.createElement("div");
            sessionId.innerText = `Session ID: #${randomNum}`;
            contextMenu.appendChild(sessionId);
            let refreshButton = document.createElement("button");
            refreshButton.innerText = "Refresh Session";
            refreshButton.addEventListener("click", function() {
                location.reload();
            });
            contextMenu.appendChild(refreshButton);
            // god please help me
            let PfpButton = document.createElement("button");
            PfpButton.innerText = "Change Profile Picture";
            PfpButton.addEventListener("click", function() {
                let fileInput = document.createElement("input");
                fileInput.type = "file";
                fileInput.accept = "image/*";
                fileInput.addEventListener("change", function(event) {
                    let file = event.target.files[0];
                    let reader = new FileReader();
                    reader.onload = function() {
                        let pfpImage = document.getElementById("pfp");
                        pfpImage.src = reader.result;

                        localStorage.setItem("profile", reader.result);
                    };
                    reader.readAsDataURL(file);
                });
                fileInput.click();
            });
            contextMenu.appendChild(PfpButton);

            // when i click off the context menu, it will remove it
            document.addEventListener("click", function() {
                if (contextMenu) {
                    contextMenu.remove();
                }
            });

            contextMenu.style.top = event.clientY + "px";
            contextMenu.style.left = event.clientX + "px";

            document.body.appendChild(contextMenu);
        }
    });
}

let profile = localStorage.getItem("profile"); // get the profile picture from local storage
if (profile) {
    let pfpImage = document.getElementById("pfp");
    pfpImage.src = profile; // set the profile picture to the one in local storage
}