// Arrow Function

//표현식의 결과값을 반환하는 표현식 본문
let arr = [10, 20, 30, 40, 50];

let twice = arr.map(v => v * 2);
//map : for문같은 loop
//배열객체의 내장함수 input이 파라메터로 전달되고 output이 새로운 배열

//위의 map(v=>v*2)는 아래와 같음
let twice2 = arr.map(function (value) {
    return value * 2;
})

// console.log(twice);

console.log(twice2);

let t = arr.map(() => 1);

console.log(t);
//t는 1,1,1,1,1이 반환됨


// 상태 블럭 본문에 쓰이는 경우
arr.map(v => {
    if (v % 2 == 0) {
        console.log('even number');
    } else {
        console.log('odd number');
    }
}
);

arr.map((v, i) => {
    console.log(`v : ${v}, i : ${i}`);
});

