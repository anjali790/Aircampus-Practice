//Slice:- used to extract values from an array
// Slice does not affect the original array, it generate a new array then only add the data/values
let names = ['Priyanka', 'Mandavi', 'Kritika', 'Shalini'];
console.log(names.slice(0,2));//output:-Priyanka,Mandavi
console.log(names.slice(-3,-1));//output:-Mandavi,Kritika
console.log(names.slice(-4));//output:-all names
console.log(names.slice(0,-2));//output:-Priyanka,Mandavi
console.log(names.slice(2,5));//output:-starting from index 2 to last value //i.e:- Kritika,Shalini
