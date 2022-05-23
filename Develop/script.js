// Set the current date
let today = moment();
$("#currentDay").text(today.format("MMM Do YYYY HH:mm "));

$(document).ready(function() {
 
console.log( "ready!" );
})
    
$(".saveBtn").on("click", function (event) {
    let time = $(event.target).closest(".row").find('.col-9').attr('id')
    let value = document.querySelector('.textArea').value;     
        console.log(value)
        console.log(time)
    localStorage.setItem(time, value)
    // $('#7.textArea').val(localStorage.getItem(time))
 })

// // .each.singularity.find(textarea).attr(id).val



// change background color based on past present future
for (let i = 7; i < 22; i++) {
    let hour = today.format("HH")
    let id = `${i}`
    let el = document.getElementById(id)
    // console.log(id)
    
    if(i > hour) {
        el.classList.add("future")
    } else if (i == hour) {
        el.classList.add("present")
    } else {
        el.classList.add("past")
    }
    
}


    // let textAreaElement = document.createElement("textarea")
    // textAreaElement.addEventListener("keypress", )
    
    // el.appendChild(textAreaElement)

    // let storedText = localStorage.getItem(id);


    
    // if(storedText != null){
    //     textAreaElement.value = storedText; 
    // }

    // elementsArray.push(el)
//     // let saveButton = document.querySelector('.saveBtn');
    
//     // console.log(time)
//     // console.log(document.getElementById("7am"));
    
//     // saveButton.addEventListener("click",function(){
//     //     localStorage.setItem(time, value)

//     // localStorage.setItem(time, value);





// function store(id,textAreaElement){
//     // console.log(id)
//     let text = document.getElementById(id)
//     console.log('text', text)

//     localStorage.setItem(textAreaElement);
// }

//local storage to keep values after refresh











