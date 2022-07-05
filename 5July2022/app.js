//-------------------------------------------Array-------------------------------------------------------
let names=['anjali', 'priya', 'monika', 'nidhi', true]
console.log(names[0]);//anjali
console.log(names);//all names
console.log(typeof names);//object






let branches=['EEE', 'CS', 'IT', 'ME', 'CS', 'CE']
console.log(branches[0]);//EEE
console.log(branches[3]);//ME
console.log(branches[6]);//undefined






//-------------------------------------------------object-----------------------------------------------
let college={
    collegeName: 'KEIT',
    name: 'Anjali',
    branch: 'EEE',
    otherBranch:{
        name: 'Shubro',
        branch: 'CS',
    }
}
console.log(college);
console.log(college.collegeName);
console.log(college.otherBranch);
console.log(college.otherBranch.name);
console.log(typeof college);
console.log(college['name']);
console.log(college['otherBranch']['branch'])