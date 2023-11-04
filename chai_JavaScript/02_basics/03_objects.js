// Singaltone
// Object.create

// Object Literals

const jsUser = {
    name: "Shreyash",
    age: 21,
    location: "bangluru",
    email: "shreyashkakde20@gmail.com",
    isLoggedIn : false,
    lastLoggins : ["monday","saturday"]
}

// Accessing Arrays
console.log(jsUser.name); // Not a recomended way

// Recomended way
console.log(jsUser["name"]);
// Object.freeze(jsUser); // Now we can't edit the array

jsUser.greeting = function(){
    console.log("Hello JS user");
}

jsUser.greeting2 = function(){
    console.log(`Hello JS user ${this["name"]}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());
