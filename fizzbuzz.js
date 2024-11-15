// Problem: FizzBuzz
// Write a function called fizzBuzz that takes a number as input and logs numbers from 1 to that number to the console with the following rules:

// For numbers divisible by 3, print "Fizz".
// For numbers divisible by 5, print "Buzz".
// For numbers divisible by both 3 and 5, print "FizzBuzz".
// For all other numbers, print the number itself.

// Example Output
// If the input is 15, the output should be:

// 1;
// 2;
// Fizz;
// 4;
// Buzz;
// Fizz;
// 7;
// 8;
// Fizz;
// Buzz;
// 11;
// Fizz;
// 13;
// 14;
// FizzBuzz;

function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {

      if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
      } else if (i % 3 === 0) {
        console.log("Fizz");
      } else if (i % 5 === 0) {
        console.log("FIzz Buzz");
      }
      else{
        console.log(i);
      }
  }

}
fizzBuzz(15);



// Chatgpt Solutions

// function fizzBuzz(n) {
//     for (let i = 1; i <= n; i++) {
//         console.log(
//             (i % 3 === 0 && i % 5 === 0) ? "FizzBuzz" :
//             (i % 3 === 0) ? "Fizz" :
//             (i % 5 === 0) ? "Buzz" :
//             i
//         );
//     }
// }

//  Test the function
// fizzBuzz(15);

