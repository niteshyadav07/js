const marvel_hero = ["thor","ironman","spiderman"];
const dc_hero = ["superman", "flash", "batman"];

//marvel_hero.push(dc_hero);

// console.log(marvel_hero);
// console.log(marvel_hero[3][1]);

// const allheros = marvel_hero.concat(dc_hero);

// console.log(allheros);


const allnewhero = [...marvel_hero, ...dc_hero]
  
//console.log(allnewhero);

const anotherarr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realarr =  anotherarr.flat(Infinity);
console.log(realarr);


console.log(Array.isArray("nitesh"));

console.log(Array.from("nitesh"));//interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));






