// Assignment No 03

// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName: string = "Rabya Chohan"

console.log("LowerCase:",personName.toLowerCase())
console.log("UpperCase:",personName.toUpperCase())



let userName: string[ ] = personName.split( " " );
let titlecaseName: string  = ""
for (let i = 0; i < userName.length; i++) {
 titlecaseName +=userName[i].charAt(0).toUpperCase() +userName[i].slice(1).toLowerCase()+""
};

console.log("TitleCase",titlecaseName)