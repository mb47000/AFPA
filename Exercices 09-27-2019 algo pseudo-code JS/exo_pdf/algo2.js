var N = parseInt(return_N_confirm(prompt("entrez un nombre entier"))); /* Initialisation de la variable N et demande de saisie d'un nombre entier à l'utilisateur */
alert(N + ' est bien un nombre entier');

function return_N_confirm(saisie_utilisateur) {    /* Fonction de verification de la saisie utilisateur et d'affectation à   /
                                                  /  la variable N si validation, le cas échéant l'utilisateur reçoit       / 
                                                 /  une notification d'échec et est invité à rentrer une nouvelle valeur  */
    function is_int(value) {
        if (((value%1 == 0)) && !isNaN(value)) { /* Si (value) n'est ni un nombre décimal, ni une valeur    */
            return true;                                              /*  d'un autre type que nombre, la fonction is_int renvoie */
        } else {                                                     /*   true, sinon elle renvoi false. Autrement dit : si l'  */
            return false;                                           /*    argument (value) est un nombre entier is_int = true. */
        }
    }

    while (!is_int(saisie_utilisateur)) {

        if (!saisie_utilisateur) {
            if (saisie_utilisateur == '') {
                alert('aucune entrée');
                saisie_utilisateur = prompt('Entrez un nombre entier :')
            }
            else if (confirm('Voulez-vous quitter le programme ?')) {
                break;
            } else {
                saisie_utilisateur = prompt('Entrez un nombre entier :');
            }
        } else {
            alert('la saisie n\'est pas un nombre entier');
            saisie_utilisateur = prompt('Entrez un nombre entier :')
        }
    }

    return saisie_utilisateur;
} // Fin de la fonction return_N_confirm    


