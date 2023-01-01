/* ********************Exercice 1 : Information **************************/
/**
 *@author : KAMATE Fanta
  *@description : 
 * - fonction sans parametre 
 *-fonction avec trois parametre
 *@param:
 *@returns: 
 *-nom,age et loisirs
 *- une phrase contenant nom,age et loisirs
 */

// cette fonction retoure le nom, l'âge et les hobbies
function infoAboutMe(){
    let name = "KAMATE Fanta";
    let age = 27;
    let hobbies = "J'aime jouer de la flûte et j'aime la lecture de romans policiers";
    console.log(" your name is : " + name);
    console.log(" your age is : " + age + " ans");
    console.log(" your hobbies are : " + hobbies);
    

}
infoAboutMe();

let personName;
let personAge;
let  personFavoriteColor;
// cette fonction retoure le nom, l'âge et les hobbies dans une phrase
function infoAboutPerson(personName, personAge, personFavoriteColor){
    console.log("Your name is " + personName + " , you are " + personAge + " years old, your favorite color is " + personFavoriteColor);

}
infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");


/* **********************Exercise 2 : Tips *************************** */
/**
  *@author : KAMATE Fanta
 * @description : gestion de calcul du montant total de la facture
* @param: tip : type number
* @returns: 
 *-le montant total de la facture en fonctio du montant de la facture saisi par l'utilisateur et le tip 
 *- le tip en fonction du montant de la facture saisi par l'utilisateur
 */


let bill;
let  tip;
/* cette fonction retoure le montant de
* la facture totale en se basant sur le tip et le montant saisi par l'utlisateurd'une part et d'autre part
* le tip en fonction du montant de la facture saisi par l'utilisateur*/
function calculateTip(){
    bill = prompt("John enter the amount of the bill");
    let finalBill;
    if(bill < 50){
        tip = (20 / 100);
        finalBill = bill + tip ;
        console.log("the tip amount and the final bill " + finalBill);

    }
    else if(bill >= 50 && bill <= 200){
        tip = (15 / 100);
        finalBill = bill + tip ;
        console.log("the tip amount and the final bill " + finalBill);

    }
    else{
        tip = (10 / 100);
        finalBill = bill + tip ;
        console.log("the tip amount and the final bill " + finalBill);

    }
}

calculateTip();

/*******************Exercise 3 : Find The Numbers Divisible By 23**************************/
/**
 * @author : KAMATE Fanta
 * @description : liste des nombres divisibles par un diviseur 
 *@param: diviseur 23 : type number
* @returns: 
 *- retourner la liste des nombres divisibles par 23
 *-retourner la liste des nombres divisibles par un entier saisi par l'utilisateur
 */

 // cette fonction retoure la liste des nombres divisibles par 23
function isDivisible(){
    for(let i = 0; i >= 0 && i <= 500; i++){
        if(i % 23 == 0){
            console.log( " " + i + " " );
        }
    }
}


let divisor;
// cette fonction retoure la liste des nombres divisibles par un diviseur
function isDivisible(divisor){
    let sum = 0;
    for(let j = 0; j >= 0 && j <= 500; j++){
        if(j % divisor == 0){
            console.log( j );
            sum = sum + j;
          
            
        }
        
        
    }
    console.log("all the numbers divisible by " + divisor + ", and their sum is : "  + sum);
    

}
isDivisible(3);
isDivisible(45);


