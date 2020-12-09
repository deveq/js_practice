//참조에 의한 함수 호출 방식
// 기본타입의 경우 값에 의한 호출(Call by Value),
// 매개변수로 기본형을 넘기게되면 호출된 함수에서 복사된값이 전달되므로 
// 암만 고쳐봐도 전달된 함수의 값은 바뀌지 않음

// 객체타입 : Call by Reference
// 함수에 객체를 매개변수로 넘기면 값의 참조값이 그대로 내부에 전달되므로
// 실제값을 변경할 수 있음

var a = 100;
var objA = { value : 100 };

function changeArg(num, obj) {
    num = 200;
    obj.value = 200;

    console.log(num);
    console.log(obj.value);
}

changeArg(a, objA);

console.log(a);
console.log(objA.value);

//200, 200이 출력된 다음
//100, 200이 출력됨