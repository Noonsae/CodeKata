//  08. 각도기
//  https://school.programmers.co.kr/learn/courses/30/lessons/120829
//  각에서 0도 초과 90도 미만은 예각, 90도는 직각, 90도 초과 180도 미만은 둔각 180도는 평각으로 분류합니다. 각 angle이 매개변수로 주어질 때 예각일 때 1, 직각일 때 2, 둔각일 때 3, 평각일 때 4를 return하도록 solution 함수를 완성해주세요.

function solution (angle){
  if (0 < angle && angle < 90){
    return "1. " + angle + "˚는 예각입니다."
  } else if (angle === 90){
    return "2. " + angle + "˚는 직각입니다."
  } else if (90 < angle && angle < 180){
    return "3. " + angle + "˚는 둔각입니다."
  } else if (angle === 180){ 
    return "4. " + angle + "˚는 평각입니다."
  } else {
    return "각도가 180˚를 초과합니다. 다시 확인해주세요."
  }
}
console.log(solution(70));
console.log(solution(91));
console.log(solution(180));