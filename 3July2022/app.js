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
        digit=n%10;
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