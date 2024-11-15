//  19. 가운데 글자 가져오기
//  https://school.programmers.co.kr/learn/courses/30/lessons/12903
//  단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

function solution(s){
  let length = s.length;
  let mid = Math.floor(s.length/2);
  
  return length % 2 ===0 ? s[mid-1] + s[mid] : s[mid]  
}

console.log(solution("abcde"));
console.log(solution("qwer"));