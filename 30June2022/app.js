//
let n=4;
for(let i=1; i<=n; i++){
    star='';
    for(let j=1; j<=n-i; j++){
        star+=" ";
    }
    for(let k=0; k<2*i-1; k++){
        star+="*"
    }
    console.log(star)
}




let num=6;
for(i=1; i<=num; i++){
  let star=''
  for(j=1; j<=i; j++){
    let count= 0
    if((i+j)%2!=0){
      count=0;
    }else{
      count=1;
    }
    star=star+count;
  }
  console.log(star)
}