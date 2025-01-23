AOS.init({offset: 0,});

// Sosyal medya bağlantıları
const socialLinks = {
    youtube: "https://youtube.com/",
    github: "https://github.com/Kappi7581",
    instagram: "https://www.instagram.com/Kappi7581",
    twitter: "https://x.com/"
};

// Sosyal medya butonlarına bağlantıları atama
document.querySelectorAll('.social-links .social-link').forEach((link, index) => {
    const socialMediaPlatforms = ['youtube', 'github', 'instagram', 'twitter'];
    const platform = socialMediaPlatforms[index];
    link.setAttribute('href', socialLinks[platform]);
    link.addEventListener('click', (event) => {
        window.open(socialLinks[platform], '_blank');
    });
});

// "CV'yi İndir" butonu işlevi
document.getElementById("download-cv-btn").addEventListener("click", function () {
    const cvText = document.getElementById("cv-text").innerText;
    const blob = new Blob([cvText], { type: 'text/plain' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "CV.txt";
    link.click();
});

// Hamburger menü açma fonksiyonu
function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0)";  // Menüyü ekranda göster
    document.querySelector(".hamburg").style.display = "none";  // Hamburger menüsünü gizle
    document.querySelector(".cancel").style.display = "block";  // Cancel butonunu göster
}

// Hamburger menü kapama fonksiyonu
function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";  // Menüyü gizle
    document.querySelector(".hamburg").style.display = "block";  // Hamburger menüsünü göster
    document.querySelector(".cancel").style.display = "none";  // Cancel butonunu gizle
}

// Typewriter efekti için kodlar
const texts = [
    "Geliştirici",
    "YouTuber",
    "Yazılımcı"
];

let speed = 100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let charcterIndex = 0;

function typeWriter() {
    if (charcterIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

window.onload = typeWriter;