// Custom map method
Array.prototype.myMap = function (cb) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    let value = cb(this[i], i, this);
    newArr.push(value);
  }
  return newArr;
};

let op = [1, 2, 3];
let res = op.myMap((el) => el * 2);
console.log(res);

//Custom filter method
Array.prototype.myFilter = function (cb) {
  let filtredArr = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      filtredArr.push(this[i]);
    }
  }
  return filtredArr;
};

const words = ["spray", "elite", "exuberant", "destruction", "present"];
const result = words.myFilter((word) => word.length > 6);
console.log(result);

//Custom Reduce method
// Syntax reduce(callbackFn, initialValue)
//reduce((accumulator, currentValue)=>{}, initialValue)

Array.prototype.myReduce = function (cb, initialValue) {

  for (let i = 0; i < this.length; i++) {
    initialValue = initialValue ? cb(initialValue,this[i], i, this) : this[i];
  }
  return initialValue;
};

const array1 = [1, 2, 3, 4];

const sumWithInitial = array1.myReduce(
  (accumulator, currentValue) => accumulator + currentValue,
);

console.log(sumWithInitial);
