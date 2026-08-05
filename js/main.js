window.addEventListener("load", () => {
    document.body.classList.add("fade-in");
});

// More info:
const moreInfoButton = document.querySelector(".more-info-btn");
const hideInfoButton = document.querySelector(".hide-info-btn");
const moreInfoContent = document.querySelector(".more-info-content");

function toggleMoreInfo() {
    const isOpening = moreInfoContent.hidden;

    moreInfoContent.hidden = !isOpening;

    moreInfoButton.textContent = isOpening
        ? "Hide info"
        : "More info";

    moreInfoButton.setAttribute("aria-expanded", isOpening);

    if (!isOpening) {
        moreInfoButton.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }
}

moreInfoButton.addEventListener("click", toggleMoreInfo);
hideInfoButton.addEventListener("click", toggleMoreInfo);