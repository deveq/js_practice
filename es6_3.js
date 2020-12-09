//for .. of 반복문
let array = [10, 20, 30, 40];
let obj = {
    a : 1,
    b : 2,
    c : 3
}
//for in의 경우 value가 아닌 key가 출력됨
for (let val in array) {
    console.log(val);
}

// 0,1,2,3이 출력됨

for (let val of array) {
    console.log(val);
}
// 10, 20, 30, 40 출력됨

/* for (let val of obj) {
    console.log(val);
} */
// 블록주석은 shift alt A 

// obj는 for .. of를 사용할 수 없어 for .. in을 사용해야함
for (let val in obj) {
    console.log(val);
}
// a, b, c 출력됨