//by help of for loop
let arr =[1,2,3,4,5,6];

function reverse(arr){
    let uniqueArr =[];
    for(let i = arr.length-1; i >=0; i--){
        uniqueArr.push(arr[i]);
    }
    return uniqueArr;
}

const result = reverse(arr);
console.log(result);



//Bulit in method

const builtIn = arr.reverse();
console.log(builtIn);