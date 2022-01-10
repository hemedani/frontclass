// function loopScope() {
//     var i = 50;
//     var j = 99;
//
//     // var i = 10;
//
//     for (var i = 0; i < 10; i++) {}
//
//     console.log("i =", i);
//
//     for (let j = 0; j < 10; j++) {}
//
//     console.log("j =", j);
// }
//
// loopScope();

// block scoping - literal blocks

function blockScope() {
    let a = 5;
    {
        const blockedVar = "blocked";
        var b = 11;

        console.log("blockedVar inside scope", blockedVar);

        a = 9000;
    }

    console.log("a =", a);
    console.log("b =", b);
    console.log("blockedVar =", blockedVar);
}

blockScope();
