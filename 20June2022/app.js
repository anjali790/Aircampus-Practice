//Accept the number of days from the user and calculate the charge for library according to following :
//Till five days : Rs 0/day.
//Six to ten days : Rs 3/day.
//11 to 15 days : Rs 4/day
//After 15 days : Rs 5/day
function calculateCharge(number_of_days){
    let charge;
    if(number_of_days<=5){
      return number_of_days*0;
    }else if(number_of_days>=6 && number_of_days<=10){
      return 5*0+(number_of_days-5)*3;
    }else if(number_of_days>=11 && number_of_days<=15){
      return 5*0+5*3+(number_of_days-10)*4;
    }else if(number_of_days>15){
      return 5*0+5*3+5*4+(number_of_days-15)*5;
    }
  }
  console.log(calculateCharge(10))
  exports.calculateCharge = calculateCharge








