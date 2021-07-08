//print prime numbers in a range 1 to 100
var From = 1;
var to = 100;

for(var i=From; i<=to; i++){
    for(var j=2; j<parseInt(i/2); j++){
        if(i%j==0)
             break;
    }
    if(j==parseInt(i/2))
         console.log(i);
}
