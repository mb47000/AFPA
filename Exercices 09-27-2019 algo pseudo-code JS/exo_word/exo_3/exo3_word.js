var nombre_de_caractere_trouve = retour_nombre_caractere_trouve(prompt('entrez votre phrase'), prompt('lettre à rechercher'));
alert('il y a ' + nombre_de_caractere_trouve + " fois la lettre recherché dans votre phrase" );

function retour_nombre_caractere_trouve(chaine_de_caractere, caractere_recherche){
    var compteur_match = 0;

    for(i=0; chaine_de_caractere[i] != '.'; i++){
        if(chaine_de_caractere[i] == caractere_recherche){
            compteur_match += 1;
        }
    }
    return compteur_match;
}
