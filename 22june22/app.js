function factorial(num,fact){
    if(num>0){
        fact=fact*num;
        return factorial(num-1, fact)
    }
    return fact;
}
console.log(factorial(6,1));

console.log(Math.log10(1000)+2)


let nn=123456789;
// let n= nn.toString();
// let a=(n.length/2)
// console.log(a)

var digit = Math.log10(nn)+1;
console.log(digit);
digit = parseInt(digit); 
console.log(digit); // length 
digit = parseInt(digit /2)
console.log(digit); // 2 mid 
digit = Math.pow(10,digit)
console.log(digit); // power 10 by putting our digit 100
digit = parseInt(nn / digit)
console.log(digit); 
digit = parseInt(digit % 10 )
console.log(digit); 
