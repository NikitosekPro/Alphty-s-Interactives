// MODAL

const openModalBtn = document.querySelector(".box-btn");
const closeModalBtn = document.querySelector(".modal-close-btn");
const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");

// Open modal
openModalBtn.addEventListener("click", () => {
    backdrop.classList.add("open-modal");
});

// Close modal with close button
closeModalBtn.addEventListener("click", () => {
    backdrop.classList.remove("open-modal");
});

// Close modal by clicking *only* on the backdrop (not the modal)
backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) {
        backdrop.classList.remove("open-modal");
    }
});

// DARK MODE

const toggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const darkExample = document.getElementById("darkExample");

// Handle theme toggle
toggle.addEventListener("change", () => {
const isDark = toggle.checked;

  // Toggle icon
    themeIcon.src = isDark ? "./img/moon-20.svg" : "./img/sun.svg";

  // Toggle global dark mode class on body
    document.body.classList.toggle("dark", isDark);

  // Toggle dark class on specific box
    darkExample.classList.toggle("dark-example_dark", isDark);
});



// LOGIN INPUT

const input = document.querySelector(".login-input");
const paragraph = document.querySelector(".login-text");

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        updateText();
    }
});

document.addEventListener("click", (event) => {
    if (!input.contains(event.target)) {
        updateText();
    }
});

function updateText() {
    if (input.value.trim() !== "") {
        paragraph.textContent = `Hello, ${input.value}`;
    } else {
        paragraph.textContent = "";
    }
}
