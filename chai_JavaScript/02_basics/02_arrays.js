let marvelHeros = ["thor","ironman","spiderman"]
let dcHeros = ["superman","flash","batman"]

let newHeros = marvelHeros.push(dcHeros); // it will add marvel array at the 3rd index (not merging the array)

// we can merge array with concat methdo
let allHeros = marvelHeros.concat(dcHeros);
// console.log(allHeros);

// the below is the most used way to merge 2 or more arrays together
let allHeros2 = [...marvelHeros,...dcHeros] // Advantage: we can add more then 2 arrays also
// console.log(allHeros2);

const another_array = [1,2,3,4,[5,6,7],8,9,[10,11],12]

let new_another_array = another_array.flat(Infinity);
// console.log("Flat array: ",new_another_array);
// console.log("Orignal Array: ",another_array);

console.log(Array.isArray("Shreyash"));
console.log(Array.from("Shreyash"));