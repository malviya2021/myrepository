let from = 10;
let to = 100;


for(var i=from; i<=to; i++){
      let result = true;
    for(var j=2; j<parseInt(i/2); j++){
        if(i%j==0)
        result = false
         break;
}
      if(result)   
    console.log(i);

}    