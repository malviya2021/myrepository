 //Find a number is prime number or not
 function isPrime(num) {

   isPrime = true;
  if(num<2)
  isPrime = false;
    for(var i=2; i<num; i++) {
          if(num%i==0)
            isPrime = false;
            break;
          }
         return isPrime;

      } 
    console.log(isPrime(16));




