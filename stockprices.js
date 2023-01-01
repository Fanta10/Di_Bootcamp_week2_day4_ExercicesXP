/* ********************* Exercice 4 : Liste De Courses ************************** */

/**
  *@author : KAMATE Fanta
 * @description : gestion de calcul de facture  en fonction de la liste de courses en se basant sur
 * sur le prix de chaque article de la liste de course qui existe dans le stock et dont le stock
 *  est supérieur à 0 
 * @param: objet stock de type object
* @param: objet prices : type object
* @param: array shoppigList : type array
* @returns : 
 *-la facture
 *-la quatité du stock restant
 */

//Liste des articles du stock
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

//Liste des différents prix des articles en stock
const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
 
let result = 0;
let quantite  = stock;

//Liste des articles sélectionnés par un client
let shoppingList = ["banana", "orange", "apple"];

//la fonction myBill() permet de retourner le montant total de la listes de courses 
function myBill(){

    for(let k  of shoppingList){
        if( k in stock){
            if(stock[k] > 0){
                result += prices[k];
                stock[k] -= 1; 
                console.log(stock);

            }  
        }  

    }
    
    console.log("The total price of your shoppingList est : " + result);
}
myBill();

/* ********************Exercise 5 : What’s In My Wallet ****************** */
/**
 *@author : KAMATE Fanta
* @description : gestion de portefeuille d'un client
* @param: tableau de taux d'echange : type array
*  @returns : 
 *-le montant dû
 *- la reponse true ou false qui permet de savoir si oui ou non l'article peut etre acheté
 */
let calculChange = 0;

let resultat = 0;
let taux = [0.25, 0.10, 0.05, 0.01];
let answer;

//cette fonction permet de savoir si le client peut acheter ou non un article en fonction 
//de la somme dont il dispose

function changeEnough(itemPrice, amountOfChange){
    for(let change in amountOfChange){
        
        for(let t in taux){
            if(change == t){
                calculChange += amountOfChange[change] * taux[t];
                console.log(amountOfChange[change] * taux[t]);
            }
    
        }
    if(calculChange > itemPrice){
         answer = "true";
        resultat = calculChange;
    
    }
    else{
         answer = "false";
    } 
}
    console.log("the total amount due is : " + answer + "  " + resultat);
    
}

//changeEnough(4.25, [25,20,5,0]);
changeEnough(14.11, [2,100,0,0]);
changeEnough(0.75, [0,0,20,5]);

/************************Exercise 6 : Vacations Costs **************************/

/**
  *@author : KAMATE Fanta
  *@description : gestion des frais de vacances 
 *@param: 
 * -le coût de l'hôtel par nuit : type number
 * - le coût de destination en fonction des differents pays choisis : type number
 * -le taux de reduction du coût de la location d'une voiture : type number
 * -le coût de location de la voiture par jour : type number
  *@returns : 
 * -le coût de l'hotel en fonction du nombrede jour passé dans l'hôtel
 *-le coût de la destination en fonction du pays de destination choisi
 *- le coût de la location d'une voiture en fonction du nombre de jour
 */
let prixHotel = 0;
let user;
let destinationUser;
let carUser;

// cette fonction calcule le cout de sejour à l'hotel en fonction du nombre de jour entré par le client 
function hotelCost(user){
    letuserConverti = parseInt(user);
        prixHotel = user * 140;
        
        return "$" + prixHotel;
}

// cette fonction donne le coût de la destination en fonction du pays de destination
function planeRideCost(destinationUser){
    if(destinationUser == "Londres"){
     
      return destinationUser + " $183 "; 

    }
    else  if(destinationUser =="Paris"){
      
       return destinationUser + " $220 "; 

    }
    else{
      
       return destinationUser + " $300 ";

    }

}
let cout;
//cette fonction calcule le coût de location de la voiture en fonction du nombre de jour
function rentalCarCos(carUser){
    let valueCoverte = parseInt(carUser);
    if(valueCoverte > 10){
        cout = valueCoverte * 0.05 ;

       
        return  cout;   

    }
    else{
        cout = 40;
          
        return cout;

    }

}



let use;

// cette fonction retourne le montant total des frais de vacances 
function totalVacationCost(){

 user = prompt(" Le nombre de nuits qu'il souhaite passer à l'hôtel ?");
while(isNaN(user) == true){
    user = prompt(" Le nombre de nuits qu'il souhaite passer à l'hôtel ?");
}
 destinationUser = prompt(" Quelle est votre destination ?");
while(isNaN(destinationUser) !== true){
    destinationUser = prompt(" Quelle est votre destination  ?");
}
 carUser = prompt("le nombre de jours pendant lesquels vous souhaitez louer la voiture?");
while(isNaN(carUser) == true){
    carUser = prompt(" le nombre de jours pendant lesquels vous souhaitez louer la voiture?");

}


console.log(" Le coût de la voiture : $" + rentalCarCos(carUser) + " , le coût de l'hôtel :  " +  hotelCost(user) + " , les billets d'avion coûtent : " + planeRideCost(destinationUser));

}
totalVacationCost();

