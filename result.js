function test2 (arr) {
    const newInputAnswer = ['치과','택시','백신','엉뚱한거',1,2]
    const newdummydata = [...arr]
    const checkedResult = newdummydata.filter(el => newInputAnswer.includes(el))
    return checkedResult.length

   
};
   let data = [
    '치과','택시','백신','제주도','대구',
    '서울','백화점','떡볶이','삼겹살','치약',
    '선생님','축구','커피','노트북','스탠드',
    '핸드폰','오징어','얼음','뽀로로','소독약',
    '애플','생크림','중학생','유치원','마우스',
    '미사일','오렌지','포도','도마','짜장면'
  ]
   console.log(test2(data))