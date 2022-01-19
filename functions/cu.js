const createStudent = (className, name, firstScore, secondScore) => {
  return {
    className: className,
    name: name,
    scores: [firstScore, secondScore],
    avarage: (firstScore + secondScore) / 2,
  };
};

const newStudent = createStudent('JS', 'Saeid GH', 8, 6);
const newStudent2 = createStudent('Js', 'Amin SH', 8, 6);

/*
 *    @LOG @DEBUG @INFO
 *    This log written by ::==> {{ syd }}
 *
 *    Please remove your log after debugging
 */
console.group('newStudent ------ ');
console.log(' ============= ');
console.log();
console.info({ newStudent, newStudent2 }, ' ------ ');
console.log();
console.log(' ============= ');
console.groupEnd();

const curryingStudent = (className) => (name) => (firstScore, secondScore) => ({
  className,
  name,
  scores: [firstScore, secondScore],
  avarage: (firstScore + secondScore) / 2,
});

// const newCuStudent = curryingStudent('JS')('Reza ZU')(9, 4);
//
// /*
//  *    @LOG @DEBUG @INFO
//  *    This log written by ::==> {{ syd }}
//  *
//  *    Please remove your log after debugging
//  */
// console.group('newCuStudent ------ ');
// console.log(' ============= ');
// console.log();
// console.info({ newCuStudent }, ' ------ ');
// console.log();
// console.log(' ============= ');
// console.groupEnd();

const JSClass = curryingStudent('JS');

const aminInJs = JSClass('Amin SH');

const sharifiInJS = JSClass('Sharifi');

const wholeStudents = {
  JS: [
    {
      'Amin SH': { ...aminInJs(9, 5) },
      Sharifi: { ...sharifiInJS(8, 7) },
    },
  ],
};

/*
 *    @LOG @DEBUG @INFO
 *    This log written by ::==> {{ syd }}
 *
 *    Please remove your log after debugging
 */
console.group('wholeStudents ------ ');
console.log(' ============= ');
console.log();
console.info(JSON.stringify({ wholeStudents }, null, 2), ' ------ ');
console.log();
console.log(' ============= ');
console.groupEnd();
