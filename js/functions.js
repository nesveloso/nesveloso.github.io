// Light/Dark mode

document.addEventListener("DOMContentLoaded", function (){
    var light_on = true;

    window.lampada = function (){
        let light = document.getElementById("light");
        let htmlElement = document.documentElement;
        let bodyElement = document.body;

        if (light_on){
            light_on = false;
            light.src = "images/icones/dark_mode.png";
            htmlElement.style.backgroundColor = "black";
            bodyElement.classList.add("dark-mode");
        }
        else{
            light_on = true;
            light.src = "images/icones/light_mode.png";
            htmlElement.style.backgroundColor = "white";
            bodyElement.classList.remove("dark-mode");
        }
    };
});
