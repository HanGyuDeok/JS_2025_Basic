// ########### 스무고개 게임 #############
// 1) 단어들을 100 여개 올려주고 힌트 세트를 단어별로 넣어줌
// 2) 시작할 때 랜덤한 단어 선택되게 해주기
// 3) 초기 힌트를 화면에 표시하고 유저가 오답을 제시하면 힌트 하나씩 추가 공개
// 4) 맞추면 기록 표시하고 종료, 힌트 소진까지 다 틀리면 게임오버로 종료

const wordsList = [];
const hintList = [];

class words {
  constructor(word, hint1, hint2, hint3) {
    this.word = word;
    this.hint1 = hint1;
    this.hint2 = hint2;
    this.hint3 = hint3;
    wordsList.push(word);
    let hints = [];
    hints.push(hint1);
    hints.push(hint2);
    hints.push(hint3);
    hintList.push(hints);
  }
}

const word1 = new words("사과", "빨간색", "맛있음", "달콤함");
const word2 = new words("자동차", "굴러감", "크기가큼", "종류가 다양함");
const word3 = new words("호랑이", "무서움", "줄무늬가 있음", "동물원에 있음");
const word4 = new words("책", "읽을 수 있음", "정보가 많음", "페이지가 있음");
const word5 = new words("컴퓨터", "디지털", "작동이 빠름", "기계");

let RandomWords = Math.floor(Math.random() * wordsList.length + 1);

let screenParagraph = document.querySelector('p');
screenParagraph.textContent = `[ ${wordsList.join(' , ')} ] `;

const button = document.getElementById('submit');
const inputField = document.getElementById('userInput');
let hintArea = document.getElementById('hintList');
let hintCount = 0;
let maxHints = hintList[RandomWords].length;
hintArea.textContent = `힌트 1 : ${hintList[RandomWords][hintCount]}`;

button.addEventListener('click', function () {
  const userInput = inputField.value;

  if (userInput === wordsList[RandomWords]) {
    alert('정답입니다!');
    hintArea.textContent = `점수 : ${maxHints - hintCount}`;
  } else {
    hintCount++;
    if (hintCount < maxHints) {
      alert(`오답입니다. 힌트 ${hintCount + 1}을(를) 공개합니다.`);
      hintArea.textContent = `힌트 ${hintCount + 1} : ${hintList[RandomWords][hintCount]}`;
    } else {
      alert('게임 오버! 모든 힌트를 다 썼습니다.');
      hintArea.textContent = '게임 오버!';
    }
  }
});