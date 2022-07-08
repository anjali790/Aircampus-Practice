//Maximum number in an array:-
let nums = [12,45,11,89,7,5,47];
let max = 0;
for(let i=0; i<nums.length; i++){
    if(max < nums[i]){
        max = nums[i];
    }
}
console.log(max);




