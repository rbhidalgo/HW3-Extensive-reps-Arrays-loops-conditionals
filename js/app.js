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
