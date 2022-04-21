function solution(a, b) {
  let week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT", ];

  let handleDay = new Date(`2016 ${a} ${b}`);

  console.log(handleDay);

  let choiceDay = handleDay.getDay();

  return week[choiceDay];
}

console.log(solution(2, 24));
