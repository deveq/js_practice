// Rest Operator

function printNums(num1, num2) {
    // console.log(num1, num2);
    console.log(arguments);
}

printNums(1, 2, 3, 4, 5);
// 1, 2만 출력됨
// console.log에 num1, num2 대신 arguments를 넣으면
// Arguments(5) [1, 2, 3, 4, 5, callee: ƒ, Symbol(Symbol.iterator): ƒ]
// 위와같이 출력됨

function printNums2(num1, ...num2) {
    console.log(num1, num2);
}

printNums2(1,2,3,4,5);
// 1, [2,3,4,5] 로 출력됨, num1은 그대로 출력되지만 num2는 배열로 출력됨.