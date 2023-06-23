//////////////////PROBLEM 1////////////////////
/* Create a copy of the faveColors array called 'colorCopy' using the slice method. */

const faveColors = ['red', 'green', 'black']

//CODE HERE

//////////////////PROBLEM 2////////////////////
/* Add a fourth color to the end of the 'colorCopy' array using the push method. */
faveColors.push('blue') //the push method adds to the end of the array
//CODE HERE

//////////////////PROBLEM 3////////////////////
/*
  Using an array method, create a new array called 'middleNums' from the 
  numbers array that will capture only the middle numbers (2, 3, 4).
*/

const numbers = [1, 2, 3, 4, 5]

//CODE HERE
let middleNums=numbers.slice(1,4) //the slice method starts at index 1, then takes everything until index 4
//console.log(middleNums)
//////////////////PROBLEM 4////////////////////
/* 
  Create an empty array called 'answers'.
  Using a for loop, loop over the array called 'bigOrSmallArray', and check to see if the 
  number in the array is GREATER than 100. 
  If it is, push 'big' as a string to the answers array. 
  If the number is LESS than or EQUAL to 100, push 'small' as a string 
  to the answers array. 
*/

const bigOrSmallArray = [1, 99, 42, 69, 102, -10, 159, 352]

// CODE HERE
let answers=[]
for (let i =0;i<bigOrSmallArray.length;i++){
  if(bigOrSmallArray[i]<=100){
    answers.push('small')
  } else {
    answers.push('big')
  }
}
//this for loop starts at index 0 then loops through the bigorsmallarray and compares each data point to whether or not it's greater than 100. if it isn't, it pushes small to the answers array, otherwise it pushes big (greater than 100)
//console.log(answers)