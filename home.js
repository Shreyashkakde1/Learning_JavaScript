// function fun(){
//     var name,result;
//     name = prompt("Enter your name");
//     result = "Hello "+name;
//     // alert("Hello "+name);
//     console.log(result);
// }

// function sumNumbers(a,b){
//     var result = a+b;
//     console.log(result);
// }
// sumNumbers(10,30);

// var name = prompt("Enter your name");
// function greeting(yourname){
//     var result = "Hello "+yourname;
//     console.log(result);
// } 
// greeting(name);

// var num =0;

// while(num<5){
//     num++;
//     console.log(num);
// }

// for(let num1 =0;num1<=100;num1++){
//     console.log(num1);
// }


// --------------------------------------------------------------------------------------------------

/*
 

        // Data Types in  JavaScript
        
        let yourage = 19; // Number
        let yourname = "Shreysah" // string
        let name = {first: "shreyash", last: "Kakde"}; // object
        let truth = false; // boolean
        let groceries = ['apple','banana','oranges'];
        let random; // undefined
        let nothing = null; // value null 



        // Strings in JavaScript (common method)
        

        let Fruit = "banana"
        let fruts = ['banana','orange','apple','mango','berries'];
        let moreFruit = "banana\napple\norianges";   // \n only workes in console
        console.log(moreFruit);

        console.log(moreFruit.length);        // Returnes the length of the string
        console.log(moreFruit.indexOf('p'));  // Returnes the index of the element passed in parameter (if present)
        console.log(Fruit.slice(2,6));        // Prients the string from the index(2) to index(6)
        console.log(Fruit.replace('ban','123')) // Replace where ever you find 'ban' with '123'    
        console.log(Fruit.toUpperCase());  // Prints the Fruit string to ALL UPPER CASE
        console.log(Fruit.toLowerCase());  // Prints to Fruit string to all lower case 
        console.log(Fruit.charAt(2));       // Returns character at index(2)
        console.log(Fruit[2]);              // Prints the char at index(2)
        // console.log(fruts.split(","));      // 
        // console.log(fruts.split(""));

         */

// --------------------------------------------------------------------------------------------------

/*
        // Arrays in JavaScript

        let fal = ['apple','oranges','banana','pineapple'];
                // Another way to create an array in Javascript
        fal = new Array('apple','oranges','banana','pineapple');

        // alert(fal[1]);
        console.log(fal[1]);

        for(let i=0;i<fal.length;i++){
                console.log(fal[i]);
        }


                // Arrays common methods
                console.log('To string:',fruts.toString()); // Converts the whole array into an String
                console.log(fal.join('-'))      // replaces the default ',' to the string we specified
                console.log((fal,fal.pop(),fal));  // Deletes last item
                console.log(fal.push('blackberries'),fal); // Appends to the last
                fal[fal.length] = "new fal"; // Adding new element at the last index
                console.log(fal);
                fal.unshift('kiwi'); // Adds the element on the 0th index
                console.log(fal);

                // Create 2 more arrays
                let vegitables = ['asparagus','tomato','broccoli'];
                let allGroceries = fruts.concat(vegitables);   // merging(concatainting) two arrays
                console.log(allGroceries);

                console.log(allGroceries.slice(1,4));   // Printing all element from 0th index to 4th index 
                console.log(allGroceries.rever)

                let someNumbers =[41,54,1,132541,45,121,5,132,416,521,54,1321,65,1,2,13,251,65,1]
                console.log(someNumbers);
                someNumbers.sort();
                console.log(someNumbers);
                console.log(allGroceries.sort());
                
                console.log(someNumbers.sort(function(a,b) {return a-b}));      // Sorts the array in assending order
                console.log(someNumbers.sort(function (a,b) {return b-a}));     // Sorts the arrys in dessening order

                // Add elements to the array from 1 to 10

                let someArray = new Array();
                for(let i=1;i<=10;i++){
                        someArray.push(i);
                }
                console.log(someArray);

*/

// --------------------------------------------------------------------------------------------------





// --------------------------------------------------------------------------------------------------

// Objects in JavaScript

/*
        let student = {
                first: 'Shreyash',
                second: 'Kakde',
                age: 19,
                hight: 5.9,
                studentInfo: function(){
                        return this.first+'\n'+this.second;
                }        
        };
        console.log(student.first,student.second,student.age,student.hight);
        

        console.log(student.first);
        student.age++;
        console.log(student.age);
        console.log(student.studentInfo());
        */


// --------------------------------------------------------------------------------------------------





// --------------------------------------------------------------------------------------------------


// If else Conditionals and Switch Statement


// If else Statement


        var days;
        days = 2;
        if(days<5){
                document.write("WeekDay!!");
        }else if( (days>5) && (days<=7)){
                document.write("WeekEnd !!!");
        } else{
                document.write("Not comes under week")
        }



// Switch case Statement

/*
var day;
day = 4;
switch (day) {
        case 1:
                document.write("Monday");
                break;
        case 2:
                document.write("Tuesday");
                break;
        case 3:
                document.write("Wednesday");
                break;
        case 4:
                document.write("Thrusday"); 
                break;
        case 5:
                document.write("Firday");
                break;
        case 6:
                document.write("Saturday");
                break;
        case 7:
                document.write("Sunday");
                break;
}

*/
