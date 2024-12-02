/*
Javascript shortform questions and tidbits from coderpad and my imagination

12/1/2024
*/



// Q1
let x = 10;

if (x = 5) {
  console.log(x);
}

/* 
Q: What will be printed to the console if you run this code?

5, x is set to 5 in the if statement, which is accepted as a boolean True and 
printed after

Q: What is the difference between var and let in JavaScript?

var can be accessed throughout an entire function while let is only scoped 
within a block. const defines variables that cannot be changed 

*/


// Q2
function double(arr) {
    arr.forEach(function(val) {
      val * 2
    });
    return arr

    // arr.forEach((item, index) => { 
    //     arr[index] = item * 2;
    // })
    // return arr;
  }
console.log(double([1, 2, 3]));

/*
Q: What will be printed to the console if you run this code?

[1, 2, 3], the line that executes val * 2 does not reassign the values 
*/




// map() refresher

// from w3schools
function twice(num) {
    return num * 2
}
const numbers = [4, 9, 16, 25];
// const newArr = numbers.map(sqrt);
const newArr = numbers.map(twice);
console.log(newArr);


// Q3
let arr = [1, 2, 3];
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i])
  setTimeout(() => {
    console.log(arr[i]);
  }, 1000);
}

/* Q: output?

var means i is not in scope!

*/


// Q4

let myArray = [1, 2, 3, 4, 5];
let result = myArray.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
});
console.log(result);

/*
Q: output?

equivalent to sum(myArray) --> 15 

*/

// Q5
console.log("Q5:")

let a = [1, 2, 3, 4, 5];
a = a.map(item => item<3);
console.log(a)

a = [1, 2, 3, 4, 5];
a = a.some(item => item< 3);
console.log(a)

/*
Q: output?

[1, 2]
[true, true, false, false, false]
.some() from w3: will return the boolean value for each element passed
through a function parameter
*/