document.addEventListener("DOMContentLoaded", () => {
    let leftArrow = document.getElementById("leftArrow");
    let rightArrow = document.getElementById("rightArrow");
    let faune = document.getElementById("faune");
    let flaure = document.getElementById("flaure");
    let habitants = document.getElementById("habitants")
    let planet = document.getElementById("planetImg")
    let Habitants = document.getElementById("Habitants");
    let isOpen = false;

    leftArrow.addEventListener("click", () => {
        if (!isOpen) {
            faune.style.scale = "1.2";
            faune.style.transition = "3s";
            faune.style.opacity = "1";

            habitants.style.scale = "0.8"
            habitants.style.transition = "3s"
            habitants.style.opacity = "0.38"

            planet.style.transform = "rotate(120deg)"
            planet.style.transition = "3s"

            Habitants.style.display = "none";
            isOpen = true; // Inversion de l'état
        }
    });

    rightArrow.addEventListener("click", () => {
        if (isOpen) {
            faune.style.scale = "1";
            faune.style.transition = "3s";
            faune.style.opacity = "0.38";

            habitants.style.scale = "1"
            habitants.style.transition = "3s"
            habitants.style.opacity = "1"

            planet.style.transform = "rotate(0deg)"
            planet.style.transition = "3s"

            Habitants.style.display = "";
            isOpen = false; // Inversion de l'état
        }
    });
});
;
