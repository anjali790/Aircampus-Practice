//Filter:- is used to filter the elements based on a speific condition and it does not effect original array, it create a new array and return values in it.Filter have inbuild for loop. 
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
