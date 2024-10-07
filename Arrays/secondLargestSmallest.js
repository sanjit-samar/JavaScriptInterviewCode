//second largest element
let arr = [2,3,1,8,4,5,6];

let secondLargest = arr.sort((a,b)=> b-a);

console.log(secondLargest[1]);


//second smallest element

let sortedArray = arr.sort((a,b)=>a-b);

let secondSmallest = sortedArray[1];

console.log(secondSmallest);


