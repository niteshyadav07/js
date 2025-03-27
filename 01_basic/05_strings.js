const name = "nitesh"

const repoCount = 10;

//console.log(name + repoCount + "value")

//console.log(`hello my nam is ${name} and my repo count ${repoCount}`)

const gamename = new String('nitesh');

// console.log(gamename[0]);
// console.log(gamename.__proto__);


// console.log(gamename.length);
// console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('t'));


const newstr = gamename.substring(0,4);
console.log(newstr);

const anotherstr = gamename.slice(-4,3);

console.log(anotherstr);

const newonestr = "    nitesh   "

console.log(newonestr);
console.log(newonestr.trim());

const url ="https://nitesh.com/nitesh%20yadav"

console.log(url.replace('%20','#'))

