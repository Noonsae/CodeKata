//  직사각형 별찍기
//  https://school.programmers.co.kr/learn/courses/30/lessons/12969
//  이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
//  별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

function solution(n, m) {
  
  // 길이가 a인 가로 한 줄 만들기
  const row = '*'.repeat(n);

  // 높이가 b인 직사각형 만들기
  const rectangle =
    Array(m)
      .fill(row)
      .join('\n');

  return rectangle;
}

console.log(solution(5, 3));
