function toggleImage(checkbox, type, color) {
    const imgBlack = `assets/images/icons/${type}-${color}-outline.svg`;
    const imgWhite = `assets/images/icons/${type}-white-outline.svg`;
    const imgElements = checkbox.closest('label').querySelectorAll('img');

    if (checkbox.checked) {
        imgElements[0].src = imgWhite;
        imgElements[1].src = imgBlack;
    } else {
        imgElements[0].src = imgBlack;
        imgElements[1].src = imgWhite;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const currentUrl = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach((link) => {
        const linkUrl = link.getAttribute("href").split("/").pop();

        if (linkUrl === currentUrl) {
            link.classList.add(
                "bg-booster-yellow",
                "font-semibold",
            );
        }
    });
});
