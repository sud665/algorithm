function sum(num){
    let total = 0;
    for (let i = 0; i < num ; i++){
        total += 1;
        printTotal(total);
    }
    return total;
}

function printTotal(num){
    console.log('예상하지 못한 벌레');
    console.log(`total: ${num}`);
    console.log('logging')
}

const result = sum(2);
console.log(result);