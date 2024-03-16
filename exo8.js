function TrouverUnique(arr) {
    let accumulateur = {};

    arr.forEach(num => {
        if (accumulateur[num]) {
            accumulateur[num]++;
        } else {
            accumulateur[num] = 1;
        }
    });
    
    for (let key in accumulateur) {
        if (accumulateur[key] === 1) {
            return parseFloat(key); 
        }
    }
}


console.log(TrouverUnique([ 1, 1, 1, 2, 1, 1 ])); 
console.log(TrouverUnique([ 0, 0, 0.55, 0, 0 ]));
