let assert = require('assert')

/*
  Given the variable 'statement' below, write a function that reverses
  the letters in each word, but leaves the words in the same order
*/

let statement = 'Penn Mutual is a company that sells life insurance'

function reverseLetters(str) {

// PLACE YOUR CODE ABOVE

  let arrayWords = statement.split(" ");
  var result= "";
  let count=0;
  arrayWords.forEach(str=>{
               count++;	  
			   str = str.split("");
			   str = str.reverse(); 
			   str = str.join("");
			   if( count < arrayWords.length)
					result +=str + ' ';
				else
				    result +=str;
  })
  
  return result;
  // PLACE YOUR CODE BELOW
}

let reversedWords = reverseLetters(statement)

assert.equal(reversedWords, 'nneP lautuM si a ynapmoc taht slles efil ecnarusni', 'Strings are not equal') || console.log('Success')

console.log(reversedWords)

/*
  Your console output should look like the following
  when run with "node 8_reverse_words.js":
Success
nneP lautuM si a ynapmoc taht slles efil ecnarusni
*/