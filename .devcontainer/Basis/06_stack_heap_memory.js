// STACK :- pRIMITVE  ( provide object :- change in copy value not in original )
// Heap :- Non Primitive  ( change in original value )

let sname = "suchi"
let student = sname ;

console.log(student)

sname = "Jain"
console.log(sname)
console.log(student)   // no change in original value 


let info = {
    email: "suchijai99@gmail.com" ,
    phone : 98939 
}
let info2 = info 

console.log(info)
console.log(info2)

info2.email = "suchijai63@gmail.com"

console.log(info)   // value changed in info while we changed the value of email in info2

