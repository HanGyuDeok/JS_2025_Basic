let userInput = prompt("숫자게임의 최대값을 입력하세요 ! (종료: q) : ")
let userGuess = undefined;
let gameContinue = true;
let userAttemptCnt = 0;
let correctNum = Math.floor(Math.random() * userInput + 1);

while (gameContinue) {
  userGuess = prompt('숫자 추축값을 입력해 보세요 ! (종료: q) : ')

  if (!parseInt(userGuess)) {
    if (userGuess === undefined) {
      gameContinue = false;
      alert('게임을 종료합니다 !')
      break;
    } else {
      alert('추측값은 숫자로 입력해야 합니다 !')
      continue;
    }
  }
  if (parseInt(userGuess) !== correctNum) {
    alert('땡 ! ')
    userAttemptCnt++;
    if (userGuess > correctNum) {
      alert('좀더 작은값을 입력하세요!')
    } else {
      alert('좀더 큰값을 입력하세요!')
    }
  } else {
    alert('정답 !!')
    userAttemptCnt++;
    break;
  }
  userGuess = undefined;

}

let screenParagraph = document.querySelector('span');
screenParagraph.textContent = `현재기록: ${userAttemptCnt}`;

// ########### 숫자 맞추기 게임 #############
// 1) 유저 최초의 입력을 랜덤 숫자로 입력 받기
// 2) 0 에서 해당 넘버 사이의 유저 입력을 반복받으며 정답일 경우 게임 종료
// 3) 시도횟수를 화면에 표시
// 4) 현재까지의 최고 기록도 화면에 표시

// ########### 스무고개 게임 #############
// 1) 단어들을 100 여개 올려주고 힌트 세트를 단어별로 넣어줌
// 2) 시작할 때 랜덤한 단어 선택되게 해주기
// 3) 초기 힌트를 화면에 표시하고 유저가 오답을 제시하면 힌트 하나씩 추가 공개
// 4) 맞추면 기록 표시하고 종료, 힌트 소진까지 다 틀리면 게임오버로 종료