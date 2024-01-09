const jokeContainer = document.querySelector('#joke')
const btn = document.querySelector('.btn')
const apiUrl = "https://v2.jokeapi.dev/joke/Programming,Dark,Spooky?type=single"

function getJock(){
    fetch(apiUrl)
    .then((data)=>{
        return data.json()
    }).then((item)=>{
        jokeContainer.textContent = `${item.joke}`
    })
}
getJock()

setInterval(()=>{
    getJock()
},10000)

btn.addEventListener('click',getJock)
