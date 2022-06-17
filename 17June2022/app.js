//Armstrong number
let num=371;
let firstDigit=Math.floor(num/100);
let d=Math.floor(num/10);
let secondDigit=d%10;
let thirdDigit=num%10;
if(((firstDigit**3)+(secondDigit**3)+(thirdDigit**3))==num){
    console.log("Number is Armstrong number");
}else{
    console.log("Number is not Armstrong number");
}




//Palindrome number
let num1=292;
let first_digit=Math.floor(num1/100);
let b=Math.floor(num1/10);
let second_digit=b%10;
let third_digit=num1%10;
let reveseNumber=((third_digit*100)+(second_digit*10)+first_digit);
if(reveseNumber==num1){
    console.log("Number is Palindrome number");
}else{
    console.log("Number is not Palindrome number");
}
