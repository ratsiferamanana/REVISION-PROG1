function sommeChiffres(nbrEntierPositive) {
    let array = nbrEntierPositive.toString().split("");
    let Sum = 0;
    for (let i = 0; i < array.length; i++) {
        Sum+=parseInt(array[i]);
        
    }
    return Sum;
}
console.log(sommeChiffres(9876));