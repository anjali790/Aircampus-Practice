//Take 4 numbers and find and return biggest of them. If all three numbers are same than print "None of them is biggest"
//if there are two numbers same as biggest than also print "None of them is biggest"
function biggestNumber(a,b,c,d){
    switch(a>b && a>c && a>d){
        case true:
            return a;
            break;
    }
    switch(b>a && b>c && b>d){
        case true:
            return b;
            break;
    }
    switch(c>a && c>b && c>d){
        case true:
            return c;
            break;
    }
    switch(d>a && d>b && d>a){
        case true:
            return d;
            break;
    }
    switch(a==b || b==c || c==d || d==a){
        case true:
            return "None of them is biggest"
            break;
    }
}
console.log(biggestNumber(46,89,98,103))






//Take a time in 24 hour fomrat and onvert it to 12 hour format. Also if hour or minute is of single digit add "0" before it
function amPm(hr,min){
    if(hr==0){
      if(min<10) min= '0'+min
      hr= hr<10? '0'+hr:hr;
      return ('12:'+min+' AM')
    }else if(hr>=12){
      hr=hr-12;
      min= min<10 ? '0'+min:min;
      hr= hr<10? '0'+hr:hr;
      if(hr==0){
        return ('12:' +min+' PM');
      }else{
        return (hr+':'+min+' PM');
      }
    }else{
      min= min<10 ? '0'+min:min;
      hr= hr<10? '0'+hr:hr;
      return (hr+':'+min+' AM')
    }
  }
  console.log(amPm(0,25))
  exports.amPm = amPm