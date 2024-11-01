//  11. 자릿수 더하기
//  https://school.programmers.co.kr/learn/courses/30/lessons/12931
//  자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.

function solution(N){
 
  let  digits = String(N).split("");  
  let answer = 0;

  for ( let i = 0; i<digits.length; i++){
    answer += Number(digits[i]);
  }
  
  return answer; 
}