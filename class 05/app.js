

let students = ["Ahmer", "Jahanzaib", "Sultan", "Noman", "Mudassir", "Owais"] 
console.log(students) 

console.log ("Welcone to " + students[ 2])

students.pop() ; 
students.pop() ; 
students.pop() ; 
students.pop() ; 

console.log(students)


students[2] = "All student"
console.log(students)
console.log ("Welcone to " + students[ 2])


let mixedArray = ["Ahmer", "Jahanzaib", "Sultan", "Noman", "Mudassir", "Owais", 1, 2, 3, 4, 11, 12, 13 ]

console.log(mixedArray)

mixedArray.pop();
mixedArray.pop();
mixedArray.pop();
mixedArray.pop();
console.log(mixedArray)

mixedArray.push("zubair",  "zaryab");
console.log(mixedArray)



mixedArray[6] = 2
mixedArray[7] = 4
mixedArray[8] = 6
console.log(mixedArray)

let number = [ 1, 2, 3, 4, 5, 6, 7, , 8, 9, 0, 10, 20, 30, 40, 50]
console.log(number)


number[7] = false
console.log(number)

number.shift();
number.shift();
number.shift();
number.shift();
console.log(number)

number.unshift("anynumber");
number.unshift("anyvalue");
console.log(number)





