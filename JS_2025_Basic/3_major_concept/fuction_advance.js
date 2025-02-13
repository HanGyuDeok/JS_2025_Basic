const greet1 = function () {  // 함수는 일급 객체이므로 변수에 할당 가능!
  console.log("Hello");
};

function rollDice() {
  let diceNum = Math.floor(Math.random() * 6 + 1);
  console.log(diceNum);
  return diceNum;
}

function callMultiple(func, times) {
  for (let i = 0; i < times; i++) {
    func(); // 주어진 횟수만큼 함수 호출
  }
}

// rollDice 함수를 3번 호출하는 callMultiple 함수 실행
callMultiple(rollDice, 3);
callMultiple(greet1, 4);

// == currying 예제 (함수를 리턴하는 함수 내용)
function createMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

console.log(
  // currying 문법 ()() 간단한 예제
  createMultiplier(10)(20)
);

// 함수형 프로그래밍의 패턴
// 1) Input 외의 외부 상태에 의존하지 않는 로직 설계
// 2) 해당 로직을 수행하는데 필요한 연산 단계에 이름을 짓고 구획 나눔
// 3) 각 이름에 해당하는 함수를 선언 (중첩형, 다음단계 처리 할 함수를 리턴)
// 4) Currying 방식으로 호출

callMultiple(() => {
  console.log("haha")
}, 3)
