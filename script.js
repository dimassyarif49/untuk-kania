
const envelope = document.getElementById("envelope");
const envelopeArea = document.getElementById("envelopeArea");
const letterContent = document.getElementById("letterContent");
const hint = document.getElementById("hint");
const typedMessage = document.getElementById("typedMessage");

let isOpened = false;

const message = `Aku mau minta maaf ya, Sayang.

Aku sadar mungkin ada perkataan atau sikapku yang bikin kamu sedih, kecewa, atau bahkan merasa tidak dihargai.

Aku nggak mau menganggap perasaan kamu sebagai hal yang sepele. Aku tahu kata maaf saja mungkin nggak cukup untuk memperbaiki semuanya, tapi aku benar-benar ingin kamu tahu kalau aku menyesal.

Aku nggak pernah bermaksud membuat kamu merasa sendirian atau terluka. Aku juga sadar kalau dalam hubungan, bukan cuma tentang saling menyayangi, tapi juga tentang saling memahami, menghargai, dan belajar dari kesalahan.

Aku nggak akan memaksa kamu untuk langsung memaafkan aku. Kalau kamu masih butuh waktu, aku akan menghargainya.

Aku cuma berharap kita masih bisa memperbaiki semuanya pelan-pelan.

Sekali lagi, maafin aku ya, Sayang. ❤️`;

envelopeArea.addEventListener("click", () => {
    if (isOpened) return;

    isOpened = true;

    envelope.classList.add("open");
    hint.style.display = "none";

    setTimeout(() => {
        letterContent.style.display = "block";

        letterContent.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        typeMessage();
    }, 900);
});

function typeMessage() {
    let index = 0;

    function write() {
        if (index < message.length) {
            typedMessage.textContent += message.charAt(index);
            index++;

            setTimeout(write, 30);
        }
    }

    write();
}

function chooseAnswer(answer) {
    const response = document.getElementById("answerMessage");

    if (answer === "yes") {
        response.textContent =
            "Terima kasih sudah mau mendengarkan aku. Aku ingin kita saling memahami lebih baik. ❤️";
    } else {
        response.textContent =
            "Tidak apa-apa, Sayang. Ambil waktumu. Aku akan menghargai perasaanmu. 🤍";
    }
}

// Animasi hati yang berjatuhan
function createHeart() {
    const heart = document.createElement("span");

    heart.classList.add("floating-heart");

    const hearts = ["❤️", "💕", "💗", "💖", "♡"];

    heart.textContent =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (12 + Math.random() * 17) + "px";
    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(createHeart, 700);
