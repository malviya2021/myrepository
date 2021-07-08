// find prime number
let num = 2;
let isPrime = true;

if(num<=1)
      isPrime = false;

 for(i=2; i<num; i++)
      if(num%2==0) {
          isPrime = false;
          break;
      }
     
    if(isPrime)
    console.log(num + ' is prime');
        else
     console.log(num + ' is not prime');
              






//let num1 = 17;                                                                     
//let isPrime = true;

//if(num1==1)
//isPrime = false;

//for(i=2; i<num1; i++)
      // if(i%2==0){
      // isPrime = false;
       // break;
//}
       //if(isPrime)
       //console.log(num1 + ' is a prime number');
       //else
      // console.log(num1 + ' is  not a prime number');
       
       
       
    