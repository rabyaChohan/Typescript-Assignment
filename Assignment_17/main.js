"use strict";
// Assignment no 17
// • Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
Object.defineProperty(exports, "__esModule", { value: true });
let guestName = ["Rabya", "Muneeba", "Kauser", "Nadia", "Farah"];
// guestName.forEach(guest =>{
//     console.log(`Dear ${guest} , You Are Cordially Invited to Dinner`);
// })
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make  it.
// let unabletoCome:string = guestName.splice(1,1)[0]
// console.log(chalk.blue(`Unable To Come ${unabletoCome}`))
// // • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// guestName.push('Ayan','Arif')
// console.log(guestName)
// // let unabletoCome:string = guestName.splice(1,1)[0]
// // console.log(chalk.blue(`Unable To Come ${unabletoCome}`))
// // • Print a second set of invitation messages, one for each person who is still in your list.
// guestName.forEach(guest =>{
//     console.log(`Dear ${guest} , You Are Cordially Invited to Dinner`);
// })
// guestName.unshift("Anum")           // • Add one new guest to the beginning of your array.
// guestName.splice(3,0,"Ayan")       // • Add one new guest to the middle of your array. 
// guestName.push("Arif")              // • Use push() to add one new guest to the end of your list.
// guestName.forEach(guest => {
//     console.log(`Dear ${guest}, Yor All Are Cordially Invited to Dinner`);
// });
//-----------------------------------Assignment No 17-----------------------------------------------------------------------------------
//You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
guestName.unshift("Aliyan", "Ali");
console.log(guestName);
console.log(" your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.");
// Shrinking Guest List:
while (guestName.length > 2) {
    let removeGuest = guestName.pop();
    if (removeGuest !== undefined) {
        console.log(`Sorry ${removeGuest} , You Are Not Invited`);
    }
}
// Add a new line that prints a message saying that you can invite only two people for dinner.
guestName.forEach(guest => {
    console.log(`Dear ${guest} Yor Both Are Invited For The Dinner`);
});
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
guestName.splice(0, guestName.length);
console.log("Updated List ", guestName);
