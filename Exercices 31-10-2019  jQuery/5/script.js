(function() {
document.getElementById("postIt").style.visibility = "hidden";

var btnaffiche = document.getElementById("affiche");
    btnaffiche.addEventListener("click", function post_it() {
        document.getElementById("postIt").innerHTML = "Vous avez cliqué sur le bouton 'Affiche'! " ;  
        document.getElementById("postIt").style.visibility = "visible";
    }
    , false);

var btncache = document.getElementById("cache");
    btncache.addEventListener("click", function cache() {
        document.getElementById("postIt").style.visibility = "hidden";
    }
    , false);

var p = document.getElementById("survole1");
    p.addEventListener("mouseover", function survole() {
        document.getElementById("postIt").innerHTML = "Vous avez cliqué sur le bouton 'Affiche'! " ;  
        document.getElementById("postIt").style.visibility = "visible";
    }
    , false);
    p.addEventListener("mouseout", function survole_off() {
        document.getElementById("postIt").style.visibility = "hidden";
    }
    , false);

}())