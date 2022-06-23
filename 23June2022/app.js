//HOF(High Order Function)
function b(x,y){
    return x+y;
}
function a(b){
    return b(9,8);
}
console.log(a(b));





//Print even numbers
function evenNumber(num){
    if(num%2==0){
        return "EVEN";
    }else{
        return "ODD";
    }
}
function z(evenNumber){
    return evenNumber(786);
}
console.log(z(evenNumber));