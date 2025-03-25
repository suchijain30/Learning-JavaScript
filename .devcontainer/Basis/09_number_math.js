let marks = 100
console.log(marks)

let score = new Number(200)
console.log(score)

console.log(score.toString())
console.log(score.toString().length)
console.log(score.toFixed(2))   // fixing value after decimal


// precision 
// Range Error :- Thrown if precision is not between 1 and 100 (inclusive).//

let num = 100.13  
console.log(num.toPrecision(2))  
console.log(num.toPrecision(3))  
console.log(num.toPrecision(4)) 

let hunders = 1000000
console.log(hunders.toLocaleString())   // add commas according to us style 
console.log(hunders.toLocaleString('en-IN'))   

// MATHS 

console.log(Math.abs(-1))
console.log(Math.round(4.6))  // 5 , if 4.4 = 4 
console.log(Math.ceil(4.2)) // 5
console.log(Math.floor(4.9))  // 4 

let mynum = [1 ,2 , 3]
console.log(Math.min(mynum))  // OUTPUT NAN because Math.min() does not accept an array directly

// so we have to way
console.log(Math.min(...mynum))  //  spread operator (...) to pass the array elements as individual arguments

console.log(Math.min(5,2,4,3))

// same like max


console.log(Math.random()) // value will always be between 0 and 1

console.log(Math.random()*10) 
//value can be zero also so to handle that case  
console.log(Math.random()*10+1)

 