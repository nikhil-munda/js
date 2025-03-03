//singleton
//Object.create
// object literals

const JsUser= {
    name: "nikhil",
    age: 19,
    email: "ublanari@gmail.com",
    location: "jaipur",
    isLoggedIn: false,
    lastLoggedIn: ["monday", "saturday"]
}

console.log(JsUser.name);
console.log(JsUser.email);
console.log(JsUser["email"]);

