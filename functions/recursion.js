const coutDown = (number) => {
  number = number - 1;
  console.log(number);
  if (number === 0) return;
  coutDown(number);
};

coutDown(12);

const tasks = [
  { id: 1, name: 'karhaye daftar', parent: null },
  { id: 2, name: 'class saat 4', parent: 1 },
  { id: 3, name: 'kar kardan recursive', parent: 1 },
  { id: 4, name: 'karhaye khone', parent: null },
  { id: 5, name: 'mahdekodak', parent: 4 },
  { id: 6, name: 'kharid mive', parent: 4 },
  { id: 7, name: 'bordan sareh', parent: 5 },
  { id: 8, name: 'keshidan naghashi ba sare', parent: 5 },
  { id: 9, name: 'kharidan sib', parent: 6 },
  { id: 10, name: 'kharidan porteghal', parent: 6 },
];

const orderedList = {
  'kardan daftar': {
    'class saat 4': {},
    'kar kardan recursive': {},
  },
  'karhaye khone': {
    mahdekodak: {
      'bordan sareh': {},
    },
    'kharid mive': {},
  },
};
