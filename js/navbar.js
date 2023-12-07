document.addEventListener('DOMContentLoaded', function (){
    var overlay = document.getElementById('overlay');
    var toggleButton = document.getElementById('toggle');

    toggleButton.addEventListener('click', function (event){
        overlay.classList.toggle('show-overlay');
        event.stopPropagation();
    });

    document.addEventListener('click', function (event){
        if (!event.target.closest('.navigation') && !event.target.closest('.overlay') && overlay.classList.contains('show-overlay')){
            overlay.classList.remove('show-overlay');
        }
    });

    overlay.addEventListener('click', function (){
        overlay.classList.remove('show-overlay');
    });
    
});
