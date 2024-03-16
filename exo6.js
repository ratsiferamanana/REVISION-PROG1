function string(str) {
    let reponse = "";
    for (let i = 0; i < str.length; i++) {
        reponse+=str[i].repeat(2);
    }
    return reponse;
    
}
console.log(string("Hello"));