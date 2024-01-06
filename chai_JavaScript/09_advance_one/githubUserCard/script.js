const profilePicture = document.querySelector('.avtar')
const userInfo = document.querySelector('.user-info')
const followers = document.querySelector('.followers-count')
const following = document.querySelector('.following-count')
const joinedDate = document.querySelector('.join-date')
const lastUpdate = document.querySelector('.last-updated')
// const location = document.querySelector('.location')
const publicRepository = document.querySelector('.public-repository')
const bio = document.querySelector('.bio')


const requestUrl = 'https://api.github.com/users/Shreyashkakde1'
const xhr = new XMLHttpRequest()
let data = {}
xhr.open('GET',requestUrl)
xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
        let data = JSON.parse(this.responseText)
        console.log(typeof data);
        console.log(data);
    }
}
xhr.send()

followers.innerContent = data.followers;