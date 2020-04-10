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

function capitalize(word) {
  return word.replace(word[0], word[0].toUpperCase());
}

function toTitleCase(string) {
  const words = string.split(" ");
  const capitalized = words.map(capitalize);
  return capitalized.join(" ");
}
const titleCased = () => {
  return tutorials.map(toTitleCase);
}
