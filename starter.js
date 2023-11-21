console.log ("hello from starter")
let myname = "lucy"
console.log(myname);
console.log(typeof myname);

let muppet = false;
console.log(muppet);
console.log(typeof muppet);

let demo;
console.log(demo);
console.log(typeof demo);

let plum = null;
console.log(plum);
console.log(typeof plum);

const cottagecheese = 0.7;
console.log(cottagecheese);
console.log(typeof cottagecheese);

let numb = 4;
console.log(4 + 4);
console.log(4 - 4);
console.log(4 * 4);
console.log(4 / 4);
console.log(4 ** 4);
console.log(10 % 4);

let numm=12;
console.log(numm == 24);
console.log('1' == 1);

console.log('ur' + ' mum');

// Predicat what each line will print, then uncomment it and check you were right
let x = 1;
// Aritmetic Operators
// 10
console.log(5 + 5);
// 50
console.log(5 * 10);
// 1
console.log(10 % 3);
// 20
console.log(5 + 10 / 2 * 5 - 10);
// 30
console.log((6 + 10) / 2 * 5 - 10);

// Assignment Operators
// 2
console.log(x = x + 1);
// 3
console.log(x+= 1);
// Try and figure out the difference
// 3
console.log(x++);
// 5
 console.log(++x);

// Relational Operators
// true
console.log(5 > 3);
// false
console.log(3 != 3);
// false
console.log(!5>3);

// Mismatched Types
// 55
console.log(5 + "5");
// 6
console.log(5 + true);
// 25
console.log(5 * "5");
// true
console.log(1 == true);
//false
 console.log(1 === true);
Comment

const arr = ["lucy","beth", "jayne", "tony"];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

let age = 10
console.log(age);

if (age <= 17) {
                console.log("underage");

 } else if (age <= 65)  {
                console.log("insurable");
            

} else {
    console.log("out of range");
}


let crunch = 1;
for (let crunch=1; crunch <=100; crunch++) {
    console.log(crunch);
    if (crunch % 3 ==0 && crunch %5 ==0 && crunch%2==0) {
        console.log("fizz buzz wham");
        }
    
        else if (crunch % 3 == 0 && crunch%2==0) {
            console.log("fizz wham");
        }
        
        else if (crunch % 5 == 0 && crunch%2==0) {
            console.log("buzz wham");
        }
       
        else if (crunch % 2 == 0) {
            console.log("wham");
        }
    
        else if (crunch % 3 == 0) {
        console.log("fizz");
        }
    
        else if (crunch % 5 == 0)  {
        console.log("buzz");
        } 
    
        else {
        console.log("george michael");
        }
}

let munch = 17
if (munch % 3 ==0 && munch %5 ==0 && munch%2==0) {
    console.log("fizz buzz wham");
    }

    else if (munch % 3 == 0 && munch%2==0) {
        console.log("fizz wham");
    }
    
    else if (munch % 5 == 0 && munch%2==0) {
        console.log("buzz wham");
    }
   
    else if (munch % 2 == 0) {
        console.log("wham");
    }

    else if (munch % 3 == 0) {
    console.log("fizz");
    }

    else if (munch % 5 == 0)  {
    console.log("buzz");
    } 

    else {
    console.log("george michael");
    }


 

 
 for (let k=1; k<=10; k++) {
    console.log("hello");
 }
 