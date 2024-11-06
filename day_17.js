//  17. 정수 제곱근 판별
//  https://school.programmers.co.kr/learn/courses/30/lessons/12934
//  임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
//  n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고,
//  n이 양의 정수 x의 제곱이 아니라면 -1을  리턴하는 함수를 완성하세요.

function solution(n) {
  
  const x = n ** 0.5;

  if (x === parseInt(x)) {
    return (x + 1) * (x + 1);
  } else {
    return -1;
  }
}

// 사용 예시
console.log(solution(121));
console.log(solution(3));
console.log(solution(16));
console.log(solution(17));
