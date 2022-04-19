const { defaultConfiguration } = require("express/lib/application");

const createMatrix = (village) => {
    const matrix = [];
    village.forEach((line) => {
      const row = [];
      for (let i = 0; i < line.length; i++) row.push(line[i]);
      matrix.push(row);
    });
    return matrix;
  };
  let village = [
    '0101', // 첫 번째 줄
    '0111',
    '0110',
    '0100',
  ];

  console.log(createMatrix(village))
  
  const gossipProtocol = function (village, row, col) {
    // TODO: 여기에 코드를 작성합니다.
    // 먼저 빌리지를 만든다.
    const town = createMatrix(village);

    const start = town[row][col]

    let count = 0;

    const aux = (arr, num) => {
        if(num === 0){

        return;
        } else {
            count++;
           
        }
    }
    aux(num , )

    return count;

  }