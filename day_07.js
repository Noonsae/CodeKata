//  07. 두 수의 나눗셈
//  https://school.programmers.co.kr/learn/courses/30/lessons/120806
//  정수 num1과 num2가 매개변수로 주어질 때, num1을 num2로 나눈 값에 1,000을 곱한 후 정수 부분을 return 하도록 solution 함수를 완성해주세요.

function solution(num1, num2){
  let num =  num1 / num2 * 1000;
  return Math.floor(num);
}