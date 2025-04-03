// singleton


// object literals


const mysym = Symbol("key1")


const Jsuser ={
    name: "nitesh",
    "full name" : "nitesh yadav",
    [mysym] : "mykey1",
    age : 18,
    location:"gaur",
    email:"nitesh@gmail.com",
    isloggedin : false,
    lastlogindays : ["monday","saturday"]
}

console.log(Jsuser.email);
console.log(Jsuser["email"]);
console.log(Jsuser["full name"]);
console.log(Jsuser[mysym]);

Jsuser.email = "yadav@gmail.com";