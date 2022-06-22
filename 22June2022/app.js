//IIFE(Immediately invoked function expression) function
let ans=(function sum(x,y){
    return (x+y);
})(35,87);
console.log(ans);






//Find middle digit of n number
function middleDigit(n){
    let digits=parseInt(Math.log10(n)+1);
    n=parseInt(parseInt(n/Math.pow(10,parseInt(digits/2)))%10);
    return n;
}
console.log(middleDigit(3458907));