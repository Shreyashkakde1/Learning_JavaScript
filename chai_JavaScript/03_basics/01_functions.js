
function sayMyName(){
    console.log("Shreyash");
}

sayMyName // Fuction Reference
sayMyName() // Function Execution

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200,400,23343,456))

const user = {
    name : "shreyash",
    email : "shreyashkakde20@gmail.com"
}

function handleObject(anyObj){
    console.log(`My name is ${anyObj.name} and my Email is :${anyObj.email}`);
}

// handleObject(user)
handleObject(
    {
        name : "someone",
        email : "someone@gmail.com"
    }
)