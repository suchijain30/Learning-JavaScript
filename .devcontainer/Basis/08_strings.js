// String Interpolation 

let sname = "suchi"
let postion ="software developer intern"
let company = "xyz"

console.log(sname[2])


console.log(`my name is ${sname}, currently i am ${postion} at ${company}`)
console.log(`my name is ${sname.length}, currently i am ${postion} at ${company}`)
console.log(`my name is ${sname.toUpperCase()}, currently i am ${postion} at ${company}`)
// here length is function that we can use using dot ( there are so many )

let user = new String('suchi')  // KEY-VALUE Pairs
console.log(user)
console.log(user[2])

console.log(user.__proto__)

console.log(user.toUpperCase())
console.log(user.charAt(2))

console.log(user.indexOf('u'))

let myname = 'suchijain'

let firstname = myname.substring(0,5)  // 5 char will not be included
console.log(firstname)

let lastname = myname.slice(-4,9)  // 
console.log(lastname) 


let dbname = "     abcxyz     "  // space is there string 

console.log(dbname)
console.log(dbname.trim())   // remove space from string
console.log(dbname.trimStart())
console.log(dbname.trimEnd())


let url = "https://www.linkedin.com/in/suchi-jain-b77b9a239/"

console.log(url.replace('-','%'))  // replace '-' with '%' sign in url


console.log(url.replace(/-/g, '%'));  // // replace all '-' with '%' sign in url

console.log(url.includes('suchi'))  // return true if suchi is present in url 

let linkedinid = "suchi-jain-b77b9a239"

console.log(linkedinid.split('-')) // creates a array of  string