function solution(n) {
  let str = n.toString();

  let result = [];

  for (let i = str.length - 1; i >= 0; i--) {
    result.push(str[i]);
  }

  return result.map((el) => parseInt(el));
}

console.log(solution(12345));
