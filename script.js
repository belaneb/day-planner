//current day is displayed at the top of the calendar
var todaysDate = dayjs().format('MMM D, YYYY');
$("#currentDay").text(todaysDate);
console.log(todaysDate);

//timeblocks for standard business hours
var now = new Date();
var currentHour = now.getHours();
//TEST: var currentHour = 13
console.log(currentHour);

//each timeblock is color coded to indicate whether it is in the past, present, or future
/*add & remove class here*/

//Grab HTML elements
var timeBlocks = $(".time-block")
console.log(timeBlocks)

//.each: aka for loop
//split "hour-9", to "hour" & "9", [1] grabs 9.
timeBlocks.each(function(timeblock) {
  var hour = $(this).attr("id").split("-")[1]

  if(currentHour > hour){
    $(this).addClass("past")
    $(this).removeClass("present", "future")
  }
  if(currentHour < hour){
    $(this).addClass("future")
    $(this).removeClass("present", "past")
  }
  if(currentHour == hour){
    $(this).addClass("present")
    $(this).removeClass("past", "future")
  }
});

var userInput = $("<textarea>")
console.log(userInput)

localStorage.setItem("userInput", JSON.stringify(userInput))
var savedUserInput = JSON.parse(localStorage.getItem("userInput"))

var saveButton = $(".saveBtn")
saveButton.click(function(){
})