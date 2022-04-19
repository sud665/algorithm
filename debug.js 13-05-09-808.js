function boardGame(board, operation) {
    // TODO: 여기에 코드를 작성하세요.
    let newBoard = [...board];
  
    let x = 0;
    let y = 0;
    
    let current = 0;
  
    const isVaild = (X, Y) => {
      if(x < 0 || y < 0 || board.length > y || board.length > x){
        return false;
      }
    }
  
    for(let i = 0; i < operation.length; i++){
      if(operation[i] === 'U'){
        y -= 1;
      }
      if(operation[i] === 'D'){
        y += 1; 
      }
      if(operation[i] === 'R'){
        x += 1;
      }
      if(operation[i] === 'L'){
        x -= 1;
      }
      if(isVaild(x,y)){
        current += newBoard[y][x]
        newBoard[y][x] = 0;
      }
    }
    return current;
  };
  