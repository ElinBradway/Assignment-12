let dotBtn = document.querySelector (".dot-menu-btn");
let dotMenu = document.querySelector (".dot-menu");

let isDotOpen = false;

dotBtn.onclick = function () {
    if (!isDotOpen) {
        dotMenu.style.display = "block";
        isDotopen = true;
    }

    else if (isDotOpen) {
        dotMenu.style.display = "none";
        isDotopen = false;
    }
} 