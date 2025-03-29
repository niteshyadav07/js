//

let mydate = new Date();
console.log(mydate.toString());
console.log((mydate.toDateString()));
console.log(mydate.toLocaleString());
console.log(typeof mydate);


//et myCreateate = new Date(2023,0,23,5,3);

let myCreateate = new Date("14-01-2023");

//console.log(myCreateate.toLocaleString())

let mytimestamp = Date.now();

// console.log(mytimestamp);
// console.log(myCreateate.getTime());

console.log(Math.floor(Date.now()/1000));

let newDate = new Date ();

console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay())

//'${newDate.getDay()}' and the time

newDate.toLocaleDateString('default',{
    weekday: "long",
    
})
