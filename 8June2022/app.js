/////////////////////////////////////////////////////////////////////////////////////
// Practice problems

// 1. Write a  program to accept two integers and check whether they are equal or not.
// Test Data : 15 15
// Expected Output :
// Number1 and Number2 are equal

/* Your answer here*/
let number1, number2;
number1=15;
number2=15;
if (number1==number2){
    console.log("Number1 and Number2 are equal")
} else{
    console.logt("Number1 and Number2 are not equal")
}















// 2. Write a  program to check whether a given number is even or odd.
// Test Data : 15
// Expected Output :
// 15 is an odd integer
/* Your answer here
*/
let a=15;
if(a%2==0){
    console.log("Even")
}else{
    console.log("15 is an odd integer")
}


// 3. Write a  program to check whether a given number is positive or negative.
// Test Data : 15
// Expected Output :
// 15 is a positive number
/* Your answer here
*/
let b=15;
if(a>0){
    console.log("15 is a positive number")
}else{
    console.log("number is negative")
}


// 4. Write a  program to find whether a given year is a leap year or not.
// Test Data : 2016
// Expected Output :
// 2016 is a leap year.
/* Your answer here
*/


// 5. Write a  program to read the age of a candidate and determine whether it is eligible for casting his/her own vote.
// Test Data : 21
// Expected Output :
// Congratulation! You are eligible for casting your vote.
/* Your answer here
*/
let c=21;
if(c>=18){
    console.log("Congratulations! You are eligible for casting your vote")
}else{
    console.log("You are not eligible for casting your vote")
}


// 6. Write a program to read the value of an integer m and display the value of n is 1 when m is larger than 0, 0 when m is 0 and -1 when m is less than 0.
// Test Data : -5
// Expected Output :
// The value of n = -1
/* Your answer here
*/
let m=-5;
if(m>0){
    console.log("n=1")
}else if(m==0){
    console.log("n=0")
}else{
    console.log("n=-1")
}

// 7. Write a  program to accept the height of a person in centimeter and categorize the person according to their height.
// Test Data : 135
// Expected Output :
// The person is Dwarf.
/* Your answer here
*/
let height=135;
if(height<=135){
    console.log("The person is Dwarf")
}else if(height>135 && height<=180){
    console.log("Normal")
}else{
    console.log("Tall")
}


// 8. Write a program to find the largest of three numbers.
// Test Data : 12 25 52
// Expected Output :
// 1st Number = 12,        2nd Number = 25,        3rd Number = 52
// The 3rd Number is the greatest among three
/* Your answer here
*/
let num1=12;
num2=25;
num3=52;
if((num1>num2)&&(num1>num3)){
    console.log("1st number is greatest among three")
}else if((num2>num3)&&(num2>num1)){
    console.log("2st number is greatest among three")
}else{
    console.log("3rd number is greatest among three")
}

// 9. Write a  program to accept a coordinate point in a XY coordinate system and determine in which quadrant the coordinate point lies.
// Test Data : 7 9
// Expected Output :
// The coordinate point (7,9) lies in the First quadrant.
/* Your answer here
*/
let X,Y;
X=7, Y=9
if(X>0 && Y>0){
    console.log("First quadrant")
}else if(X<0 && Y>0){
    console.log("Second quadrant")
}else if(X<0 && Y<0){
    console.log("Third quadrant")
}else if(X>0 && Y<0){
    console.log("Fourth quadrant")
}
// 10. Write a  program to find the eligibility of admission for a professional course based on the following criteria:
// Eligibility Criteria : Marks in Maths >=65 and Marks in Phy >=55 and Marks in Chem>=50 and Total in all three subject >=190 or Total in Maths and Physics >=140

// Input the marks obtained in Physics :65
// Input the marks obtained in Chemistry :51
// Input the marks obtained in Mathematics :72
// Total marks of Maths, Physics and Chemistry : 188
//  Total marks of Maths and Physics : 137
// Expected Output :
// The candidate is not eligible for admission.

/* Your answer here















*/


// 11. Write a program to calculate the root of a Quadratic Equation.
// Test Data : 1 5 7
// Expected Output :
// Root are imaginary;
// No solution.
/* Your answer here
*/
let A=1;
b=5;
c=7;
let discriminant= b*b -4 *A*c;
if(discriminant >0){
    root1=(-b + Math.sqrt(discriminant))/(2*A);
    root2=(-b - Math.sqrt(discriminant))/(2*A);
    console.log("roots of quadratic equation are $(root1) and");
}












