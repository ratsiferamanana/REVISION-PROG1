function Doublon(string) {
    let stringVide ="";
    for (let i = 0; i < string.length; i++) {
        if (stringVide.indexOf(string[i])===-1) {
            stringVide+=string[i];
        }
        
    }
    return stringVide;
}
console.log(Doublon("ramadhan me"));