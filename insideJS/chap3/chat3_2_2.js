//객체프로퍼티 읽기, 쓰기, 갱신
//객체의 프로퍼티 접근방식 대괄호([]) 표기법, 마침표(.)표기법

var foo = {
    name : 'foo',
    major : 'computer science'
};

console.log(foo.name);
console.log(foo['name']);
console.log(foo.nickname) // undefined

//객체 프로퍼티 갱신
foo.major = 'electronics engineering';
console.log(foo.major);
console.log(foo['major']);

// 객체 프로퍼티 동적 생성
foo.age = 30;
console.log(foo.age);

//대괄호 표기법만을 사용해야하는 경우
foo['full-name'] = 'foo bar';
console.log(foo['full-name']);  // 출력값 foo bar
console.log(foo.full-name); // NaN
// foo.full 이라는 변수에 name을 빼준게 됨.
console.log(foo.full); // undefined
console.log(name); // undefined