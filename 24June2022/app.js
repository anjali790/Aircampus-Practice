//Recursion
// function x(){
//     console.log("hello");
//     return x();
// }
// x();



//Print a number one time
function y(num){
    console.log(num);
    // return y(num)
}
y(8);




//Print a number infinite times
function z(num){
    console.log(num);
    return z(num);
}
z(10);




//Print same number
// function a(num){
//     if(num>0)
//         console.log(num);
//         return a(num-1
//             );
// }
// a(9);










// function z(num){
//     if(num>0){
//     console.log(num);
//     return z(num-1);
//     }
// }
// z(34);







// //factorial
// function x(num,fact){
//     if(num>0){
//         fact=fact*num;
//     // console.log(fact);
//     return x(num-1,fact);
//     }else{
//         return fact;
//     }
// }
// console.log(x(7,1));