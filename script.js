/* =========================
   MỞ LỜI CHÚC
========================= */

function openLetter() {

    const popup = document.getElementById("popup");

    popup.classList.add("active");

    makeConfetti();

}


/* =========================
   ĐÓNG LỜI CHÚC
========================= */

function closeLetter() {

    const popup = document.getElementById("popup");

    popup.classList.remove("active");

}


/* =========================
   TẠO PHÁO GIẤY
========================= */

function makeConfetti() {

    const symbols = [
        "💗",
        "💕",
        "✨",
        "🌸",
        "🎀",
        "⭐",
        "💖",
        "🌷"
    ];

    for (let i = 0; i < 80; i++) {

        const confetti =
            document.createElement("div");

        confetti.classList.add("confetti");

        confetti.innerHTML =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.fontSize =
            (Math.random() * 15 + 10) + "px";

        confetti.style.animationDuration =
            (Math.random() * 2 + 2) + "s";

        confetti.style.animationDelay =
            Math.random() * 0.5 + "s";

        document.body.appendChild(confetti);


        setTimeout(() => {

            confetti.remove();

        }, 4000);

    }

}


/* =========================
   CLICK RA NGOÀI POPUP
========================= */

document
    .getElementById("popup")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            closeLetter();

        }

    });