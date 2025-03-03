function SayMyName(){
    console.log("N");
    console.log("I");
    console.log("K");
    console.log("H");
    console.log("I");
    console.log("L");
}

// SayMyName()


function addTwonums(num1,num2) {
    return num1+num2
}
const result= addTwonums(7,4)
// console.log("result ", result);


function LoginUser(username){
    if(username===undefined){
        console.log("please enter a username");
        return        
    }
    return `${username} just Loggedin`
}

console.log(LoginUser())

function calcCartPrice(...num1){
    return num1
}

console.log(calcCartPrice(200,400,500));

const user = {
    username: "nikhil",
    price: 199
}

function handleOcject(anyobject){
    console.log(`User name is ${anyobject.username} and price is ${anyobject.price}`);
    
}

handleOcject(user);

const myNewArr = [300, 500, 700, 900]

function returnSecVal(getArr) {
    return getArr[1]
}

console.log(returnSecVal(myNewArr));
