/***********************************************************************
Write a function named: interrupter(interruptingWord). The interrupter function will
accept a word and return a function. When the function returned by interrupter
is invoked with a string the string will be returned with "interruptions".

Look below to see how this function is invoked:
let rudePerson = interrupter("what"); // => returns a function
console.log(rudePerson("how are you")); // prints "how what are what you"
console.log(rudePerson("I like pie")); // prints "I what like what pie"


Invoking the interrupter function again:
let rudePerson2 = interrupter("yo"); // => returns a function
console.log(rudePerson2("I love dogs")); // prints "I yo love yo dogs"


/***********************************************************************/

function interrupter(interruptingWord){   // 'yo'


  return function(sentence){ // "I love soccer"
    let words = sentence.split(' ');
    let newString = "";

    for (let i = 0; i < words.length; i++){
      let word = words[i];

      if (i === words.length-1){
        newString += word;
      } else {
        newString += word + " " + interruptingWord + " ";
      }
    }
    return newString;
  };
}





/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = interrupter;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
