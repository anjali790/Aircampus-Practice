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







let n=4;
for(i=1; i<=n; i++){
  star='';
  for(j=1; j<=n; j++){
    if(i==1 || i==4 || j==1 || j==4){
      star+='* ';
    }else{
      star+='  ';
    }
  }
  console.log(star)
}