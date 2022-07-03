//Take a number and return all the even digits of the number.Return a list of even digits of the number if multiple digits are combine it in string.Return -1 in case there are no even digits
function even(n){
    let str="",digit;
    if(n==0){
        return "0";
    }else{
    while(n!=0){
        digit=n%10;
        n=Math.floor(n/10);
        if(digit%2==0){
           str=digit+str; 
        }
    }
        return str==""? "-1": str;
    
  }
}
console.log(even(12067));






//Take an integer and print 'aircampus' if the input integer is an Aircampus number, otherwise print 'no'.
//A number is called Aircampus number if the sum of its own digits each raised to the power of the number of digits is equal to the original number itself.
function sum(n){
    let temp=n,digit,count,sum=0;
    while(n!=0){
        n=Math.floor(n/10);
        count++;
    }
    n=temp;
    while(n>0){
        digit=n%10;
        n=Math.floor(n/10);
        sum+=digit**count;
    }
    return sum==temp ? "aircampus" : "no";
}
console.log(sum(123));






//This will be pattern: 
//5
//4 5
//3 4 5
//2 3 4 5
//1 2 3 4 5
//sum of every element in this is 55
function sum(n){
    let sum=0;
    for(let i=5; i>0; i--){
        for(j=i; j<=n; j++){
            sum+=j;
        }
    }
    return sum;
}
console.log(sum(5))