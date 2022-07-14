// fruit = prompt("What is your fav fruit");
// alert('Your fav fruit is '+fruit);

// var foodPrice = Number(prompt('How Much was the food'));
// var tipAmount = Number(prompt('Tip% ?'));
// var tip = tipAmount/100;
// console.log(tip);
// console.log('This is your tip amount'+tip*foodPrice)
// var totalAmount = Number((tip*foodPrice)) + Number (foodPrice);
// console.log('Total Ammount '+totalAmount);
// console.log('This is total ammout '+tip+foodPrice);
// alert('tip is '+tip*foodPrice);
// alert('Total Amount is '+tip+foodPrice);


/*  Data Types in JavaScript  

        Numbers : 1,2,3,4,5,6
        string : 'hello', "What is up"
        arrays : []
        objects: {}
        boolean: ture / false
*/

/*
    Math Opration

        Multiply *
        Divide / 
        Exponents **
        Modulo (Remainder) %
        Add +
        Subtract -
*/

/*  Math Methods

        Floor - Rounds down
            eg: Math.florr(20.33)
                output: 20
        
        Celling - Rounds Up
            eg: Math.ceil(20.33);
                output: 21


        Random (Math.random)
            - Returns a random number every single time

            eg 1 : Math.random()   (Returns a random number between 0 - 1)
                output: 0.8103024485057415


            eg 2 : Math.random() * 4  (Returns a random number between 0 - 4)
                output: 2.8098712891424755


            num = Math.random()*4;
            console.log(num);
            console.log("Floor : "+Math.floor(num));
            console.log("Celling : "+Math.ceil(num));
*/


/*
            There are 3 Types of variables

            1. var (var greeting = 'Hello')
                - The value can be changed (Not Recommended)

            2. let (let greeting = 'hello')
                - The value can be changed

            3. const (const greeting ='hello')
                - The value cannot be changed 
*/          

/*
    Conditional Statements

    let wheather = 'sunny';

    if(wheather=='sunny'){
        console.log('Where your sunglasses 😎');
    }else {
        console.log('Grab your umbrella ☔');
        
    }

*/



/*
    // Arrays
    
    groceries = ['banana','apple','orange','mango'];

    // Arrsys Methos (push, slice, indexof, length)
    groceries.push("watermellon");

    colsole.log(groceries.slice(0,2));

    console.log(groceries);
*/ 


// Objects {}

    const person ={
        name : "Leonardo",
        shirts : 'White'
    }
    console.log(person);
    console.log(person.name);

    // Access object : dot notation vs. bracket notation

        // Dot Notation
        console.log(person.name);
        console.log(person.shirts);

        // Bracket Notation
        console.log(person['name']);
        console.log(person['shirts']);

    // Assigh object 
    person.phone = '1-222-3333-4444';
    console.log(person);

    const introducer = (name,shirts)=>{
        const person = {
            name : name,
            shirts : shirts
        }

        const intro = `Hi my name is ${person.name} and the color of my shirt is ${person.shirts}`;

        return intro;
    }

    console.log(introducer("Shreyash","Gray"));
    console.log(introducer('Sujal','Kakde'));