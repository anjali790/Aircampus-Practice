let nums = [1,2,3,4,5,6,7,8,9]

//print first and last element
console.log(nums[0],nums[nums.length-1]);




//PUSH- add element in the last
let names = ['david', 'sachin', 'rahul', 'virat']
names.push('ishan');
console.log(names);





//UNSHIFT- add element in the first
let branches = ['EEE', 'CS', 'IT', 'ME']
branches.unshift('EC');
console.log(branches);





//POP- remove element from last
let states = ['Delhi', 'UP', 'Kerala', 'Punjab']
states.pop();
console.log(states);//remove 'Punjab'





//SHIFT- remove element form first
let shapes = ['circle', 'triangle', 'rectangle', 'square']
shapes.shift();
console.log(shapes);






//To DELETE a element- 1.length=0
// const personNames = ['shubham', 'ankit', 'rahul', 'aarav']
// personNames.length=0;
// console.log(personNames);

//2. arrayNames=[] BUT it through an error because const can not reassign
personNames = []
console.log(personNames);// through an error


let customerNames = ['priya', 'sakshi', 'nidhi', 'sushmita'];
customerNames = []
console.log(customerNames);//using let it will work






//SPLICE:-
let schoolNames = ['KV', 'Airforce School', 'Army Public School'];
schoolNames.splice(2,1, 'Delhi Public School');
console.log(schoolNames);