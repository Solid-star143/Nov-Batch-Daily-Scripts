var arr1 = [10,11,22,33,44]

// for(var i=0; i<=arr1.length-1; i++){
//     if(arr1[i] % 2 == 0){
//         console.log(arr1[i]);
//     }
// }

var arr2 =[10,20,30,40]

arr2.push(50); //Append the element at the end of the array
console.log('After push:',arr2); //[10,20,30,40,50]

arr2.unshift(5); // Append the element at the 0th Index
console.log('After unshift',arr2); //[5,10,20,30,40,50]