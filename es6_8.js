// Class
// JS에서 class는 함수처럼 사용됨
 
class Person {
    constructor(region_, gender_) {
        this.region = region_;
        this.gender = gender_; 
    }

    greetings(val = '안녕') {
        console.log(val);
    }
}
// Person 클래스의 인스턴스 생성
let korean = new Person('Korea', 'male');

// Person 클래스를 상속하는 American 클래스 만들기

class American extends Person {
    constructor(region_, gender_, language_) {
        super(region_, gender_);
        this.language = language_;
    }

    greetings(val = 'hello') {
        console.log(val);
    }
}

let american = new American('USA', 'female', 'English');

console.log(american);

american.greetings();
