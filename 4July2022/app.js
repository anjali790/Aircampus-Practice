//Print the pattern given below, using loops.
//    1
//   12
//  123
// 1234
//12345 
let num=5;
for(let i=1; i<=num; i++){
    star="";
    for(let j=1; j<=num-i; j++){
        star+=" ";
    }
    for(k=1; k<=i; k++){
            star+=k;
        }
    console.log(star);
}

