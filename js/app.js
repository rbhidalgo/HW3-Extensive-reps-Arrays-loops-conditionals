// Write a for loop that will log the numbers 1 through 20.

for (let i = 1; i <= 20; i++) {
    console.log([i]);
}

// Write a for loop that will log only the even numbers in 0 through 200.

for (let i = 0; i <= 200; i+=2) {
    console.log([i]);
}

// Write code that logs "Love me, pet me! HSSSSSS!" 20 times.

// For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.

// Hint: You will need to use Math.random()

const phrase = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]
// loop to run "phrase" 20 times
for (let i = 1; i <= 20; i++) {
    console.log("Love me, pet! HSSSSS!");
    // if to run even numbers
    if (i % 2 === 0) {
        // gets random phrase
        console.log(phrase[Math.floor(Math.random() * 3)]);
    }
}

// Write a javascript application that logs all numbers from 1 - 100.

// If a number is divisible by 3 log "Fizz" instead of the number.

// If a number is divisible by 5 log "Buzz" instead of the number.

// If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

for (let i = 1; i <= 100; i++) {
    
    if (i % 15 === 0) {
     console.log("FizzBuzz") 
    } 
    else if (i % 5 === 0) {
    console.log("Buzz") 
    }
    else if (i % 3 === 0 ) { 
    console.log("Fizz")
    } else {
    console.log(i);
    }
}

// Use the following arrays to answer the questions below (name, age, hometown):

const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];

// Jim Clark decides that Kenny can't be named "Kenny" anymore. 
// Remove "Kenny" from the kenny array and replace it with "Gameboy".

kenny[0] = "Gameboy"; {
    console.log("Jim Clark changed Kenny's name to " + kenny[0]);
}


// Jim Clark just had his birthday; change jimClark's array to reflect him being a year older. 
//Don't just hard code 187--pretend that you didn't already know that his age is 186, 
//and write your code to just make him a year older than whatever age he was.

// add +1 to the number [1] inside the object jimClark

jimClark[1] += 1; {
    console.log("Jim Clark just turned " + jimClark[1])
}

// Ryan is Batman maybe. Or possibly Robin. Change Ryan's hometown from "Denver" to "Gotham City".

ryan[2] = "Gotham City"; {
    console.log("Ryan might be Batman or Robin, he's from " + ryan[2]);
}

// Reuben left Durham 5 years ago to come to Chicago. First, remove "Durham" from Reuben's array, and then add "Chicago". 
//(Note: remove and then add is different from simply changing the value at that index.)

reuben.pop();
reuben.push("Chicago");
console.log("Reuben now lives in " + reuben[2])

// Jim Haff could be literally anywhere in the world. Remove "All cities" from his array, then pick any 3 cities you like, 
//and add them to Jim's array. If you did it in 3 lines of code that's fine, but see if you can do it in one line of code

jimHaff.pop();
jimHaff.push("Los Angeles", "Chicago", "Denver");
console.log("Jim is all over the place " + jimHaff[2] + ", " + jimHaff[3] + ", " + jimHaff[4])

// Bonus: Whoops! Jim Haff is actually only allowed to be in one of two cities. Whatever the first of the 3 cities for Jim Haff is now, 
//remove it from the array using .splice()

jimHaff.splice(2,1);
console.log("Jim is only allowed to be in one of two cities " + jimHaff[2] + " or " + jimHaff[3])

// Create an array with the members of the ninja turtles 
// (Donatello, Leonardo, Raphael, Michaelangelo)

const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

// Use a for loop to call .toUpperCase() on each of them 
// and print out the result.

for (let i = 0; i < ninjaTurtles.length; i++) {
        ninjaTurtles[i] = ninjaTurtles[i].toUpperCase();
}
console.log(ninjaTurtles);

// Bonus: Modify the answer you just wrote. Instead of all letters 
// being uppercase, make the letters alternate back and forth between 
// uppercase and lowercase.
