//Slice:- used to extract values from an array
// Slice does not affect the original array, it generate a new array then only add the data/values
let names = ['Priyanka', 'Mandavi', 'Kritika', 'Shalini'];
console.log(names.slice(0,2));//output:-Priyanka,Mandavi
console.log(names.slice(-3,-1));//output:-Mandavi,Kritika
console.log(names.slice(-4));//output:-all names
console.log(names.slice(0,-2));//output:-Priyanka,Mandavi
console.log(names.slice(2,5));//output:-starting from index 2 to last value //i.e:- Kritika,Shalini
console.log(names.slice(-1,-3));//output:-empty array





//Includes:-used to check whether the element is present or not in an array
let nums = [1,2,3,4,5];
console.log(nums.includes(1));//output:-true
