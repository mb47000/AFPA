var moins_de_20 = 0;
var entre_20_et_40 = 0;
var plus_de_40 = 0;
var i = 0;
var liste_age = [105];


do{

   if(liste_age[i] > 40){
       plus_de_40 += 1;
       i+=1;
   }
   else if((liste_age[i] >= 20) && (liste_age[i] <= 40)){
       entre_20_et_40 += 1;
       i+=1;
   } else {
       moins_de_20 += 1;
       i+=1;
   }
   } while ((liste_age[i-1]) < 100 );

alert('moins de 20 : ' + moins_de_20 + '\n' + 'entre 20 et 40 : ' + entre_20_et_40 + '\n' + 'plus de 40 : ' + plus_de_40)

