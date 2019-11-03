var result= find_n_occ(prompt('entrez votre phrase'), prompt('entrée deux lettre'));
alert('il y a ' + result + ' fois l\'occurence');
alert(chaine_donne.length);

function find_n_occ(chaine_donne, l_succes){
    var compteur_occurences = 0;
    for(i=0; chaine_donne[i] != "."; i++){
        if((chaine_donne[i] + chaine_donne[i+1]) == l_succes){
            compteur_occurences += 1;
        }
    }
    return compteur_occurences;
}