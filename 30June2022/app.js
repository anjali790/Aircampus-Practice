//Pyramid pattern
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