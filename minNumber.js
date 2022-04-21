function solution(arr) {
  let result = [];

  let minNum = Math.min(...arr);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === minNum) {
      continue;
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(solution([4, 2, 3, 8, 9]));
