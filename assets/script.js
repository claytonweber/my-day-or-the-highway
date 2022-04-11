let today = moment();
//day, month date
$("#currentDay").text(today.format('dddd, MMMM Do'));

let currentHour = moment().format("HH");

//for testing purposes
// let currentHour = "12";

const hours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

function colorCoding() {
  for(let i = 0; i < hours.length; i++) {
    var taskBlocks = document.getElementById(`hour-${hours[i]}`);
    if(currentHour > hours[i]) {
      taskBlocks.classList.add('past');
    } else if(currentHour === hours[i]) {
      taskBlocks.classList.add('present');
    } else {
      taskBlocks.classList.add('future');
    }
  }
}

colorCoding();

function getLocalStorage() {
  for(i = 0; i < hours.length; i++ ) {
    // console.log(i);
    $(`#ta-${hours[i]}`).val(localStorage.getItem(`hour-${hours[i]}`))
  }
}

getLocalStorage();

function saveLocalStorage() {
  for(let i=0; i < hours.length; i++ ) {
    console.log(hours[i])
    $(`#btn-${hours[i]}`).click(function() {
      localStorage.setItem(`hour-${hours[i]}`, $(`#ta-${hours[i]}`).val());
    })
  }
}
saveLocalStorage();
