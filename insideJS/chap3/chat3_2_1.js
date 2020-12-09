// Object() 생성자 함수 사용

//Object()를 이용해 foo 빈 객체 생성
var foo = new Object();

// foo 객체 프로퍼티 생성
foo.name = 'foo';
foo.age = 30;
foo.gender = 'male';

console.log(typeof foo);
console.log(foo);

//객체 리터럴 방식 이용
var foo2 = {
    name: 'foo',
    age: 30,
    gender: 'male'
};

console.log(typeof foo2);
console.log(foo2);