let num=5;
for(i=1; i<=num; i++){
    star="";
    for(j=1; j<=num-i; j++){
        star+=" "
       }   
       for(k=1; k<=i; k++){
            star+="*"
        }
    console.log(star)
}







let num1=5;
for(i=num1; i>=1; i--){
    star="";
    for(j=1; j<=num1-i; j++){
        star+=" ";
    }
    for(let k=1; k<=i; k++){
        star+="*"
    }
    console.log(star)
}