
const words = ["Software Engineer", "Ruby On Rails Developer", "Full Stack Developer", "Artist🖌️"];
let index = 0;
let letterIndex = 0;
let isDeleting = false;

function typeEffect() {
    let currentWord = words[index];

    if (!isDeleting) {
        letterIndex++;
    } else {
        letterIndex--;
    }

    document.getElementById("text").innerText = currentWord.substring(0, letterIndex);

    if (!isDeleting && letterIndex === currentWord.length) {
        setTimeout(() => isDeleting = true, 1000);
    } else if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        index = (index + 1) % words.length;
    }

    setTimeout(typeEffect, isDeleting ? 100 : 200);
}

document.addEventListener("DOMContentLoaded", typeEffect);

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav');
  
    if (hamburger && navLinks) {
      hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
      });
    }
  });