function reverseString(name){
    return name.split("").reverse().join("");
}
console.log(reverseString("sara"));

function countVowels(str){
    if(str.includes("a")){
        return 1;
    }else if(str.includes("a","e")){
        return 2;
    }
}
console.log(countVowels("Saera"))   