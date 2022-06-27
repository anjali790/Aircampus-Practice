//---------------------------------------------Loops Practice----------------------------------------------//
//Print all digits of a given number
let n=134678,digit;
while(n!=0){
    digit=n%10;
    console.log(digit);
    n=Math.floor(n/10);
}






//Print the sum of all the digits of a number
let num=24537, rem, sum=0;
while(num!=0){
    rem=num%10;
    sum+=rem;
    num=Math.floor(num/10);
}
console.log(sum);





//Print even digit of a given number
let num1=543768,remainder;
while(num1!=0){
    remainder=num1%10;
    num1=Math.floor(num1/10);
    if(remainder%2==0){
        return remainder;
    }else{
        console.log("odd");
    }
    
}

