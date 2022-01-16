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
console.log(inJs);

const inJsFn = arr.filter((person) => person.kellas.includes('js'));

console.log(inJsFn);

// we wants this Object from arr
// const moadel = [{
// name: "reza",
// moadel: 7.6
// }]
//

const moadel = arr.map((person) => {
  return {
    name: person.name,
    moadel: (
      person.nomre.reduce((num, nomre) => num + nomre, 0) / person.nomre.length
    ).toFixed(2),
  };
});

console.log('moadel', moadel);

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
                    state {
                        name
                        geo
                        abb
                    }
                }
            }
        }
    }
`;

const parsedGql = JSON.parse(gql);
