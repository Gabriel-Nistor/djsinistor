document.body.style.overflow = "hidden";
document.body.style.overflow = "";

(function () {
    const overlay = document.getElementById("launchOverlay");
    const logo = overlay.querySelector(".launch-overlay__logo");

    let active = true;

    function random(min, max) {
        return Math.random() * (max - min) + min;
    }

    function flashLogo() {
        if (!active) return;

        // random position
        const x = random(5, 75);
        const y = random(5, 75);

        logo.style.left = x + "vw";
        logo.style.top = y + "vh";

        // random size
        const size = random(30, 70);
        logo.style.width = size + "vw";

        // random brightness
        const brightness = random(1.1, 1.6);
        logo.style.filter = `brightness(${brightness}) contrast(1.1)`;

        // show briefly
        logo.style.opacity = random(0.2, 0.5);

        const duration = random(120, 300);

        setTimeout(() => {
            logo.style.opacity = 0;
        }, duration);

        // next flash (irregular)
        const delay = random(400, 2500);
        setTimeout(flashLogo, delay);
    }

    // click to enter
    // overlay.addEventListener("click", () => {
    //     active = false;
    //     overlay.classList.add("launch-overlay--hidden");
    // });

    flashLogo();
})();

(function () {
    const countdownEl = document.getElementById("countdown");
    if (!countdownEl) return;

    const target = new Date("2026-04-30T20:22:00+01:00").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const diff = target - now;

        if (diff <= 0) {
            countdownEl.textContent = "It begins.";
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        countdownEl.textContent =
            `${String(days).padStart(2, "0")}d ` +
            `${String(hours).padStart(2, "0")}h ` +
            `${String(minutes).padStart(2, "0")}m ` +
            `${String(seconds).padStart(2, "0")}s`;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
})();