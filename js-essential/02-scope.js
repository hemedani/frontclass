function a() {
    var myOtherVar = "inside A";

    b();
}

function b() {
    var myVar = "inside B";

    console.log("myOtherVar:", myOtherVar);

    function c() {
        console.log("myVar:", myVar);
    }

    c();
}

var myOtherVar = "global otherVar";
var myVar = "global myVar";
a();
