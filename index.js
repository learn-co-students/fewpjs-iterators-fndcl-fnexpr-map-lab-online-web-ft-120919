const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

console.log(tutorials)

function toTitle(str) {
  console.log("Inside toTitle with: ", str)
  let allWords = str.split(' ');
  let newWords = allWords.map(word => word[0].toUpperCase() + word.slice(1));
  let newStr = newWords.join(' ');
  console.log("New string: ", newStr)
  return newStr;
}

const titleCased = () => {
  return tutorials.map(tutorial => toTitle(tutorial))
}

//titleCased();
