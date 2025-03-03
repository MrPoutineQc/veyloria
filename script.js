document.addEventListener("DOMContentLoaded", () => {
    let leftArrow = document.getElementById("leftArrow");
    let rightArrow = document.getElementById("rightArrow");
    let faune = document.getElementById("faune");
    let flaure = document.getElementById("flaure");
    let habitants = document.getElementById("habitants");
    let planet = document.getElementById("planetImg");
    let Habitants = document.getElementById("Habitants");
    let partieFlaure = document.getElementById("partieFlaure");
    let partieFaune = document.getElementById("partieFaune")
    let state = "Habitants";

    if (state === "Habitants") {
        partieFaune.style.display = "none"
        partieFlaure.style.display = "none"
    }


    leftArrow.addEventListener("click", () => {
        if (state === "Habitants") {
            faune.style.scale = "1.2";
            faune.style.transition = "3s";
            faune.style.opacity = "1";

            partieFaune.style.display = "";

            habitants.style.scale = "0.8";
            habitants.style.transition = "3s";
            habitants.style.opacity = "0.38";

            planet.style.transform = "rotate(90deg)";
            planet.style.transition = "3s";

            Habitants.style.display = "none";
            state = "Faune";
        }
        else if (state === "Flaure") {
            flaure.style.scale = "1";
            flaure.style.transition = "3s";
            flaure.style.opacity = "0.38";

            partieFlaure.style.display = "none";

            habitants.style.scale = "1";
            habitants.style.transition = "3s";
            habitants.style.opacity = "1";

            planet.style.transform = "rotate(0deg)";
            planet.style.transition = "3s";

            Habitants.style.display = "";
            state = "Habitants"; 
    }
    })
    

    

    rightArrow.addEventListener("click", () => {
            if (state === "Habitants") {
                flaure.style.scale = "1.2";
                flaure.style.transition = "3s";
                flaure.style.opacity = "1";

                partieFlaure.style.display = "";
    
                habitants.style.scale = "0.8";
                habitants.style.transition = "3s";
                habitants.style.opacity = "0.38";
    
                planet.style.transform = "rotate(-90deg)";
                planet.style.transition = "3s";
    
                Habitants.style.display = "none";
                state = "Flaure"; 
        }
        else if (state === "Faune") {
                faune.style.scale = "1";
                faune.style.transition = "3s";
                faune.style.opacity = "0.38";

                partieFaune.style.display = "none";
    
                habitants.style.scale = "1";
                habitants.style.transition = "3s";
                habitants.style.opacity = "1";
    
                planet.style.transform = "rotate(0deg)";
                planet.style.transition = "3s";
    
                Habitants.style.display = "";
                state = "Habitants"; 
            }
    });

    

});
;



// BURGER

let burgerLogo = document.querySelector('.burger');
let burger1 = document.querySelector('.burger1');
let burger2 = document.querySelector('.burger2');
let burger3 = document.querySelector('.burger3');
let body = document.querySelector('body');
let isOpen = false;


burgerLogo.addEventListener('click', () => {
    if (!isOpen) {
        burger1.style.transform = 'rotate(45deg) translateY(0px)';
        burger1.style.width = '30px';
        burger1.style.position = 'absolute';
        burger1.style.marginTop = '15px'

        burger2.style.transform = 'rotate(-45deg) translateY(0px)';
        burger2.style.width = '30px';
        burger2.style.position = 'absolute';
        burger2.style.marginTop = '15px'

        burger3.style.visibility = 'hidden';
        burger3.style.transition = "none"

        body.style.backgroundColor = 'rgba(0,0,0,0.3)';

        isOpen = true;
    } else {
        burger1.style.transform = 'rotate(0deg)';
        burger1.style.width = '30px';
        burger1.style.position = '';
        burger1.style.marginTop = '5px';

        burger2.style.transform = 'rotate(0deg)';
        burger2.style.width = '30px';
        burger2.style.position = '';
        burger2.style.marginTop = '5px'

        burger3.style.visibility = 'visible';
        burger3.style.marginTop = '5px'

        body.style.backgroundColor = '';

        isOpen = false;
    }
});
