// 작성 예시 (1) 익명함수 객체 할당
const greet1 = function (name) {  // 함수는 일급 객체이므로 변수에 할당 가능!
  console.log("Hello, " + name + "!");
};
greet1("John"); // Hello, John!

// 작성 예시 (2) 이름이 있는 함수 객체 할당
const greet2 = function hello(name) {  // 함수는 일급 객체이므로 변수에 할당 가능!
  console.log("Hello, " + name + "!");
};

console.log(greet2);
console.log(typeof greet2);
console.log(typeof [1, 2, 3]);

(function (name) {
  console.log("Hello, " + name + "!");
})
("Everyone!");

function rollDice(dicePlanes = 6) {
  return Math.floor(Math.random() * dicePlanes) + 1;
}
//
