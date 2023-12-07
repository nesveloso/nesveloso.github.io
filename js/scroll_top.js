document.addEventListener("DOMContentLoaded", function (){
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", function (){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    scrollToTopBtn.style.display = "flex";
    }
    else{
    scrollToTopBtn.style.display = "none";
    }
});


scrollToTopBtn.addEventListener("click", function (){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
});