const arr1 = [10, 20, 30, 40];
const arr2 = [10, 20, 30, 40];

//const cannot set new value but can add values thrw methods
arr1.push(50);
arr2 = [...arr2, 50];

console.log(arr1);
console.log(arr2);