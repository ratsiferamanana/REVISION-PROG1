function determinerStatut(age) {
if(age>0){
    if (age < 18) {
        return "Vous êtes mineur.";
    } else if (age >= 18 && age <= 65) {
        return "Vous êtes majeur.";
    } else {
        return "Vous êtes senior.";
    }
}
else{
    return "l'age n'existe pas";
}
}


console.log(determinerStatut(15)); 
console.log(determinerStatut(35)); 
console.log(determinerStatut(70)); 
