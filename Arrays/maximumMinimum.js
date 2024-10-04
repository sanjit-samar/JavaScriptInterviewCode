let arr = [2,3,1,8,4,5,6];

// By Sorting for maximum value by Sort() method

let maxSort = arr.sort((a,b)=>{
    return b-a;
});
console.log(maxSort[0]);

// By Sorting for min value by Sort() method

let minSort = arr.sort((a,b)=>{
    return a-b;
});

console.log(minSort[0]);


// Maximum Value by for loop

let maxValue = arr[0];

for(let i=1; i<arr.length;i++){
  if(arr[i] > maxValue){
    maxValue = arr[i];
  }
}

console.log(maxValue);


// Minimum Value by for loop

let minValue = arr[0];

for(let i = arr.length -1; i >=0; i--){
  if(arr[i] < minValue){
    minValue = arr[i];
  }
}

console.log(minValue);