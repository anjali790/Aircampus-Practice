//Maximum number in an array:-
let nums = [12,45,11,89,7,5,47];
let max = 0;
for(let i=0; i<nums.length; i++){
    if(max < nums[i]){
        max = nums[i];
    }
}
console.log(max);




//------------------------------------------------------------------------------------------------
//Minimum number in an array:-
let numbers = [1,-4,87,-45,0,,-100];
let min = 0;
for(let i=0; i<numbers.length; i++){
    if(min > numbers[i]){
        min = numbers[i];
    }
}
console.log(min);





//----------------------------------------------------------------------------------------------------
//Index:-
let nums1 = [1,3,1,6,1,5,8];
console.log(nums1.indexOf(1));
//Last occurance:-
console.log(nums1.lastIndexOf(1));




//----------------------------------------------------------------------------------------------------
//Find in element present at 4th index:-
let nums2 = [1,2,3,4,5,6];
console.log(nums2[4]);// 5 is present at 4th index







//----------------------------------------------------------------------------------------------------
//Find first non repeating:-
let nums3 = [1,2,5,8,1,7,4,2];
for(i=0; i<nums3.length; i++){
    if(nums3.indexOf(nums3[i]) == nums3.lastIndexOf(nums3[i]))
    console.log(nums3[i]);
    break;
}
