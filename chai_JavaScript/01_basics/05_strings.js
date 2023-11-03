let name = "shreyash"
let repoCount = 50;

// console.log(name+repoCount+" values"); //Not Recomended in todays date

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

let gameName = new String('ShreyashGame')

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('y'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-3,4);
console.log(anotherString);

const newStringOne = "       shreyash      "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "shreyash.com/shreyash%20kakde/"
console.log(url.replace('%20',"-"));