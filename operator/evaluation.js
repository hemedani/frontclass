// // bad
// (function example() {
//     let a = b = c = 1;
// })();
//
// console.log(a);
// console.log(b);
// console.log(c);
//
// // good
// (function example() {
//     let a = 1;
//     let b = a;
//     let c = a;
// })();
//
// console.log(a);
// console.log(b);
// console.log(c);

function f() {
  console.log('F!');
  return 2;
}
function g() {
  console.log('G!');
  return 3;
}
let x, y;

y = x = f();
//Parameters: y, x
console.group('y, x ------');
console.log('================');
console.log(y, x);
console.log('================');
console.groupEnd();

y = [f(), (x = g())];
//Parameters: y, x
console.group('y, x ------');
console.log('================');
console.log(y, x);
console.log('================');
console.groupEnd();

x[f()] = g();
//Parameters: x
console.group('x ------');
console.log('================');
console.log(x[f()]);
console.log('================');
console.groupEnd();
