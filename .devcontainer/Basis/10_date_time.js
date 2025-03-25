//Unlike most global objects, Temporal is not a constructor. You cannot use it with the new operator or invoke the Temporal object as a function. All properties and methods of Temporal are static (just like the Math object).

let mydate = new Date()

console.log(mydate)
console.log(mydate.toDateString() ) // only day , months, date , year
console.log(mydate.getDate()) // only date 
console.log(mydate.toString()) //  Tue Mar 25 2025 13:08:26 GMT+0000 (Coordinated Universal Time)
console.log(mydate.toTimeString())  // 13:08:26 GMT+0000 (Coordinated Universal Time)

console.log(mydate.getDay())   // 2 for tuesday 
console.log(mydate.getTimezoneOffset())

console.log(mydate.toLocaleString('default',{
    weekday:"long",
    timeZoneName: "long"
}) )           

 

console.log(typeof mydate) 

let mybirthday = new Date(2003,5, 30)  // june = 6 but here we are using 5 beacuse months start from 0
// Date Format :- year , months , hour , min , sec  , for time ( 24)

console.log(mybirthday.toDateString())

let birthday = new Date("05-30-2003")
console.log(mybirthday.toDateString())

let birth = new Date("30-05-2003") 
console.log(mybirthday.toDateString())


let currentdate = Date.now()

console.log(currentdate)  // result in milliseconds

console.log(Math.floor(Date.now()/1000))        // mostly used for comparison 

let newdate = new Date()

console.log(newdate)

 

 


 
