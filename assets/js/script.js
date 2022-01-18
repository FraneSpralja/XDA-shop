$(document).ready(function(){
    $("#navButton").click(function(){
        $("#navList").toggleClass("navigation");
        $(".nav__menu").toggleClass("moveBtn");
    });
});