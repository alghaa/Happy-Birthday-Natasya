// ==========================================
// ELEMENT WEBSITE
// ==========================================

const openBtn = document.getElementById("openBtn");
const opening = document.getElementById("opening");
const birthday = document.getElementById("birthday");
const giftWrap = document.getElementById("giftWrap");
const loader = document.getElementById("loader");
const typing = document.getElementById("typing");
const music = document.getElementById("music");
const musicControl = document.getElementById("musicControl");


// ==========================================
// PENGATURAN UCAPAN
// ==========================================

const birthdayName = "Natt ❤️";

const birthdayMessage = `Selamat ulang tahun! 🎂❤️

Selamat ulang tahun natt.

Gw bingung mau kasih kado lu apa, tapi gw udah siapin kadonya kok.

Walaupun kadonya gak semahal kado yang lu kasih ke gw, cuman gw rasa kado ini bagus buat lu.

Awalnya gw mau kasih lu kado yang lebih dari ini, tapi gw sendiri bingung.

Nanti pagi gw dateng ke rumah lu, gw bawain kado ini buat lu.

Semoga lu suka sama kadonya yaa. Gw mungkin gak bisa kasih sesuatu yang mahal, tapi gw harap kado kecil ini bisa bikin lu seneng.

Semoga di umur lu yang sekarang, semua hal yang lu inginkan bisa tercapai.

Semoga lu selalu sehat, bahagia, dan dikelilingi orang-orang yang sayang sama lu.

Jangan lupa selalu senyum dan nikmati setiap proses yang ada.

Sekali lagi...

HAPPY BIRTHDAY NATT! 🎂🎉❤️`;


// ==========================================
// TAMPILKAN NAMA
// ==========================================

const nameElement = document.getElementById("name");

if (nameElement) {
    nameElement.textContent = birthdayName;
}


// ==========================================
// MUSIK
// ==========================================

// Kalau punya musik:
// music.src = "music.mp3";

music.src = "";


// ==========================================
// LOADING
// ==========================================

window.addEventListener("load", function () {

    setTimeout(function () {

        if (loader) {
            loader.classList.add("hide");
        }

    }, 650);

});


// ==========================================
// CONFETTI
// ==========================================

function createConfetti() {

    const symbols = [
        "♥",
        "♡",
        "✦",
        "●",
        "◆",
        "★"
    ];

    for (let i = 0; i < 100; i++) {

        const piece = document.createElement("div");

        piece.className = "confetti";

        piece.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.setProperty(
            "--x",
            (Math.random() * 400 - 200) + "px"
        );

        piece.style.setProperty(
            "--fall",
            (2.5 + Math.random() * 3) + "s"
        );

        piece.style.fontSize =
            (8 + Math.random() * 12) + "px";

        piece.style.animationDelay =
            Math.random() * 0.7 + "s";

        document.body.appendChild(piece);

        setTimeout(function () {

            piece.remove();

        }, 6000);
    }
}


// ==========================================
// ANIMASI MENGETIK
// ==========================================

function typeMessage() {

    if (!typing) {
        return;
    }

    typing.textContent = "";

    let i = 0;

    const speed = 25;

    function write() {

        if (i < birthdayMessage.length) {

            typing.textContent +=
                birthdayMessage.charAt(i);

            i++;

            setTimeout(write, speed);

        }

    }

    write();
}


// ==========================================
// BUKA KEJUTAN
// ==========================================

function openSurprise() {

    console.log("Tombol berhasil diklik!");

    if (openBtn) {
        openBtn.disabled = true;
    }

    // Animasi gift
    if (giftWrap) {

        giftWrap.style.animation = "none";

        giftWrap.style.transform =
            "scale(1.15)";

    }

    // Confetti
    createConfetti();


    // Keluar dari halaman pertama
    setTimeout(function () {

        if (opening) {

            opening.classList.add("exit");

        }

    }, 300);


    // Masuk ke halaman ulang tahun
    setTimeout(function () {

        if (opening) {

            opening.style.display = "none";

        }

        if (birthday) {

            birthday.classList.add("show");

        }

        if (musicControl) {

            musicControl.classList.add("on");

        }

        // Mulai tulisan
        typeMessage();


        // Coba memainkan musik
        if (music && music.src) {

            music.play().catch(function () {

                if (musicControl) {

                    musicControl.classList.remove("on");

                }

            });

        }


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 1000);
}


// ==========================================
// EVENT TOMBOL UTAMA
// ==========================================

if (openBtn) {

    openBtn.addEventListener(
        "click",
        openSurprise
    );

}


// ==========================================
// GIFT JUGA BISA DIKLIK
// ==========================================

if (giftWrap) {

    giftWrap.addEventListener(
        "click",
        openSurprise
    );

}

// ==========================================
// TOMBOL MUSIK
// ==========================================

if (musicControl) {

    musicControl.addEventListener(
        "click",
        function () {

            if (!music || !music.src) {

                alert(
                    "Musik belum ditambahkan. Masukkan file MP3 terlebih dahulu."
                );

                return;

            }


            if (music.paused) {

                music.play();

                musicControl.textContent = "♪";

            } else {

                music.pause();

                musicControl.textContent = "Ⅱ";

            }

        }
    );

}


// ==========================================
// CEK JAVASCRIPT
// ==========================================

console.log("================================");
console.log("BIRTHDAY WEBSITE");
console.log("JavaScript berhasil dijalankan!");
console.log("Tombol:", openBtn);
console.log("================================");