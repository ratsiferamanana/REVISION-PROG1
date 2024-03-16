function sommeNombresPairs(nbrPositif) {
    let sum = 0;
    for (let i = 0; i <= nbrPositif; i+=2) {
            sum+=i
    }
    
    return sum;
}
console.log(sommeNombresPairs(10)); 
console.log(sommeNombresPairs(15)); 
