// Problem: Palindrome Checker

// Write a function called isPalindrome that checks if a given string is a palindrome. A palindrome is a word, phrase, number, or other sequence of characters that reads the same backward as forward (ignoring spaces, capitalization, and punctuation).

// Requirements:
// Ignore case, spaces, and non-alphanumeric characters.
// Return true if the input is a palindrome, and false otherwise.

// Example Input and Output:
// Input: "racecar" → Output: true
// Input: "hello" → Output: false
// Input: "A man, a plan, a canal: Panama" → Output: true

// Hints:
// Use regular expressions to remove non-alphanumeric characters.
// Convert the string to lowercase.
// Reverse the string and compare it with the original (processed) string.


function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    // Reverse the cleaned string
    const reversedStr = cleanStr.split("").reverse().join("");

    // Check if the cleaned string is equal to its reverse
    return cleanStr === reversedStr;
}

// Test the function
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
