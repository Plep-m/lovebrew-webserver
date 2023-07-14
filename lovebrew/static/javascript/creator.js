document.addEventListener("DOMContentLoaded", () => {
    var forwardButton = document.getElementById("config-create");
    var backButton = document.getElementById("return-home");

    if (forwardButton) {
        forwardButton.addEventListener("click", () => {
            window.location = "/form";
        });
    } else {
        backButton.addEventListener("click", () => {
            window.location = "/";
        });
    }
});
