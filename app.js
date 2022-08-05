let maximum = parseInt(prompt("Enter A Maximum Number."));

while(isNaN(maximum)){
    maximum = parseInt(prompt("Please Enter A Valid Number."));
}
let targetNum = Math.floor(Math.random() * maximum)+1
let guess = parseInt(prompt("Guess A Number."));
let attempts = 1;

while(parseInt (guess) !== targetNum){
    attempts++;
    if(guess === 'q') break;
    else if(guess > targetNum){
        guess = prompt("Too High.Enter Again!");
    }
    else if (guess < targetNum){
        guess = prompt("Too Low.Enter Again!");
    }
} 
if(guess === 'q'){
    console.log("You Quit!");
}
else{
    console.log(`You Got it! it took ${attempts} guesses`);
}