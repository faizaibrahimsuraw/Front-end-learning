document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger-lines");
    const menuItems = document.querySelector(".menu-items");

    hamburger.addEventListener("click", () => {
        menuItems.classList.toggle("active");
    });
});
