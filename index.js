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

const titleCased = tutorials.map(tutorial => titlize(tutorial))

function titlize(phrase) {
  const arr = []
  phrase.split(' ').forEach (word => arr.push(word[0].toUpperCase() + word.slice(1)))
  return arr.join(' ')
}


// let titleCased = tutorials.map(function (tutorial) {
  
  //   console.log(tutorial.split(' ')[0] + tutorial.slice(1))
  // })
  
  let titleCased = tutorials.map(function (tutorial) {
    return tutorial.split(' ')[0].toUpperCase() + tutorial.slice(1)
  })


        let titleCased = tutorials.map(function (tutorial) {
  
          console.log(tutorial.split(' ').forEach( word => word[0].toUpperCase() + word.slice(1))
        })
      

        // const titleCased = tutorials.map(function (tutorial) {
        //   return Object.assign({}, tutorial, {
        //     tutorial.split(' ').forEach( word => {
        //       arr.push(word[0].toUpperCase() + word.slice(1));
        //     }),
        //   });
        // });