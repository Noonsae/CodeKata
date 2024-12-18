//  36. 숫자 짝꿍
//  https://school.programmers.co.kr/learn/courses/30/lessons/131128
//  두 정수 X, Y의 임의의 자리에서 공통으로 나타나는 정수 k(0 ≤ k ≤ 9)들을 이용하여 만들 수 있는 가장 큰 정수를 두 수의 짝꿍이라 합니다(단, 공통으로 나타나는 정수 중 서로 짝지을 수 있는 숫자만 사용합니다). X, Y의 짝꿍이 존재하지 않으면, 짝꿍은 -1입니다. X, Y의 짝꿍이 0으로만 구성되어 있다면, 짝꿍은 0입니다.

// 예를 들어, X = 3403이고 Y = 13203이라면, X와 Y의 짝꿍은 X와 Y에서 공통으로 나타나는 3, 0, 3으로 만들 수 있는 가장 큰 정수인 330입니다. 다른 예시로 X = 5525이고 Y = 1255이면 X와 Y의 짝꿍은 X와 Y에서 공통으로 나타나는 2, 5, 5로 만들 수 있는 가장 큰 정수인 552입니다(X에는 5가 3개, Y에는 5가 2개 나타나므로 남는 5 한 개는 짝 지을 수 없습니다.)

// 두 정수 X, Y가 주어졌을 때, X, Y의 짝꿍을 return하는 solution 함수를 완성해주세요.

function solution(X, Y) {
  const countX = Array(10).fill(0); // X에서 숫자 개수 저장
  const countY = Array(10).fill(0); // Y에서 숫자 개수 저장

  // X와 Y의 숫자 개수 카운트
  for (const num of X) countX[num]++;
  for (const num of Y) countY[num]++;

  // 결과를 저장할 배열
  const result = [];

  // 9부터 0까지 숫자를 역순으로 확인하면서 결과에 추가
  for (let i = 9; i >= 0; i--) {
    const count = Math.min(countX[i], countY[i]); // 두 숫자 개수 중 최소값
    if (count > 0) result.push(i.toString().repeat(count));
  }

  // 결과 문자열로 합치기
  const answer = result.join("");

  // 예외 처리
  if (!answer) return "-1"; // 공통된 숫자가 없는 경우
  if (answer[0] === "0") return "0"; // 결과가 0으로만 구성된 경우

  return answer; // 결과 반환
}

console.log(solution("100", "2345")); // "-1"
console.log(solution("100", "203045")); // "0"
console.log(solution("100", "123450")); // "10"
console.log(solution("12321", "42531")); // "321"
console.log(solution("5525", "1255")); // "552"
