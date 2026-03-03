let adjectives = "Happy, Bright, Cozy, Swift, Golden";
let shopnames = "Corner, Mart, Deopt, Hub, Studio";
let extrawords = "Solution, World, Express, Works, House";

function randomWord(str){
    let words = str.split(",");
    return words[Math.floor(Math.random() * words.length)];
}

function generateBusinessName(){
    let adj = randomWord(adjectives);
    let shop = randomWord(shopnames);
    let extra = randomWord(extrawords);

    return adj + shop + extra;
}

let businessName = generateBusinessName();
console.log(businessName);