// Set the current date
let today = moment();
$("#currentDay").text(today.format("MMM Do YYYY HH:mm A"));

// set variables
// let sevenAM = document.getElementById("7am");
// let eightAM = document.getElementById("8am");
// let nineAM = document.getElementById("9am");
// let tenAM = document.getElementById("10am");
// let elevenAM = document.getElementById("11am");
// let twelvePM = document.getElementById("12pm");
// let onePM = document.getElementById("1pm");
// let twoPM = document.getElementById("2pm");
// let threePM = document.getElementById("3pm");
// let fourPM = document.getElementById("4pm");
// let fivePM = document.getElementById("5pm");
// let sixPM = document.getElementById("6pm");
// let sevenPM = document.getElementById("7pm");
// let eightPM = document.getElementById("8pm");
// let ninePM = document.getElementById("9pm");

// let timeArray = [ "7", "8am", "9am","10am", "11am","12pm", "1pm","2pm","3pm","4pm","5pm","6pm","7pm","8pm","9pm"] 

let elementsArray = []

for (let i = 7; i < 22; i++) {
    let el = document.getElementById(`${i}`)
    let textAreaElement = document.createElement("textarea")
    textAreaElement.cols = 85
    textAreaElement.rows = 3
    el.appendChild(textAreaElement)
    let hour = today.format("HH")
    if(i > hour) {
        
        el.classList.add("future")
        
    } else if (i == hour) {
        el.classList.add("present")
        
    } else {
        el.classList.add("past")
    }
    // elementsArray.push(el)
}

// sevenAM.classList.add("past")

// event listeners
// sevenAM.addEventListener("keydown", textArea)
// allow text input from user and save it




// change background color based on past present future



