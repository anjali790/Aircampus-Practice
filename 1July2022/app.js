let num=5;
let count=1;
for(let i=1; i<=5; i++){
    let space=" ";
    let star='';
    for(let j=1; j<=i; j++){
        if(count<=9){
            space="  "
        }
        star=star + `${count++} `+ space;
    }
    console.log(star)
}










// console.log("first");
// setTimeout(function(){
//     console.log("hello");
// },5000)
// setTimeout(function(){
//     console.log("calling");
// },2000)
// console.log("second");