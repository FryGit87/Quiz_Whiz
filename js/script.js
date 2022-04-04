var btnStart = $("#btn-start");
var btnReset = $("#btn-reset");
var timerEl = $("#span-timer");
var btnSaveScore = $("#btn-saveScore");
var btnHighScore = $("#btn-highScore");
var questionContainer = $("#question-container");
var startTime = 75;
var questionEl = $("#question");
var answerButtonsEl = $("#answer-buttons");
var question;
var currentIndex = 0;
var clearScores = $("#clear-storage");

//CLEAR HIGH SCORES (LOCAL STORAGE DATA)
clearScores.on("click", function () {
  localStorage.clear();
  highScoreList.text(`High Scores`);
});

//START BUTTON / RESET BUTTON / COUNTER, ON CLICK
btnStart.on("click", function () {
  printQuestion(index);
  timerEl.text(startTime);
  stopWatchVal.startTimer();
  $("#leader-board").css("display", "none");
  $("#btn-start").css("display", "none");
  $(".game-buttons").removeClass("hide");
  $("#btn-highScore").css("display", "none");
  $("#btn-reset").css("display", "inline-flex");
  $("#question-container").removeClass("hide");
});

// TIMER COUNTDOWN FUNCTION
function stopWatch() {
  var countDown = startTime;
  var timer;
  function wrongAnswerPenalty() {
    countDown -= 10;
  }
  function startTimer() {
    timer = setInterval(function () {
      countDown--;
      $("#span-timer").html(countDown);
      if (countDown <= 0) {
        clearInterval(timer);
        $("#span-timer").html("TIME'S UP!").css("font-size", "30px");
        $("#btn-saveScore").css("display", "inline");
        $("#question-container").addClass("hide");
        $("#hidden-results").removeClass("hide");
        result();
      }
      // COOL FUNCTION BUT TIMER WON'T CLEAR, WOULD LIKE TO USE BUT RAN OUT OF TIME(NO PUN INTENDED)
      // if (countDown <= 5) {
      //   $("#span-timer").fadeOut(400);
      //   $("#span-timer").fadeIn(400);
      //   $("#span-timer").css("color", "red");
      // }
      // return timer;
    }, 1000);
  }
  return { wrongAnswerPenalty, startTimer };
}

// RESET BUTTON Function, ON CLICK
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

var stopWatchVal = stopWatch();

var userNameEl = $("#user-name");

// SAVE USER SCORES, ON CLICK
btnSaveScore.on("click", function () {
  var userNameInput = userNameEl.val();
  saveHighScore(userNameInput, score);
  console.log(userNameInput);
});

// TOGGLE HIGH SCORE BOARD
btnHighScore.on("click", function () {
  $("#leader-board").toggle();
  getHighScore();
});

// QUIZ / QUESTION SELECTION
var index = 0;
var attempt = 0;
var score = 0;
var wrong = 0;

var questions = quiz.sort(function () {
  return 0.5 - Math.random();
});

var totalQuestion = questions.length;

function printQuestion(i) {
  $(".questionBox").text(questions[i].question);
  $(".optionBox span").eq(0).text(questions[i].option[0]);
  $(".optionBox span").eq(1).text(questions[i].option[1]);
  $(".optionBox span").eq(2).text(questions[i].option[2]);
  $(".optionBox span").eq(3).text(questions[i].option[3]);
}

// ANSWER CHECKING FUNCTION
function checkAnswer(option) {
  attempt++;

  var optionClicked = $(option).data("opt");

  if (optionClicked == questions[index].answer) {
    $(option).addClass("right");
    score++;
  } else {
    $(option).addClass("wrong");
    stopWatchVal.wrongAnswerPenalty();
    wrong++;
  }

  $(".scoreBox span").text(score);

  $(".optionBox span").attr("onclick", "");
}

//NEXT QUESTION FUNCTION
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

//END OF QUIZ, DISPLAY RESULT FUNCTION
function showResult(j) {
  if (
    j == 1 &&
    index < questions.length - 1 &&
    !confirm()
    // **REMOVED**
    //"Quiz has not finished yet. Press ok to skip quiz & get you final result." removed function, not user friendly
  ) {
    return;
  }

  result();
}

//SAVING USER SCORE AND NAME INPUT TO LOCALSTORAGE
var highScoreList = $("#high-scores-header");
var userName = $("input[name=user-name");
var saveUserName = "";

function saveHighScore(name, score) {
  var userArr = [];
  var storedScore = localStorage.getItem("userArr");
  if (storedScore != null) {
    userArr = JSON.parse(storedScore);
  }
  var userDetails = {
    userInitials: name,
    userScore: score,
  };
  userArr.push(userDetails);
  localStorage.setItem("userArr", JSON.stringify(userArr));
}

//RETREIEVING SCORE AND NAME FROM LOCALSTORAG AND APPLY TO HIGH SCORE BOARD
function getHighScore() {
  var highScore = JSON.parse(localStorage.getItem("userArr"));
  console.log(highScore);
  highScore.forEach((addScore) => {
    var userInitialsEl = $("<li>");
    userInitialsEl.text(addScore.userInitials + " " + addScore.userScore);
    highScoreList.append(userInitialsEl);
  });
}

// RESULT FUNCTION
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
