const tinderUser = new Object()
tinderUser.name = "sammy"
tinderUser.age = 23,
tinderUser.email = "sammy@gmail.com",
tinderUser.isLoggedIn = false
// console.log(tinderUser);

let regularUser = {
    email : "someOne@gmail.com",
    userFullName: {
        fullname :{
            fname : "Shreyash",
            lname : "Kakde"
        }
    }
}

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

// const obj3 = Object.assign({},obj1,obj2);
const obj3 = {...obj1,...obj2}
// console.log(obj3);


const user = [
    {
        user_id : 1,
        email : "sk@gmail.com"
    },
    {
        user_id : 2,
        email : "sk@gmail.com"
    },
    {
        user_id : 3,
        email : "sk@gmail.com"
    }
]

// console.log(user[0].email);

let obj_keys = Object.keys(tinderUser);
// console.log(obj_keys);
let obj_values = Object.values(tinderUser);
// console.log(obj_values);
let obj_entries = Object.entries(tinderUser);
// console.log(obj_entries);


const course = {
    courseName : "JS in Hindi",
    price : 999,
    courseInstructor: "Hitesh Chaudhary"
}

// course.courseInstructor

const {courseInstructor: teacher} = course
console.log(teacher);


// {
//     "login": "Shreyashkakde1",
//     "id": 69007245,
//     "node_id": "MDQ6VXNlcjY5MDA3MjQ1",
//     "avatar_url": "https://avatars.githubusercontent.com/u/69007245?v=4",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/Shreyashkakde1",
//     "html_url": "https://github.com/Shreyashkakde1",
//     "followers_url": "https://api.github.com/users/Shreyashkakde1/followers",
//     "following_url": "https://api.github.com/users/Shreyashkakde1/following{/other_user}",
//     "gists_url": "https://api.github.com/users/Shreyashkakde1/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/Shreyashkakde1/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/Shreyashkakde1/subscriptions",
//     "organizations_url": "https://api.github.com/users/Shreyashkakde1/orgs",
//     "repos_url": "https://api.github.com/users/Shreyashkakde1/repos",
//     "events_url": "https://api.github.com/users/Shreyashkakde1/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/Shreyashkakde1/received_events",
//     "type": "User",
//     "site_admin": false,
//     "name": "Shreyash Kakde",
//     "company": null,
//     "blog": "",
//     "location": "India",
//     "email": null,
//     "hireable": null,
//     "bio": "Working on building great logic building skills and exploring new things",
//     "twitter_username": "ShreyashKakde",
//     "public_repos": 18,
//     "public_gists": 0,
//     "followers": 1,
//     "following": 3,
//     "created_at": "2020-07-30T16:00:07Z",
//     "updated_at": "2023-11-04T19:23:29Z"
//   }