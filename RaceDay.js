//Race Day


 let raceNumber = Math.floor(Math.random() * 1000);

// did runner register early, set to yes
let registeredEarly = true;

// runner's age
let runnerAge = 26;

// checks runner's age and if registered early to determine race number
if(runnerAge >= 18 && registeredEarly === true) {
    raceNumber = raceNumber + 1000;
}

// checks runner's age and if registered early or late to determine time they will race and gives their race number
if(runnerAge > 18 && registeredEarly === true) {
    console.log(`Your race time is 9:30am and your race number is ${raceNumber}`);
} else if(runnerAge > 18 && registeredEarly === false) {
    console.log(`Your race time is 11:00am and your race number is ${raceNumber}`);
} else if(runnerAge < 18) {
    console.log(`Your race time is 12:30pm and your race number is ${raceNumber}`);
} else {
    console.log('Proceed to the registration desk.')
}