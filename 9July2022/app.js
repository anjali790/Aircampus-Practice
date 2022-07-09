//Filter:- is used to filter the elements on the basis of speific condition and it does not effect original array, it create a new array and values in it.Filter have inbuild for loop. 
let nums = [1,2,3,4,5,2,4];
let newArray=nums.filter((num)=>{
    return num<4;
})   
console.log(newArray);
