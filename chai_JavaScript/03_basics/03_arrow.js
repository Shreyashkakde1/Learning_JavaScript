const user = {
    usrename :"shreyash",
    price : 999,
    welcome: function(){
        console.log(`Hello ${this.usrename}`);
    }
}

// function chai(){
//     console.log(this);
// }
// chai();

const  chai = ()=>{
    console.log(this);
} 

chai()