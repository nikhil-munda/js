const tinderuser= new Object() // singleton object
const tinderuser2 = {} // non singleton object

tinderuser.id="18cherie"
tinderuser.name="ojaswee"
tinderuser.isLoggedIn=false

// console.log(tinderuser);
// console.log(tinderuser2);

const regularuser = {
    email: "kcchch@gmail.com",
    fullname: {
        userfullname:{
            firstname: "nikhil",
            secondname: "munda"
        }
    }
}

const obj1= {1: "a", 2: "b"}
const obj2= {3: "a", 4: "b"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1, ...obj1.obj2}
// console.log(obj3);


//array of objects
const users= [
    {
        id:153,
        name: "ajaaha"
    },
    {
        id:190,
        name: "ioahugk"
    }
]

users[1].name
console.log(tinderuser);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
