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