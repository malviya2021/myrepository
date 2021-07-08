var x = 10;
var y = '10';
console.log(x==y);  //op: true ,only value compared.


var x = 10;
var y = '10';
console.log(x===y);  //op: false  ,value and data type both compared compared.


function add(num1,num2) {
    let sum = num1 + num2;
    return sum;

}

let result1 = add(1,2);
console.log(result);
let result2 = add(300,500);
console.log(result2);












function isEven(num){
    if(num%2==0)
    return true;
    else
    return false;
}

console.log(isEven(10));
console.log(isEven(11));
console.log(isEven(12));