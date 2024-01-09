// const promiseOne = new Promise(function (resolve, reject) {
//     // Do an async tasks
//     // DB Calls
//     // CryptoGraphy call
//     // network calls

//     setTimeout(() => {
//         console.log("Async Task is complete");
//         resolve()
//     }, 1000);
// })

// promiseOne.then(function () {
//     console.log("Promise consume");
// })

// new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log("Async Task 2");
//         resolve()
//     }, 2000);
// }).then(function () {
//     console.log("Async 2 Resolved");
// })

// const promiseThree = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve({ usename: "Chai", email: "chai@example.com" })
//     }, 3000);
// })

// promiseThree.then(function (user) {
//     console.log(user);
// })


// const promiseFour = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         let error = false;
//         if (!error) {
//             resolve({ username: "Shreyash", password: "linux" })
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 5000);
// })

// promiseFour.then(function (user) {
//     console.log(user);
//     return user.username
// }).then(function (usernmae) {
//     console.log(usernmae);
// }).catch(function (error) {
//     console.log(error);
// }).finally(() => {
//     console.log("The promise of either resolved or rejected");
// })


// const promiseFive = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         let error = true;
//         if (!error) {
//             resolve({ username: "javaScript", password: "javaScriptPassword" })
//         } else {
//             reject('ERROR: JS went wrong')
//         }
//     }, 5000);
// })

// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive()

// // async function getAllUsers() {
// //     try {
// //         const response = await fetch('https://jsonplaceholder.typicode.com/users')
// //         const data = await response.json()
// //         console.log(data);
// //     } catch (error) {
// //         console.log(error);
// //     }
// // }

// // getAllUsers()

let usersData;
fetch('https://randomuser.me/api/')
.then(function(response){
    return response.json()
}).then(function(data){
    
}).catch(function(error){
    console.log("E: ",error);
})

