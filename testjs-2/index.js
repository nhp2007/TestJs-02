// Question 1:
// Write a JavaScript function that takes an array of numbers as input and returns a new array with each number squared.
// Input: [1, 2, 3, 4, 5]
// Ans

var array = [1, 2, 3, 4, 5, 6];
var array1 = [];

function squre(array) {
  for (var i = 0; i < array.length; i++) {
    var squre1 = array[i] * array[i];
    array1.push(squre1);
  }
  return array1;
}

var array2 = squre(array);
console.log(array2);

// Question 3:
// Write a JavaScript function that takes two arrays as input and returns a new array that contains only the elements that are present in both arrays (intersection).
// Input: [1, 2, 3, 4], [3, 4, 5, 6]
// Ans

var array1 = [1, 2, 3, 4];

var array2 = [3, 4, 5, 6];

var array3 = [];

function botharray(array1, array2) {
  for (var i = 0; i < array1.length; i++) {
    for (var j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        array3.push(array1[i]);
      }
    }
  }
  return array3;
}

var result = botharray(array1, array2);

console.log(result);

// Question 5:
// Write a JavaScript function that takes a number as input and returns an array of its digits.
// Input: 12345
// ans

var number = 12345;
var Digits = [];
var digit;

function numtodig(number) {
  var numbertoString = number.toString();
  for (var i = 0; i < numbertoString.length; i++) {
    digit = parseInt(numbertoString[i]);
    Digits.push(digit);
  }
  return Digits;
}

console.log(numtodig(number));

// Question 9:
// Write a JavaScript function that takes an array of numbers and returns the second smallest number in the array.
// Input: [10, 2, 14, 5, 7]
// ans

const numbers = [10, 2, 14, 5, 7];

function secondSmallestNumber(array) {
  array.sort((a, b) => a - b);

  return array[1];
}

console.log(secondSmallestNumber(numbers));

// Question 6:
// Create a JavaScript function that takes a string as input and returns a new string with each character duplicated (e.g., "hello" becomes "hheelllloo").
// Input: "hello"
// ans

var word = "hello";

function duplicateAlphabet(input) {
  let result = "";
  for (let i = 0; i < input.length; i++) {
    result += word[i] + word[i];
  }
  return result;
}

console.log(duplicateAlphabet(word));


// Question 8:
// Create a JavaScript function that takes a sentence as input and returns the number of words in the sentence.
// Input: "This is a sample sentence."
// ans
// var sentence = "This is a sample sentence."

function countwords(sentence) {
  var count = 0;
  for (var i = 0; i <sentence.length; i++) {
    if (sentence[i] === " ") 
      count++;
  }
  count++;
  console.log(count);
}
countwords("This is a sample sentence");



// Question 4:
// Create a JavaScript function that takes an object and a key as input, and returns the value associated with that key in the object. If the key does not exist, return a default value.
// Input: {name: "Alice", age: 25}, "name"
// ans

var info = {name:"Alice",age:25}
function fetchvalue(){
  console.log(info.name);

}
fetchvalue(info);


