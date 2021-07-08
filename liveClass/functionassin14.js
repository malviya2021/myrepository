//find prime number usinf function

function isPrime(from, to) {
    
    
    for( var i=from; i<=to; i++){
        for(var j=2; j<parseInt(i/2);j++){
            if(i%j==0)
            break;
            }
        
        if(j==parseInt(i/2))
            console.log(i);
    } 
}
//isPrime(1,100);
isPrime(1,200);