// ticket number rewards 

function ticket(num) {

    if(num%4==0)
    console.log(6);
    if(num%7==0)
    console.log(10);
    if(num%4==0 && num%7==0)
    console.log(20);
    if(num%4!==0 && num%7!==0)
    console.log(0);
}

ticket(28000);