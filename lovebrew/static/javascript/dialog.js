document.addEventListener("DOMContentLoaded", () => {
    var dialog = document.querySelector('dialog');

    if (!dialog.showModal) {
        dialogPolyfill.registerDialog(dialog);
    }

    dialog.querySelector('.close').addEventListener('click', function () {
        dialog.close();
        localStorage.setItem("bundler.userConfirmed", "true");
    });

    const confirmed = localStorage.getItem("bundler.userConfirmed");

    if (confirmed !== "true") {
        dialog.showModal();
    }
});
