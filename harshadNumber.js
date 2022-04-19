function solution(num) {
  let sumNum = num
    .toString()
    .split("")
    .map((el) => parseInt(el))
    .reduce((acc, cur) => acc + cur, 0);

  if (num % sumNum === 0) {
    return true;
  } else {
    return false;
  }
}

let test = 18;

console.log(solution(test));
