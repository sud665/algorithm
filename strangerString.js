function solution(s) {
  let result = s;

  let arr = [];

  for (let i = 0; i < result.length; i++) {
    if (result[i] === " ") {
      arr.push(" ");
      let newWord = result.slice(i + 1);
      result = newWord;
      i = -1;
      continue;
    } else if (i % 2 === 0) {
      arr.push(result[i].toUpperCase());
    } else {
      arr.push(result[i].toLowerCase());
    }
  }

  return arr.join("");
}

console.log(solution("try hello world"));

// let newArr = s.split(" ");
// let limit = newArr.length;

// let result = [];

// const handleWord = (arr, len) => {
//   if (len === 0) {
//     return;
//   } else {
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = 0; j < arr[i].length; j++) {
//         if (j % 2 === 0) {
//           result.push(arr[i][j].toUpperCase());
//           len--;
//         } else {
//           result.push(arr[i][j]);
//           len--;
//         }
//       }
//     }
//   }
// };

// handleWord(newArr, limit);
