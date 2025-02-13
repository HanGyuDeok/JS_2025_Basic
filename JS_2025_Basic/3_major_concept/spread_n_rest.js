const str1 = '문자열'
const arr1 = [str1, str1]
console.log(arr1)

const arr2 = [...str1]
console.log(arr2)

const arr3 = [arr1]
console.log(arr3)

const arr4 = [...arr2, ...arr3, str1, ...str1]
console.log(arr4)

let scores = [10, 20, 30]
// max(...value: number[]): number;
// 다시 Packing !
// ...value 형태로 전개 구문을 파라미터에 사용했을 경우 => 일반 항목 나열을 배열로 바꿔쥼
console.log(Math.max(scores));    // Error (Array 전달 - 에러)
// 컴파일된 구현체에 의해서 디버깅이 안됨

console.log(Math.max(...scores)); // 30    (Spread 된 여러 개의 값 전달 - 정상 작동)

// ex : 유저를 로그인 처리한 뒤, 기존 정보에 서버에서 받아온 추가 정보를 결합하는 예제
// 기존 유저 정보
let userInfo1 = {username: 'kai', email: 'abc@tt.cc', device: 'Mobile'}
let userInfo2 = {homeAddr: 'seoul', age: 25}

// 1) 객체 스프레드 후 추가 정보 입력 및 객체 결합
let loginUser = {...userInfo1, authorized: true, isAdmin: false, ...userInfo2};
// 결합 결과 :
//   { username: 'kai',
//     email: 'abc@tt.cc',
//     device: 'Mobile',
//     authorized: true,
//     isAdmin: false }

console.log(loginUser);

// 단일 사용
function myFunc(...args) {
  console.log(args);
}

console.log("Rest 매개변수를 활용한 Packing 수행");
console.log("myFunc('A', 'B', 'C')");
myFunc('A', 'B', 'C') // ['A', 'B', 'C']

function myFunc2(arg1, arg2, ...args) {
  // 패킹 시 마지막 일부분만 패킹해서 사용
  console.log("arg1: " + arg1);
  console.log("arg2: " + arg2);
  console.log("rest args:" + args);
}
myFunc2()
myFunc2(1,2)
myFunc2(2,3,4,5,6,7)


