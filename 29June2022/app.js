let num=6;
let count=0;
for(i=1; i<=num; i++){
    star='';
    for(j=1; j<=i; j++){
        if((i+j)%2!=0){
            count=0;
        }else{
            count=1;
        }
        star+=count;
    }
    console.log(star);
}