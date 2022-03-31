var btnStart = $("#quiz-start-btn");
var btnReset = $("#btn-reset");
var timerEl = $("#span-timer");
var startTime = 10;

btnStart.on("click", function () {
  timerEl.text(startTime);
  $("#quiz-start-btn").css("display", "none");
  var countDown = startTime;
  var timer = setInterval(function () {
    countDown--;
    $("#span-timer").html(countDown);
    if (countDown <= 0) {
      $("#span-timer").html("TIME'S UP!");
      $(".question-container").css("display", "none");
      $("#quiz-counter").css("display", "none");
    }
    //ADD CODE HERE - IF TIMER < 6
    //COLOR BECOMES RED
    return timer;
  }, 1000);
  btnReset.on("click", function () {
    // $("#quiz-start-btn").css("display", "block");
    $("#quiz-start-btn").removeAttr("style");

    $("#quiz-start-screen").removeAttr("style");
    $(".question-container").css("display", "none");
    $("#quiz-counter").css("display", "none");

    $("#span-timer").html("Click 'Start' to begin the Quiz!");
    clearInterval(timer);
  });
  //  REQUIRE 'REVEAL-QUESTION' FUNCTION HERE
});

const myQuiz = [
  {
    q: "1. From which part of a plant does a fruit typically develop?",
    options: ["A. Leaf", "B. Flower", "C. Stem", "D. Roots"],
    correctIndex: 1,
    correctResponse: "Custom correct response.",
    incorrectResponse: "Custom incorrect response.",
  },
  {
    q: "2. Which part of celery do we often eat?",
    options: ["A. Leaf", "B. Flower", "C. Stem", "D. Roots"],
    correctIndex: 3,
    correctResponse: "Custom correct response.",
    incorrectResponse: "Custom incorrect response.",
  },
  {
    q: "3. “Williams” and “Conference” are kinds of which type of fruit?",
    options: ["A. Apples", "B. Bananas", "C. Cucumbers", "D. Pears"],
    correctIndex: 3,
    correctResponse: "Custom correct response.",
    incorrectResponse: "Custom incorrect response.",
  },
  {
    q: "4. This fruit is often grown in many Asian countries and is considered one of the stinkiest fruits in the world. What is it?",
    options: ["A. Durian", "B. Rambutan", "C. Persimmon", "D. Lychee"],
    correctIndex: 0,
    correctResponse: "Custom correct response.",
    incorrectResponse: "Custom incorrect response.",
  },
  {
    q: "5. Broccoli, Brussels sprouts, cauliflower, and cabbage belong to which type of vegetables?",
    options: [
      "A. Root vegetables",
      "B. Cruciferous vegetables",
      "C. Leafy green vegetables",
      "D. Poisonous vegetables",
    ],
    correctIndex: 1,
    correctResponse: "Custom correct response.",
    incorrectResponse: "Custom incorrect response.",
  },
];

$("#quiz").quiz({
  questions: myQuiz,
});
