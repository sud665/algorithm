function solution(nums) {
  //먼저 겹치는걸 뺸다.
  //매개변수의 2로 나눈숫자와 겹치는걸 뺀 숫자를 비교한다.
  //만약 겹치는걸 뺸 배열의 길이가 2로 나눈숫자보다 크거나 같다면, 그 숫자를 리턴한다
  //두번째면

  let filter = new Set(nums);

  let result = [...filter].length;

  let answer = 0;

  if (nums.length / 2 >= result) {
    answer = result;
  } else {
    answer = nums.length / 2 ;
  }

  return answer;
}

console.log(solution([3, 1, 2, 3]));
