function Reverse(string) {
    let array = string.split(" ");
    let Reverse = "";
    for (let i = array.length-1; i >= 0; i--) {
        Reverse+=array[i]+" ";
        
    }
    return Reverse;
    
}
console.log(Reverse("aujourd'hui c'est la fête"));

