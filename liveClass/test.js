var str1 = ('felight.io');
console.log(str1);

var str1 = ('felight\nio');
console.log(str1);

var str1 = ('felight\bio');
console.log(str1);

var str1 = ('felight\rio');
console.log(str1);

var str1 = ('felight + true');
console.log(str1);

var str1 = ('felight' +1 + true);
console.log(str1);

console.log(1 +1 +1 + 'a');

console.log('a' + 1 + 1 + 1 );

console.log(1 + "st" + " Rank");
console.log( 1 +1 );
console.log( '1' + 1);
console.log( '1' + 1 + 1);
console.log( '1' + 1 - 1);
console.log( 10 + 10 + '1' -1);
console.log( 'a' - 1);

let str = 'felight io';
console.log(str.toUpperCase());
console.log(str.toLocaleLowerCase());

console.log(str.charAt(5));


console.log(str.replace('o','0'));
let strUpper = str.toUpperCase();


let contacts = 'vinay:123215622225211, rahul:6952452565223,felight io: 154514552';
let result = contacts.split(',');

console.log(result[0]);
console.log(result.length);

for(var i=0; i<result.length; i++);
console.log(result[i]);






let from = 1;
let to = 100;

for(let j=from; j<=to; j++) {
    let isPrime = true;
    if(j==1)
           isPrime = false;

        for(let i=2; i<j; i++)
            if(j%i==0)  {
                isprime = false;
                 break;
            }

            if(isPrime)
                 console.log(j); 
            }





            function add(){
                let num1 = 100;
                let num2 = 200;
                let sum = num1 + num2;
                console.log(sum);

            }
                add();
                add();
                add();

                function add(num1,num2) {
                    let sum = num1 + num2;
                    console.log(sum);

                }
            add(1,2);
            add(300,500);
            add(30,500);


            let func1 = function dosomething() {
                console.log('doing something');

            } 
       func1();

       console.log(func1);
       console.log(typeof func);

// add without function name
       let add = fuction(num1,num2){
           let sum = num1 + num2;
           return sum;

       }
               
           console.log(add(123,455));







