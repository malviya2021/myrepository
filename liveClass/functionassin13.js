//true if num1 is greater than atleast one

function x(num1,num2,num3) {
   
    var result = false;
    if(num1>num2 || num1>num3)
       result = true;
       return result;
   
};
   console.log(x(11,12,10));
