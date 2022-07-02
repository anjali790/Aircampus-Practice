let num=4;
for(i=1; i<=num; i++){
    star="";
    for(j=1; j<=num-i; j++){
        for(k=1; k<=i; k++){
            star+="*"
        }
    }
    console.log(star)
}