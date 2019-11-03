function perimetre() {
    var resultat = 0;
   
    switch(arguments.length) {
        case 0 :
            console.log(resultat);
            break;
            
        case 1 :
            resultat = arguments[0]*4;
            console.log(resultat);
            break;
      
        case 2 :
            resultat = (arguments[0]+arguments[1])*2;
            console.log(resultat);
            break;
  
        case 3 :
            resultat = arguments[0]+arguments[1]+arguments[2];
            console.log(resultat);
            break;
    
        default :
            for(i=0; i<arguments.length; i++){
                resultat += arguments[i];
                }
            console.log(resultat);
            break;
    }
}
perimetre();
// affiche  0 
perimetre(5);
// affiche 20 
perimetre(9, 6);
// affiche 30
perimetre(5, 5, 5);
// affiche 15
perimetre(3, 7, 20, 8);
// affiche 38