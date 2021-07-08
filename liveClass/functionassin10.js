// Fabonicci Series

function fab(num){
    var i = 0;
    var j = 1;
    var k;
     
    while(i<=num){
         console.log(i + ' ');
        k = i + j;
        i = j;
        j= k;

    }
            return fab;
}
       console.log(fab(8));



//conversion of time from second to hour

function x(sec) {
    time = sec/60;
    return time;   
};
  console.log(x(120));
  