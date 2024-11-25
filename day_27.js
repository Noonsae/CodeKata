//  3진법 뒤집기
//  https://school.programmers.co.kr/learn/courses/30/lessons/68935
//  자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

function solution(n) {
  //  10진수 3진법으로 변환
  let ternary = n.toString(3);

  //  3진법 문자열 뒤집기
  let reversed =
    ternary
      .split('')
      .reverse()
      .join('');
  
  //  뒤집은 3진법 수를 10진법으로 돌리기
  return parseInt(reversed, 3);
}

console.log(solution(45));  // 출력: 7
console.log(solution(125)); // 출력: 229