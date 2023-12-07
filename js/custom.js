document.addEventListener("DOMContentLoaded", function(){
    function getCurrentYear() {
        var d = new Date();
        var currentYear = d.getFullYear();

        document.getElementById("displayDate").innerHTML = currentYear;
    }

    getCurrentYear();
});
