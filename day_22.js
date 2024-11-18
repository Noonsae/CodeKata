//  약수의 개수와 덧셈
//  https://school.programmers.co.kr/learn/courses/30/lessons/77884
//  두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

function solution(left, right) {
  let answer = 0;

  //  수의 범위 지정
  for (let i = left; i <= right; i++) {
    let count = 0;

    // 약수 개수 계산
    for (let j = 1; j * j <= i; j++) {
      if (i % j === 0) {
        //  j가 i의 제곱근의 경우 1, 아닌 경우 2를 반환
        count += j * j === i ? 1 : 2;
      }
    }

    // 약수의 개수에 따라 더하거나 뺌
    answer += count % 2 === 0 ? i : -i;
  }

  return answer;
}

console.log(solution(13, 17));
console.log(solution(24, 27));
