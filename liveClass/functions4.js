function funcA(a,b) {
    return a + b;
}

function funcA(c) {
    return c;
}

console.log(funcA(2));
console.log(funcA(3,4));

// JavaScript does not support function overloading
//So if it sees/parses two or more function
//with a same name, it will just consider the
// last defined function and overwrite the previous ones
