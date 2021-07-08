let emp = new Object();

emp.id = 123;
emp.name = 'Rahul';

emp.doWork = function(){
    console.log(this.name , ' is working');
}


console.log(emp);
console.log(typeof emp);
emp.doWork();


///another 

let emp1 = {
    id:123,
    name:'Rahul'

}

let emp2 = emp1;

emp2.nmae = 'jj';

console.log(emp1.name);
console.log(emp2.name);




