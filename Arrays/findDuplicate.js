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