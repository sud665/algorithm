function test2 (arr) {
    var newnum = [];

    while(arr.length > 15){
        var movenum = arr.splice(Math.floor(Math.random() * arr.length),1)[0]
        newnum.push(movenum)
    }
    return newnum.length

   
};
   let data = [
    '치과','택시','백신','제주도','대구',
    '서울','백화점','떡볶이','삼겹살','치약',
    '선생님','축구','커피','노트북','스탠드',
    '핸드폰','오징어','얼음','뽀로로','소독약',
    '애플','생크림','중학생','유치원','마우스',
    '미사일','오렌지','포도','도마','짜장면',
    '쭈꾸미','손흥민','토트넘','하와이','탕수육',
    '감기약','우유','지하철','키보드','태풍',
    '대뇌','안경','립스틱','숟가락','시험'
  ]
   console.log(test2(data))