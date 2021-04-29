// add day display at top of
$(document).ready(function () {
  var currentDay = $("#currentDay");
  // date display
  currentDay.text(moment().format("[Today is ] MMMM Do, YYYY"));

  // add time tracker
  //add past time style
  //add present time style
  //add future time style
  // assign classes to lines based on past present and future
  function checkTime() {
    var currentTime = moment().hours();
    console.log("I was here");
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);
      console.log(blockHour);
      if (blockHour < currentTime) {
        $(this).addClass("past");
      } else if (blockHour === currentTime) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  }
  checkTime();
  // link time tracker to hours on index.html
  function saveInfo() {
    console.log("success");
    var time = $(this).parent().attr("id");
    var item = $(this).siblings(".description").val();
    localStorage.setItem(time, item);
  }

  // save contents of text input field to local storage
  //display contents of local storage to corresponding hours
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  // contesnts stay visible on page reload

  // add text input field to center column on click
  $(".saveBtn").on("click", saveInfo);
});
