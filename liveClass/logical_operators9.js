console.log( 1 || 0);
// 1 (1 is true value)

console.log( null || 1);
// 1 (1 is the first truthly value)

console.log( null || 0 || 1);
// 1 ( the first truthy value)

console.log( undefined || null || 0);
// 0 (all falsy,return return the last value)
