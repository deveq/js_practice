//for in 과 객체 프로퍼티 출력

var foo = {
    name: 'foo',
    age: 30,
    major: 'computer science'
};

// for in 문을 이용한 객체 프로퍼티 출력
var prop;
for (prop in foo) {
    console.log(prop, foo[prop]);
}

// 객체 프로퍼티 삭제
// delete로 객체의 프로퍼티 삭제가능. 객체는 삭제 불가능

delete foo.major
console.log(foo.major);

delete foo
console.log(foo);