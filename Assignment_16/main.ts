// Assignment no 16
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

import chalk from "chalk";
import inquirer from "inquirer";




let guestName : string [] = ["Raby", "Muneeba" , "Kauser" , "Nadia" , "Farah"]

guestName.forEach(guest =>{
    console.log(`Dear ${guest} , You Are Cordially Invited to Dinner`);
})
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make  it.

let unabletoCome:string = guestName.splice(1,1)[0]
console.log(chalk.blue(`Unable To Come ${unabletoCome}`))

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
guestName.push('Ayan','Arif')
console.log(guestName)


// • Print a second set of invitation messages, one for each person who is still in your list.


guestName.forEach(guest =>{
    console.log(`Dear ${guest} , You Are Cordially Invited to Dinner`);
})



