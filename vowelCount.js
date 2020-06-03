// Input: 'string'
// Ouput: total number of vowels within the string
// Constraints: Do not want consanent numbers

// create a string variable consisting of vowels
// iterate through string
// check the indeces of the string to see if they are a vowel of consenant
// add to the vowel count
// return the vowel count


var vowelsList = 'aeiouAEIOU';

function getCount(str) {
  var vowelsCount = 0;
  for (var i = 0; i < str.length; i++){
      if(vowelsList.indexOf(str[i]) !== -1){
          vowelsCount += 1
      }
  }

  return vowelsCount;
}

console.log(getCount('this wedding is horseshit'))