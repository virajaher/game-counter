// add function that triggers the onclick event of the points buttons and adds points according to the buttons.
// reset all the values to zero with the onclick event of the restart button
// add fouls by using subtract funtion and creating button for foul
// timer can be place around restart button and we can use laps that are similar to the passenger counter app
// maxpoints = 99

let count = 0;
let homeCounter = document.getElementById("home-count-el")
let guestCounter = document.getElementById("guest-count-el")

// Home points
function incrementOne() {
    count += 1;
    homeCounter.textContent = count;
}

function incrementTwo() {
    count += 2;
    homeCounter.textContent = count;
}

function incrementThree() {
    count += 3;
    homeCounter.textContent = count;
}

// Guest Points
function incOne() {
    count += 1;
    guestCounter.textContent = count;
}

function incTwo() {
    count += 2;
    guestCounter.textContent = count;
}

function incThree() {
    count += 3;
    guestCounter.textContent = count;
}

//Restart
function restart() {
    count = 0;
    homeCounter.textContent = count;
    guestCounter.textContent = count;
}

