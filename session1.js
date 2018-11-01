// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
    // return str
    //     .split('')
    //     .reverse()
    //     .join('');

    //////////////////////

    // let newStr = '';
    // str.split('').forEach(char => {
    //     newStr = char + newStr;
    // });
    // return newStr;

    //////////////////////

    const reducer = (revStr, char) => char + revStr;
    return str.split('').reduce(reducer,'');

  }
  
  
  
  // CHALLENGE 2: VALIDATE A PALINDROME
  // Return true if palindrome and false if not
  // ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false
  
  function isPalindrome(str) {
//       const strArr = str.split('');
//       let ban = true;
//       for(let i = 0, j = strArr.length - 1; i < strArr.length; i++, j--){
//           if(strArr[i] !== strArr[j])
//             ban =  false;
// //console.log(i, j,strArr.length);
//       }
//       return ban;

    /////////////////////////////

    //return str === str.split('').reverse().join('');

    ////////////////////////////

    const reducer = (acc, curr) => curr + acc;
    return str === str.split('').reduce(reducer,'');

  }
  
  
  
  // CHALLENGE 3: REVERSE AN INTEGER
  // Return an integer in reverse
  // ex. reverseInt(521) === 125
  
  function reverseInt(int) {
      const revString = int.toString().split('').reverse().join('');
      return parseInt(revString) * Math.sign(int);
  }
  
  
  
  // CHALLENGE 4: CAPITALIZE LETTERS
  // Return a string with the first letter of every word capitalized
  // ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
  function capitalizeLetters(str) {

    // const reducer = (acc, curr, index) => index === 0 ? acc + curr.toUpperCase() : acc + curr;
    // return str.toLowerCase().split(' ').map(item => item.split('').reduce(reducer ,'')).join(' ');

    ////////////////////////////////

    // const mapWord = word => word.substring(0,1).toUpperCase() + word.substring(1);
    // return str.toLowerCase().split(' ').map(mapWord).join(' ');

    ///////////////////////////////

    // let result = Array();
    // const operation = (word, index) => result[index] = word.substring(0,1).toUpperCase() + word.substring(1);
    // str.toLowerCase().split(' ').forEach(operation);
    // return result.join(' ');

    //////////////////////////////

    const regex = /\b[a-z]/gi;
    return str.replace(regex, char => char.toUpperCase());
  }
  
  
  
  // CHALLENGE 5: MAX CHARACTER
  // Return the character that is most common in a string
  // ex. maxCharacter('javascript') == 'a'
  function maxCharacter(str) {

    // let index = 0;
    // let acc = 0;
    // for(let i = 0; i < str.length; i++){
    //     let tmp = 0;
    //     for(let j = i; j < str.length; j++){
    //         if(str[i] == str[j]){
    //             tmp++;
    //         }
    //     }
    //     if(tmp > acc){
    //         index = i;
    //         acc = tmp;
    //     }
    // }
    // return str[index];


    //////////////////////////////////

    let charMap = {};
    const charReducer = char => charMap[char] ? charMap[char]++ : charMap[char] = 1;
    str.split('').forEach(charReducer);
    console.log(charMap);

    let maxNumber = 0;
    let maxChar = '';
    for(let char in charMap){
        if(charMap[char] > maxNumber){
            maxNumber = charMap[char];
            maxChar = char;
        }
    }

    console.log(maxChar, maxNumber);
    return maxChar;
  }
  
  
  
  // CHALLENGE 6: FIZZBUZZ
  // Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
  function fizzBuzz() {
      for(let i = 1; i<100; i++){
          if(i % 3 === 0 && i % 5 === 0){
              console.log(i,"FizzBuzz");
          }else if(i % 3 === 0){
              console.log(i,"Fizz");
          }else if(i % 5 === 0){
              console.log(i,"Buzz");
          }
      }
  }
  
  
  
  // Call Function
  const output = fizzBuzz();
  console.log(output);

