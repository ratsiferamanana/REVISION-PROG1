function sommePairs(tableaux) {
    let TableauxPairs = [];
    let SumPairs = 0;
    for (let i = 0; i < tableaux.length; i++) {
        if (tableaux[i]%2==0) {
            TableauxPairs.push(tableaux[i]);
        }
        
    }
    for (let i = 0; i < TableauxPairs.length; i++) {
        SumPairs+=TableauxPairs[i];
        
    }
    return SumPairs;
    
}
console.log(sommePairs([2,4,5,9,6])); 
console.log(sommePairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));  
