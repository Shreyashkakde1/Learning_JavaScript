// const nums = [1,2,3,4,5,6,,7]

// let initialValue = 0
// const newNums = nums.reduce((acc,val)=>{
//     console.log(`acc: ${acc}`);
//     // console.log(`val: ${val}`);
//     return acc +val;
// },initialValue)

// console.log(newNums);

const shoppingCart = [
    {
        name: "Learn Full Stack Java Development",
        price: 25000
    },
    {
        name: "Learn Devops",
        price: 15000
    },
    {
        name: "Learn AWS",
        price: 13000
    }
]
const initialValue = 0;
let bill = shoppingCart.reduce(
    (acc,val)=>{
        return acc+val.price
    },initialValue
)
console.log(bill);