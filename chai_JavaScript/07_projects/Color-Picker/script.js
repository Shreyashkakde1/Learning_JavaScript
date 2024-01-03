const redBox = document.getElementById('box-1')
const yellowBox = document.getElementById('box-2')
const whiteBox = document.getElementById('box-3')
const blueBox = document.getElementById('box-4')

redBox.addEventListener('click',function(){
    document.body.style.backgroundColor = "red"
})

yellowBox.addEventListener('click',function(){
    document.body.style.backgroundColor = "yellow"
})

whiteBox.addEventListener('click',function(){
    document.body.style.backgroundColor = "white"
})

blueBox.addEventListener('click',function(){
    document.body.style.backgroundColor = "blue"
})
