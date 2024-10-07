let arr = [2,3,1,8,4,5,6];
let no_of_rotation = 4;

function rotationOfArray(arr,no_of_rotation){
       
        for(let i =0; i < no_of_rotation; i++){
            arr.unShift(arr.pop());
        }

        return arr;
}

let result = rotationOfArray(arr, no_of_rotation);