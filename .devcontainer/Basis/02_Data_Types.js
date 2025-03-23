"use strict";   // treat js code as new version 

// alert("be safe")       we are using nodejs not browser so error will come 


// DataType :- Primitive & Non-Primitive(Reference)


// Primitive :- Number , string , null , undefined , symbol , BigInt , Boolean
//Refernce :- array , object , Function

let name = "suchi" // String
let age = 21       // Number >= 2^53
let big_number = 98939173281187709175628349084562n    // Bigint

console.log(typeof big_number)

let islogged = true    // Boolean
let state;         // Undefined  = 
// Null == standlone value  ( it is a object)
// Symbol   == whenever we are talking about unquiness

let id = Symbol('123')
let accountid = Symbol('123')

console.log(id === accountid) // false
console.log(id == accountid)  // false 
// Object


console.log(typeof "suchi")
console.log(typeof age)
console.log(typeof null)   // proved null is a object 
console.log(typeof undefined)



// Refernce type ( Non - Primitive)

//Array :-

let myarray = ["abc", "xyz", "pqr"]
let mynum = [1 ,2 , 3]

// Object:- 

let myfriendinfo={
    name: "abcdefghi",
    age: 18 ,
    degree: "B.Tech" 
}

// Function :- 
let myfunc= function()
{
    console.log("suchi")
}

console.log(typeof myfunc)          // o/p :- function object

// 