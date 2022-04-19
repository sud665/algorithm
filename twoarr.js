function solution(arr1, arr2) {
  let answer = [];

  for (let i = 0; i < arr1.length; i++) {
    let sumarr1 = [];
    for (let j = 0; j < arr1[0].length; j++) {
      sumarr1.push(arr1[i][j] + arr2[i][j]);
    }
    console.log("이거 확인", sumarr1);
    answer.push(sumarr1);
  }
  return answer;
}
let first = [
  [1, 2],
  [2, 3],
];
let second = [
  [3, 4],
  [5, 6],
];
console.log(solution(first, second));
