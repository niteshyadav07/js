// primitive
// 7 types : string,number,boolean,null,undefined, symbol,bigint


const score = 100;
const scorevalue = 100.3;

const  isloggedin = false;
const outsidetemp = null;
let useremail;

const id = Symbol('123');
const anotherid  = Symbol('123');

console.log(id === anotherid)

const bignum = 36575375334573n;


// reference (Non primitive)

//Array, objects, function

const heros = ["shaktiman", "naagraj", "doga" ];

let myobj = {
    name : "nitesh",
    age :25

};
const myfunction =function(){
    console.log("hello world");
}

console.log(typeof bigbum);
