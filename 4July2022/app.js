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








//Print the pattern given below, using loops.
//    2
//   24
//  246
// 2468
//246810 
let n=5;
for(let i=1; i<=n; i++){
    star="";
    for(let j=1; j<=n-i; j++){
        star+=" ";
    }
    for(let k=1; k<=i; k++){
        star+=k*2;
    }
    console.log(star)
}








//Print the pattern given below, using loops.
//    *
//   ***
//  *****
// *******
//*********
let num1=5;
for(let i=1; i<=num1; i++){
    star="";
    for(let j=1; j<=num1-i; j++){
        star+=" ";
    }
    for(let k=1; k<=2*i-1; k++){
        star+="*";
    }
    console.log(star);
}







Print the pattern given below, using loops.

Input:
No input is required.

Output:
1
23
123
1231
23123


