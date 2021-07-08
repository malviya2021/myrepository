// count number of digit in an integer

 function x(num) {

    var result = 0;
if(num>=1)
  ++result;
  while(num/10>=1){
      num/=10;
      ++result;
    // for(result; num/10>=1; ++result) {
         // num/=10;
     }
  
       return result;
}
console.log(x(1000));    
