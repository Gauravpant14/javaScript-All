let reg = /gaurav/g
//let reg = /gaurav/i; //this is reg ex literal in js //g is gloBAL FLAG IT WILL SEARCH GLOBALLY
// let reg = /gaurav/g;
// function to match expressions

let s = "Hey there everyone gaurav is here and gaurav";

// 1. exec() - This function will return an array for match or null for no match

let result = reg.exec(s);

//console.log(result);

//2. test() - returns true or false

let result1 = reg.test(s);

//console.log(result1);  //---> This will only print true if the "reg" is there in the string

//3. match()- it will return an array of results or null

//let result2 = reg.match(s); --> This is wrong
let result2 = s.match(reg);
console.log(result2);

//4. search() ret