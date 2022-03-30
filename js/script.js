///TO DO
//ASSIGN SETINTERVAL TO A VARIABLE, RETURN OUT THE VALUE, USE THE VARIABLE IN THE CLEARINTERVAL

var btnStart = $("#btn-start");
var btnReset = $("#btn-reset");
var timerEl = $("#span-timer");
var startTime = 10;

btnStart.on("click", function () {
  timerEl.text(startTime);
  $("#btn-start").css("display", "none");
  // $("btn-start").css("display", "none");
  var countDown = startTime;
  var timer = setInterval(function () {
    countDown--;
    $("#span-timer").html(countDown);
    if (countDown <= 0) {
      $("#span-timer").html("TIME'S UP!");
    }
    //ADD CODE HERE - IF TIMER < 6
    //COLOR BECOMES RED
    return timer;
  }, 1000);
  btnReset.on("click", function () {
    $("#btn-start").css("display", "block");
    $("#span-timer").html("Click 'Start' to begin the Quiz!");
    clearInterval(timer);
  });
  //  REQUIRE 'REVEAL-QUESTION' FUNCTION HERE
});
