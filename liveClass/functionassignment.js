// 1.function of add to numbers
function add(num1,num2,num3) {
var sum = num1 + num2 + num3;
}
console.log(sum);  //return sum
                   // or var result = add(40,50,60)
                   // console.log(result)
add(40,50,60);
add(10,30,90);
add(12,52,40);

//or

function add(num1,num2,num3){
return num1 + num2 + num3;
}
console.log(add(12,11,15));




//another way of function calling

function doSomething(whatTodo) {
    console.log('Doing : ' + whatTodo);
}

doSomething('Coding');
doSomething('Drink cofee');


//2.programe for finding speed 

function div(distance,time) {
     var  speed = distance/time;
      // return speed;

       console.log(speed)
}

div(45,9);
div(10,2);

//3. programe for finding area of circle

function multy(radious) {
    var area = 3.14*radious*radious;
    //return area
    

    console.log(area);
};  

    multy(50);
    multy(10);

 
 //4.find the factorial of a number
 
         var ans = 1;
   function fact(num1) {
         
    if(num1==0 || num1==1) {
            ans=num1
    }
   else
         for(var i=num1; i>=1; i--) {
            ans = num1*i;
        
}
          return ans;          
}         
              console.log(ans);  

  fact(5);
  fact(10);          


//5. even number or not

function x(num) {
    if(num%2==0)
    console.log(true);
    else
    console.log(false);
};

x(51);
x(150);



//6. true if odd otherwise false

function x(num) {
    if(num%2==0)
    console.log(false);
    else
    console.log(true);
};

x(51);
x(150);



//   function x(num) {
//      if(num%2==0)
//      console.log(false)
//      else
//      for(var i=2, i<=num, i++){
//          if(num%i==0)
//          console.log(false)
//          break;
//      }

//  }
//        console.log(true);


// check a number divisible by 6 or not

function x(num) {
    if(num%6==0)
    console.log(true);
    else
    console.log(false);

};

x(54);
x(19);
x(42);

//conversion of time from second to hour

function x(sec) {
    time = sec/60;
    console.log(time);   
};
  
x(60);
x(120);

// count number of digit in an integer

// function x(num1) {
 //   result = true;
 //   for(i=1,result>=10,i++);
 //       result = num1/10;          
 // };
 //            console.log(i++);
//x(1000);



//programe for calculate run rate

function x(Target,currentScore,maxOver,overBowlled) {
          currentRunRate = (Target-currentScore)/(maxOver-overBowlled);
          console.log(currentRunRate);  
};

x(300,50,100,20);
x(300,50,200,20);


//
















