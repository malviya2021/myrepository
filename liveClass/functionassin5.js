//4.find the factorial of a number

function fact(num1) {
    factorial= 1;  
 if(num1==0 || num1==1) {
        factorial = num1;
 }
else
      for(var i=num1; i>=1; i--) {
         factorial = factorial*i;
     //return factorial
}
        console.log('factorial  is : ' + factorial);  
};

fact(5);
fact(4);         
fact(3);
fact(6);