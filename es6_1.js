// var
var num1 = 6;

if (true) {
    var num1 = 10;
    console.log(num1);
}
console.log(num1);
// 출력결과 : 10, 10


// let
let num2 = 6;
if (true) {
    let num2 = 10;
    console.log(num2);
}

console.log(num2);
// 출력 결과 : 10, 6

// const
const num3 = 6;

if (true) {
    const num3 = 10;
    console.log(num3);
}

console.log(num3);
// 출력결과 : 10, 6