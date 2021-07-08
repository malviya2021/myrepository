let emp = {}; //object literal

console.log(emp);

console.log(typeof emp);

//modify above programe


let emp1 = {
            id:1234, 
            name:'Rahul', 
            salary:456123,
            dowork:function(){
                console.log(this.name + ' is working');
            }           
        };

console.log(emp1);
console.log(emp1.name);
console.log(typeof emp1);
console.log(emp1['salary']);
console.log(emp1.salary);   //another way 
console.log(typeof emp1.id);

emp1.dowork();




//again modify

let emp2 = {
    id:1234, 
    name:'Rahul', 
    salary:456123,
    age:12,
    dowork:function(){
        console.log(this.name, ' is doing some work');
}
    
    }           
console.log(emp2);
emp2.dowork();