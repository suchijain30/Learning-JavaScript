let abc = 33 
let pqr = "33"

console.log(typeof abc)
console.log(typeof pqr)
let xyz = Number("33")

let aaa = "3aaa"
let bbb = Number(aaa)



console.log(typeof bbb)  // O/P :- number
console.log(bbb)   // O/P:-  Nan 

// so to Nan also in output its is giving number as datatype 


let score = null

console.log(typeof score)  // O/P:- object 

let result = Number(score)
console.log(typeof result)  // O/P :- number 
console.log(result)     // O/P :- 0