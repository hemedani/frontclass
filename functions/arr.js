const arr = [
  {
    name: 'reza',
    kellas: ['js', 'fn', 'java'],
    nomre: [10, 8, 5],
  },
  {
    name: 'amin',
    kellas: ['js', 'fn'],
    nomre: [5, 9],
  },
  {
    name: 'sharifi',
    kellas: ['java', 'fn'],
    nomre: [10, 8],
  },
];

const inJs = [];
for (let i = 0; i < arr.length; i++) {
  // console.log('arr[i], i', i, arr[i]);
  for (let j = 0; j < arr[i].kellas.length; j++) {
    // console.log('arr[i].kellas[j], i, j', i, j, arr[i].kellas[j]);
    if (arr[i].kellas[j] === 'js') {
      inJs.push(arr[i]);
    }
  }
}
// console.log(inJs);

const inJsFn = arr.filter((person) => person.kellas.includes('js'));

// console.log(inJsFn);

// we wants this Object from arr
// const moadel = [{
// name: "reza",
// moadel: 7.6
// }]
//

// const newStr = 'dksfjhsdf';
//
// console.log(typeof newStr);
//
// const newStrStruct = new String('dksfjhsdf');
//
// console.log(typeof newStrStruct);
// console.log(typeof inJsFn);

const moadel = arr.map((person) => {
  return {
    name: person.name,
    moadel: (
      person.nomre.reduce((num, nomre) => num + nomre, 0) / person.nomre.length
    ).toFixed(2),
  };
});

// console.log('moadel', moadel);

// const pritinAvarage =
//   'your avarage of ' + moadel[0].name + ' is equal to ' + moadel[0].moadel;
//
// console.log('pritinAvarage : => ', pritinAvarage);
//
// const litralAvarage = `your avarage of ${moadel[0].name} is equal to ${moadel[0].moadel}`;
//
// console.log('litralAvarage : => ', litralAvarage);

const gql = `
    getUser {
        firstName
        lastName
        ssn
        address {
            text
            zipcode
            city {
                name
                geo
                abb
                state {
                    name
                    geo
                    abb
                }
            }
        }
        friends {
            name
            fullName
            address {
                text
                zipcode
                city {
                    name
                    geo
                    abb
                    state  {
                        name
                        geo
                        abb
                    }
                }
            }
        }
    }
`;

// const jsonSt = '{"getUser":{"name":"saeid"}, "city": {"ssn": "ssn", "name":"name" }}';
//
// console.log('jsonSt string', jsonSt, JSON.parse(jsonSt).getUser.name);

const parseOpenBraces = (line) =>
  `"${line.slice(0, line.length - 1).trim()}":{`;

const proccessCloseBrace = (nextItem) =>
  nextItem && (nextItem.trim() === '}' ? '}' : '},');

const proccessOthers = (line, nextItem) =>
  line.trim() && `"${line}": "${line}"${nextItem.trim() === '}' ? '' : ','}`;

const standardJSON = gql
  .split('\n')
  .map((l, i, arr) => {
    l = l.trim();
    return l.endsWith('{')
      ? parseOpenBraces(l)
      : l.endsWith('}')
      ? proccessCloseBrace(arr[i + 1])
      : proccessOthers(l, arr[i + 1]);
  })
  .filter((line) => line)
  .join('');

console.log(JSON.parse(`{${standardJSON}}}`).getUser);
