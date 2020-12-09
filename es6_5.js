// Spread Operator

function sum (x, y, z) {
    return x+y+z;
}

// console.log(sum(1,2,3));

let arr = [10, 20, 30];

// console.log(sum(arr));
// 10,20,30undefinedundefined 로 출력됨. 제대로 인식하지 못함

// console.log(sum.apply(null, arr))
// 60 출력됨. apply, call, bind 참조

// console.log(sum(...arr));
//배열을 펼쳐줌. 매개변수의 중간에도 들어갈 수 있음

function sum2 (a, b, c, d, e) {
    return a+b+c+d+e;
}

let arr2 = [2,3];

// console.log(sum2(1,...arr2,4,5));

let arr3 = [2,3,4];
// 만약 arr3가 [2,3,4]인 채로 넣었다면
// console.log(sum2(1,...arr3,4,5));
// sum 함수는 5개의 매개변수만 받으므로 마지막 5가 들어가지 않음.

// 배열 안에서 spread operator 사용하기
let face = ['eyes', 'nose', 'mouth'];
let head = ['hair', ...face, 'ears'];
// 배열 안에 집어넣을 수 있음
// console.log(head);
// ['hair', 'eyes', 'nose', 'mouth', 'ears']

let arr4 = [1, 2, 3];
let arrCopy = [...arr4];
let arrCopy2 = arr4;
// arrCopy2가 arr4의 참조값을 받기 때문에 arrCopy2를 수정하면 arr4도 수정되므로
// ...arr4로 값만 복사

console.log(arrCopy);
