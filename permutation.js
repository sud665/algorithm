function debug (n, m) {
 let newArr = [];
 for(let i = 1; i <= n; i++){
   newArr.push(i)
 }
 // M개 만큼 뽑기 // 결과를 담아줄 배열 
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
permutation(newArr, [], m)
 
 return result;


};

console.log(debug(3 , 2))