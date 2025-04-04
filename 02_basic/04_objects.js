
// const tinder = new Object();

const tinder={}

tinder.id = "123abc";
tinder.name = "yadav";
tinder.isloggedin = false;

//console.log(tinder);

const regular ={
    email : "some@gmail.com",
    fullname:{
        userfullname:{
            firstname :"nitesh",
            lastname : "yadav"
        }
    }
}
//console.log(regular.fullname.userfullname.firstname);

const obj = {1:"a", 2: "b"};
const obj1 = {3:"c", 4: "d"};

//const obj2 = {obj,obj1};
//const obj2  = Object.assign({},obj,obj1)

const obj2 = {...obj,...obj1};
//console.log(obj2);

const users =[
    {
        id :1,
        email:"nitesh@gmail.com"
    },
    {
        id :1,
        email:"nitesh@gmail.com"
    } ,
    {
        id :1,
        email:"nitesh@gmail.com"
    },
    {
        id :1,
        email:"nitesh@gmail.com"
    }
]

users[1].email

//console.log(tinder);

// console.log(Object.keys(tinder));
// console.log(Object.values(tinder));
// console.log(Object.entries(tinder));

// console.log(tinder.hasOwnProperty('isLoggedin'));

const course ={
    coursename : " js use for practise",
    price:"999",
    courseInstructor : "nitesh"
}

//course.couserInstructor

const {courseInstructor : ci}= course;
//console.log(cou)
console.log(ci);


const navbar = ({company}) =>{

};
navbar((company = "nitesh"))