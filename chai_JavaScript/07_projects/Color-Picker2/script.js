const buttons = document.querySelectorAll('.button')
const boyd = document.querySelector("body")
buttons.forEach(function(b){
    // console.log(b);
    b.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'red'){
            document.body.style.backgroundColor='red'
        }
        if(e.target.id === 'yellow'){
            document.body.style.backgroundColor='yellow'
        }
        if(e.target.id === 'white'){
            document.body.style.backgroundColor='white'
        }
        if(e.target.id === 'green'){
            document.body.style.backgroundColor='green'
        }
    })
    
})


// console.log(buttons);