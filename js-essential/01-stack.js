var myOtherVar = 10;

function a() {
    console.log("myVar", myVar);
    b();
}

function b() {
    console.log("myOtherVar", myOtherVar);
    c();
}

function c() {
    console.log("Hello world!");
}

a();

var myVar = 5;
console.log("myVar", myVar);
