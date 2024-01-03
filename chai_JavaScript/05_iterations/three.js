// for of

// ["","","",""]
// [{},{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const str = "hello world"
for (const s of str) {
    // console.log(s);
}

// Map

const map = new Map()
map.set("IN","INDIA");
map.set("IN","INDIA");

map.set("USA","UNITED STATES OF AMERICA")
map.set("FR","FRANCE")

console.log(map);

// How to print a map using loop

for (const [key,value] of map) {
    // console.log(key,value);
}

const gameObj = {
    'game1' : 'NFS',
    'game2' : 'COD',
    'game3' : 'Spider Man'
}

for (const [key,value] of gameObj) {
    console.log(key,value);
}