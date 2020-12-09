// 자바스크립트의 함수 생성 방법
// 1. 함수 리터럴
// 2. 함수 표현식
// 3. Fuction() 생성자 함수

// 함수 리터럴

function add(x,y) { 
    return x+y;
}

// 함수 표현식
// 함수에 이름이 없음. 익명함수를 add에 대입함
var add2 = function(x,y) {
    return x+y;
}

var add3 = function sum(x,y) {
    return x+y;
}

var plus = add;

console.log(add(3,4));
console.log(plus(3,4));
console.log(add3(3,4));
console.log(sum(3,4));  // 에러 발생
// 함수 표현식에서 사용된 sum이라는 이름은 재귀적으로 사용되거나
// 디버거 등에서 함수를 구분할때 사용할 수 있음. 외부에서는 사용 불가