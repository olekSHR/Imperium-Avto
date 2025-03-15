function openFullscreen(img) {
    const fullscreen = document.getElementById("fullscreen-view");
    const fullscreenImg = document.getElementById("fullscreen-img");

    fullscreen.style.display = "flex";
    fullscreenImg.src = img.src;
    fullscreenImg.style.transform = "scale(1.3)"; // Уменьшили увеличение
}


function closeFullscreen() {
    document.getElementById("fullscreen-view").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".fade-in").forEach(el => {
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const whatsappButton = document.querySelector(".whatsapp-button");

    if (whatsappButton) {
        whatsappButton.addEventListener("click", function(event) {
            event.preventDefault();
            window.open("https://wa.me/40741041177?text=Здравствуйте!%20Меня%20интересует%20автомобиль%20из%20вашего%20сайта.", "_blank");
        });
    }
});
