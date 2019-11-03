$(function () {
    $("#postIt").hide();
    $("#affiche").click(function () {
        $("#postIt").html("Vous avez cliqué sur le bouton 'Affiche'! ");
        $("#postIt").show();
    });
    $("#cache").click(function () {
        $("#postIt").hide();
    });
    $("#survole1").hover(function () {
        $("#postIt").html("C'est gentil de me survoler...");
        $("#postIt").show();
    });
    $("#survole1").mouseleave(function () {
        $("#postIt").hide();
    });


});