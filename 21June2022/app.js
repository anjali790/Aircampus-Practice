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