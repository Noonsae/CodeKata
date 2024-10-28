//  평균구하기
//  https://school.programmers.co.kr/learn/courses/30/lessons/12944
//  정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

function solution(arr){  
  let addNumber = 0;

  for ( let i = 0; i < arr.length; i++){
    addNumber += arr[i];    
  }
  return Math.round(addNumber / arr.length * 10) / 10;
}

let num1 = [3,4,5]
let num2 = [53,27,40]
console.log(solution(num1));
console.log(solution(num2));