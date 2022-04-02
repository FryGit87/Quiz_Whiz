var btnStart = $("#btn-start");
var btnReset = $("#btn-reset");
var timerEl = $("#span-timer");
var btnSaveScore = $("#btn-saveScore");
var btnHighScore = $("#btn-highScore");
var questionContainer = $("#question-container");
var startTime = 15;
var questionEl = $("#question");
var answerButtonsEl = $("#answer-buttons");
var question;
var currentIndex = 0;

//START BUTTON / RESET BUTTON / COUNTER
btnStart.on("click", function () {
  printQuestion(index);
  timerEl.text(startTime);
  $("#leader-board").css("display", "none");
  $("#btn-start").css("display", "none");
  $(".game-buttons").removeClass("hide");
  $("#btn-highScore").css("display", "none");
  $("#btn-reset").css("display", "inline-flex");
  $("#question-container").removeClass("hide");

  var countDown = startTime;
  var timer = setInterval(function () {
    countDown--;
    $("#span-timer").html(countDown);
    if (countDown <= 5) {
      $("#span-timer").fadeOut(400);
      $("#span-timer").fadeIn(400);
      $("#span-timer").css("color", "red");
    }
    if (countDown <= 0) {
      clearInterval(timer);
      $("#span-timer").html("TIME'S UP!").css("font-size", "30px");
      $("#btn-saveScore").css("display", "inline");
      // $("#btn-save").css("display", "inline");
      $("#question-container").addClass("hide");
      $("#hidden-results").removeClass("hide");
      clearInterval(timer);

      result();
    }
    return timer;
  }, 1000);
  btnReset.on("click", function () {
    $("#btn-start").css("display", "inline");
    $("#btn-highScore").css("display", "inline");
    $("#btn-reset").css("display", "none");
    $("#btn-saveScore").css("display", "none");
    $("#hidden-results").addClass("hide");
    $("#question-container").addClass("hide");
    $("#leader-board").addClass("hide");
    $(".game-buttons").addClass("hide");

    $("#span-timer")
      .css("font-size", "20px")
      .css("color", "black")
      .html("Click 'Start' to begin the Quiz!");
    clearInterval(timer);
  });
});

btnHighScore.on("click", function () {
  $("#leader-board").toggle();
});

let index = 0;
let attempt = 0;
let score = 0;
let wrong = 0;

let questions = quiz.sort(function () {
  return 0.5 - Math.random();
});

let totalQuestion = questions.length;

// $(function () {
//   // timer code start from here

//   let totaTime = 200; // 200 seconds for timer
//   let min = 0;
//   let sec = 0;
//   let counter = 0;

//   let timer = setInterval(function () {
//     counter++;
//     min = Math.floor((totaTime - counter) / 60); // calculating min
//     sec = totaTime - min * 60 - counter;

//     $(".timerBox span").text(min + ":" + sec);

//     if (counter == totaTime) {
//       alert("Time's up. press ok to show the result.");
//       result();
//       clearInterval(timer);
//     }
//   }, 1000); // timer set for 1 seconds interval
//   // timer code end here

//   // print Question
//   printQuestion(index);
// });

function printQuestion(i) {
  $(".questionBox").text(questions[i].question);
  $(".optionBox span").eq(0).text(questions[i].option[0]);
  $(".optionBox span").eq(1).text(questions[i].option[1]);
  $(".optionBox span").eq(2).text(questions[i].option[2]);
  $(".optionBox span").eq(3).text(questions[i].option[3]);
}

function checkAnswer(option) {
  attempt++;

  let optionClicked = $(option).data("opt");

  // console.log(questions[index]);

  if (optionClicked == questions[index].answer) {
    $(option).addClass("right");
    score++;
  } else {
    $(option).addClass("wrong");
    wrong++;
  }

  $(".scoreBox span").text(score);

  $(".optionBox span").attr("onclick", "");
}

function showNext() {
  if (index >= questions.length - 1) {
    showResult(0);

    return;
  }

  index++;

  $(".optionBox span").removeClass();

  $(".optionBox span").attr("onclick", "checkAnswer(this)");

  printQuestion(index);
}

function showResult(j) {
  if (
    j == 1 &&
    index < questions.length - 1 &&
    !confirm(
      "Quiz has not finished yet. Press ok to skip quiz & get you final result."
    )
  ) {
    return;
  }
  result();
}

// Function for result end

// Result function start
function result() {
  $("#span-timer").hide();
  $("#question-container").hide();
  $("#resultScreen").show();
  $("#btn-next").hide();
  $("#totalQuestion").text(totalQuestion);
  $("#attemptQuestion").text(attempt);
  $("#correctAnswers").text(score);
  $("#wrongAnswers").text(wrong);
  $("#btn-saveScore").css("display", "inline");
}

// finish later for scoreboard
// $(function () {
//   $("#btn-saveScore").click(function () {
//     var userIntialsInput = $("#user-initials-input").val();
//     localStorage.setItem("getvalue", userIntialsInput);
//   });
// });

// calculateScore(){

// }

//after shpowing questions and options, increment the current Index , reset once question list is finished

//button click- validate userchoice with correect answer attribute and increement index

//   // if (this.target == showQuestions.correctAnswer) {
//   //   score + 10;
//   //   correctAnswer++;
//   // } else {
//   //   timer - 10;
//   //   incorrectAnswer++;
//   // }
// }
