//Filter:- is used to filter the elements based on a speific condition and it does not effect original array, it create a new array and return values in it.
//Filter have inbuild for loop.
//Filter method do the comparison only.

let nums = [1,2,3,4,5,2,4];
let newArray=nums.filter(function(num){
    return num<4;
})   
console.log(newArray);





let names=['anjali', 'shubro', 'aarav', 'shubhankar'];
let array=names.filter(function (name){
    return name.length>5;
})
console.log(array);






let ages=[14,18,23,20,16];
let ageArray=ages.filter(function (age){
    return age>=18;
})
console.log(ageArray);






//Map:-is used to perform any opertaion and comparison.
let numbers=[1,2,3,4,5];
let newarr=numbers.map(function (square){
    return square**2;
})
console.log(newarr);