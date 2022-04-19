function solution(num) {
  let count = 0;

  const handleNum = (el) => {
    if (el === 1) {
      return;
    } else {
      count = count + 1;
      if (el % 2 === 0) {
        let evenNum = el / 2;
        handleNum(evenNum);
      } else {
        let oddNum = el * 3 + 1;
        handleNum(oddNum);
      }
    }
  };
  handleNum(num);

  if(count >= 500){
    return -1;
  }

  return count;
}

let test = 18;

console.log(solution(test));
