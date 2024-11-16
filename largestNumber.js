// Problem: Find the Largest Number in an Array
// Write a function called findLargest that takes an array of numbers as input and returns the largest number in the array.

// Requirements:
// The array will contain at least one number.
// Handle both positive and negative numbers.
// Do not use built-in methods like Math.max() for the solution (try solving it with a loop).

// Example Input and Output:
// Input: [1, 2, 3, 4, 5] → Output: 5
// Input: [-10, -3, -20, -4] → Output: -3
// Input: [7] → Output: 7

// Hints:
// Initialize a variable to store the largest number.
// Use a loop to compare each number in the array with the current largest number.
   
function findLargest(arr){
    let largest= arr[0]
    for(let i=1;i<=arr.length;i++){
        
        if(arr[i]>largest){
            largest=arr[i]
        }
    }
    return largest
}

// using for of 
// function findLargest(arr) {
//     let largest=arr[0];
//     for(num of arr){
//         console.log(num);
//         if(num>largest){
//            largest=num;
//         }
        
//     }
// return largest;
// }

const numbers = [1, 2, 3, 4, 5];
const largestNumber = findLargest(numbers);
console.log(largestNumber);

