// var foo = 1;
// function bar() {
//     if (!foo) {
//         foo = 10;
//     }
//     console.log(foo);
// }

// bar()

var x = 1;
console.log(x); //1
if (true) {
    var x = 2;
    console.log(x); //2
}
console.log(x); //2