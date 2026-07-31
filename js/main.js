window.addEventListener("load", () => {
    document.body.classList.add("fade-in");
});

// More info:
const moreInfoButton = document.querySelector(".more-info-btn");
const moreInfoContent = document.querySelector(".more-info-content");
const hideInfoButton = document.querySelector(".hide-info-btn");

moreInfoButton.addEventListener("click", () => {
    moreInfoContent.hidden = false;
    moreInfoButton.hidden = true;
    moreInfoButton.setAttribute("aria-expanded", "true");
});

hideInfoButton.addEventListener("click", () => {
    moreInfoContent.hidden = true;
    moreInfoButton.hidden = false;
    moreInfoButton.setAttribute("aria-expanded", "false");

    moreInfoButton.scrollIntoView({
        behavior: "smooth",
        block: "center",
    });
});