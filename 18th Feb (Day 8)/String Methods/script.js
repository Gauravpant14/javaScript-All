var s1 = "Hello There EveryOne"
var s2 = "Welcome for String Methods and Methods that is imp"

//charAt()
console.log(s1.charAt())

//charCodeAt()
console.log(s1.charCodeAt(1))

//concat()
console.log(s1.concat(" " + s2))

//endsWith() --> if string ends with specific word,
// then it'll return true either false
console.log(s1.endsWith("everyone"))  

//fromCharCode() --> it'll give the asociated word for char code 
console.log(String.fromCharCode(101))  

//includes() --> return true if it finds the word
console.log(s1.includes("EveryOne"))

//indexOf() --> return the first occourence position
//              of given item
console.log(s2.indexOf("Methods"))

//lastIndexOf() --> return the position of 
//                  last found occorence of given item

console.log(s2.lastIndexOf("Methods"))