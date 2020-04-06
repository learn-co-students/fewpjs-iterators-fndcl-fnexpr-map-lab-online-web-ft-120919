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

function titleCased() {
  const tc = tutorials.map( s => {
                let wa = s.split(' ');
                let waTc = wa.map ( w => {
                                     return w.replace(w[0], w[0].toUpperCase());
                                  });
                return waTc.join(' ');
                              }
                        );
  return tc;
}
