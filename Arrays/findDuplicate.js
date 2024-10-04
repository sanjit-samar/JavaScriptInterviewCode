//By help of fliter and indexOf 
let arr = [1,2,1,3,4,2,5,6,3];

function uniqueArr(arr){
    const filterArr = arr.filter( (el,index)=>{
        return arr.indexOf(el) === index;
    });

    return filterArr;
}

const result = uniqueArr(arr);

console.log(result);


// By help of For loop

let Arr = ["a","b","c","a","c","d"];

function modifiedArr(Arr){

    let newArr =[];
    for(let i=0; i<Arr.length; i++){
        if(newArr.indexOf(Arr[i]) === -1){
            newArr.push(Arr[i]);
        }     
    }
    return newArr;
}

let res = modifiedArr(Arr);
console.log(res);