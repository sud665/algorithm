function test2 (n, m) {
    let newArr = [];
    for(let i = 1; i <= n; i++){
      newArr.push(i)
    } 
    let out = newArr.toString().split(',')
 
    
    let result = [];
    
    const permutation = (arr, bucket, num) => {
      if(num === 0){
        result.push(bucket);
        return 
      } else {
        for(let i = 0; i < arr.length; i++){
          const choice = arr[i];
          const sliceArr = arr.slice();
          sliceArr.splice(i,1)
          permutation(sliceArr, bucket.concat(choice), (num - 1));
        }
      }
    }
   permutation(out, [], m)

   let output = result.map(el => el.join("")).map(el => Number(el));
   

   return output
   
};
   
   console.log(debug(3, 3))