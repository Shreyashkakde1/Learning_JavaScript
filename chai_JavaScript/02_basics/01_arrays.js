// arrays

let myArr = [0,1,2,3,4,5]
const myHero = ["shaktiman","naagrak","doga"]

const newArr = new Array(1,2,3,4,5);

// Arrays Method
// newArr.push(7) 
// newArr.push(8) 
// console.log(newArr); 
newArr.pop()
// console.log(newArr); 

newArr.unshift(1000) // Add element at the start of the array
newArr.shift() // removes the last element form the array

// console.log(newArr.includes(5));

let strArray = newArr.join()
// console.log(strArray+" DataType: "+typeof strArray);

// slice and splise

console.log("A ",newArr);

let myn1 = newArr.slice(1,4) // return new array form (1-3) index

console.log("B :",myn1);

let myn2 = newArr.splice(1,4);
console.log("C: ",myn2);
console.log("Original: ",newArr);