// 12. Write a program to read roll no, name and marks of three subjects and calculate the total, percentage and division.
// Test Data :
// Input the Roll Number of the student :784
// Input the Name of the Student :James
// Input the marks of Physics, Chemistry and Computer Application : 70 80 90
// Expected Output :
// Roll No : 784
// Name of Student : James
// Marks in Physics : 70
// Marks in Chemistry : 80
// Marks in Computer Application : 90
// Total Marks = 240
// Percentage = 80.00
// Division = First
/* Your answer here










*/


// 13. Write a program to read temperature in centigrade and display a suitable message according to temperature state below :
// Temp < 0 then Freezing weather
// Temp 0-10 then Very Cold weather
// Temp 10-20 then Cold weather
// Temp 20-30 then Normal in Temp
// Temp 30-40 then Its Hot
// Temp >=40 then Its Very Hot
// Test Data :
// 42
// Expected Output :
// Its very hot.
/* Your answer here










*/


// 14. Write a program to check whether a triangle is Equilateral, Isosceles or Scalene.
// Test Data :
// 50 50 60
// Expected Output :
// This is an isosceles triangle.
/* Your answer here
*/
let x=50
y=50
z=60
if(x==y==z){
    console.log("Equilateral")
}else if(x==y || y==z || z==x){
    console.log("Isoceles")
}else if(x!=y && y!=z && z!=X){
    console.log("Scalene")
}


// 15. Write a program to check whether a triangle can be formed by the given value for the angles.
// Test Data :
// 40 55 65
// Expected Output :
// The triangle is not valid.
/* Your answer here
*/
let p=40;
q=55;
r=65;
if((p+q+r==180) && p!=0 && q!=0 && r!=0){
    console.log("The triangle is valid");
}else{
    console.log("The triangle is not valid");
}


// 16. Write a program to check whether a character is an alphabet, digit or special character.
// Test Data :
// @
// Expected Output :
// This is a special character.
// Hint: ASCII character
/* Your answer here










*/


// 17. Write a  program to check whether an alphabet is a vowel or consonant.
// Test Data :
// k
// Expected Output :
// The alphabet is a consonant.
/* Your answer here
*/


















// 18. Write a program to calculate profit and loss on a transaction.
// Test Data :
// Input buy price: 500
// Input sell price: 700
// Expected Output :
// You can booked your profit amount : 200
/* Your answer here
*/
let cp=500;
sp=700;
profit=sp-cp
loss=cp-sp
if(sp>cp){
    console.log("profit")
}else{
    console.log("loss")
}












// 19. Write a program  to calculate and print the Electricity bill of a given customer. The customer id., name and unit consumed by the user should be taken from the keyboard and display the total amount to pay to the customer. The charge are as follow :

// Unit Charge/unit
// upto 199 @1.20
// 200 and above but less than 400  @1.50
// 400 and above but less than 600  @1.80
// 600 and above    @2.00
// If bill exceeds Rs. 400 then a surcharge of 15% will be charged and the minimum bill should be of Rs. 100/-

// Test Data :
// 1001
// James
// 800
// Expected Output :
// Customer ID-NO :1001
// Customer Name :James
// unit Consumed :800
// Amount Charges @Rs. 2.00 per unit : 1600.00
// Surchage Amount : 240.00
// Net Amount Paid By the Customer : 1840.00
/* Your answer here










*/

// 20. Write a program to accept a grade and declare the equivalent description :

// Grade    Description
// E    Excellent
// V    Very Good
// G    Good
// A    Average
// F    Fail
// Test Data :
// Input the grade :A
// Expected Output :
// You have chosen : Average
/* Your answer here
*/
// let grade=A
// switch(grade){
//     case E:
//         console.log("Excellent");
//         break;
//     case V:
//         console.log("Very Good");
//         break;
//     case G:
//         console.log("Good");
//         break;
//     case A:
//         console.log("Average");
//         break;
//     case F:
//         console.log("Fail");
//         break;
// }

















// 21. Write a program to read any day number in integer and display day name in the word.
// Test Data :
// 4
// Expected Output :
// Thursday
/* Your answer here
*/
let num=4
switch(num){
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
}

















// 22. Write a program to read any digit, display in the word.
// Test Data :
// 4
// Expected Output :
// Four
/* Your answer here
*/
let digit=4
switch(digit){
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;
    case 4:
        console.log("Four");
        break;

}



















// 23. Write a program to read any Month Number in integer and display Month name in the word.
// Test Data :
// 4
// Expected Output :
// April
/* Your answer here
*/
let number=4
switch(number){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break; 
    case 10:
        console.log("October");
        break;    
    case 11:
        console.log("November");
        break;    
    case 12:
        console.log("December");
        break;       
}







// 24. Write a program to read any Month Number in integer and display the number of days for this month.
// Test Data :
// 7
// Expected Output :
// Month have 31 days