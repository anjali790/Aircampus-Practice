//print:-
// 1
// 01
// 101
// 0101
// 10101
// 01010
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