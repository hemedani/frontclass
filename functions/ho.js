const ohFn = (fn, addad) => {
  addad = addad * 2;
  return fn(addad);
};

const zarbDar5 = (addad) => addad * 5;

console.log(ohFn(zarbDar5, 4));
