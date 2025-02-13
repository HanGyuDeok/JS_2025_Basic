function sayName() {
  console.log("My name is " + this.name);
}

const person1 = {
  name: "Alice",
  speak: sayName
};

const person2 = {
  name: "Bob",
  speak: sayName
};

person1.speak(); // My name is Alice
person2.speak(); // My name is Bob

const person3 = {
  name: "Alice",
  greet: function() {
    // setTimeout() 함수 내부에서 화살표 함수를 호출하므로
    // 화살표 함수의 실행 스코프는 setTimeout 함수 스코프임
    setTimeout(() => {
      console.log("Hello, " + this.name);
    }, 1000);
  }
};

person3.greet();
// 1초 후 Hello, Alice 출력
// setTimeout() 내부 화살표 함수의 this 는 person1 객체를 지칭

const person4 = {
  name: "Bob",
  greet: function() {
    // setTimeout() 함수 내부에서 일반 함수를 호출하므로
    // 일반 함수의 실행 스코프는 setTimeout 함수 스코프임
    setTimeout(function() {
      console.log("Hello, " + this.name);
    }, 1000);
  }
};

person4.greet();
// 1초 후 Hello, 출력
// setTimeout() 내부 일반 함수의 this 는 setTimeout 함수를 지칭
// setTimeout 함수는 name 변수가 없으므로 undefined 값이 참조되어 출력 시 무시됨