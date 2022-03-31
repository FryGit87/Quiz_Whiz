var btnStart = $("#btn-start");
var btnReset = $("#btn-reset");
var timerEl = $("#span-timer");
var questionContainer = $("#question-container");
var startTime = 10;
var randomQuestion;
var currentQuestion;

btnStart.on("click", function () {
  timerEl.text(startTime);
  $("#btn-start").css("display", "none");
  $("#btn-reset").css("display", "inline-flex");
  $("#question-container").removeClass("hide");
  var countDown = startTime;
  var timer = setInterval(function () {
    countDown--;
    $("#span-timer").html(countDown);
    if (countDown <= 5) {
      $("#span-timer").css("color", "red");
    }
    if (countDown <= 0) {
      $("#span-timer").html("TIME'S UP!").css("font-size", "30px");
    }
    randomQuestion = question.sort(() => Math.random() - 0.5);
    currentQuestion = 0;
    return timer;
  }, 1000);
  btnReset.on("click", function () {
    $("#btn-start").css("display", "inline");
    $("#btn-reset").css("display", "none");
    $("#question-container").addClass("hide");
    $("#span-timer")
      .css("font-size", "16px")
      .css("color", "black")
      .html("Click 'Start' to begin the Quiz!");
    clearInterval(timer);
  });
  //  REQUIRE 'REVEAL-QUESTION' FUNCTION HERE
});

//FIRST QUESTION TRIAL!!!
const quizQuestions = [
  {
    question: "From which part of a plant does a fruit typically develop?",
    answer: [
      { text: "Leaf", correct: false },
      { text: "Flower", correct: true },
      { text: "Stem", correct: false },
      { text: "Roots", correct: false },
    ],
  },
];

// question: "Which part of celery do we often eat?",
// answer: [
//         { text: "Leaf", correct: false },
//       { text: "Flower", correct: false },
//       { text: "Stem", correct: true },
//       { text: "Roots", correct: false },
//     ],
//   },
// ];

// question: "Williams” and “Conference” are kinds of which type of fruit?";
// answer: [
//         { text: "Apples", correct: false },
//       { text: "Bananas", correct: flase },
//       { text: "Cucumbers", correct: false },
//       { text: "Pears", correct: true },
//     ],
//   },
// ];

// "A. Leaf", "B. Flower", "C. Stem", "D. Roots"],
//     correctIndex: 1,
//     correctResponse: "Custom correct response.",
//     incorrectResponse: "Custom incorrect response.",
//   },
//   {
//     q: "2. Which part of celery do we often eat?",
//     options: ["A. Leaf", "B. Flower", "C. Stem", "D. Roots"],
//     correctIndex: 3,
//     correctResponse: "Custom correct response.",
//     incorrectResponse: "Custom incorrect response.",
//   },
//   {
//     q: "3. “Williams” and “Conference” are kinds of which type of fruit?",
//     options: ["A. Apples", "B. Bananas", "C. Cucumbers", "D. Pears"],
//     correctIndex: 3,
//     correctResponse: "Custom correct response.",
//     incorrectResponse: "Custom incorrect response.",
//   },
//   {
//     q: "4. This fruit is often grown in many Asian countries and is considered one of the stinkiest fruits in the world. What is it?",
//     options: ["A. Durian", "B. Rambutan", "C. Persimmon", "D. Lychee"],
//     correctIndex: 0,
//     correctResponse: "Custom correct response.",
//     incorrectResponse: "Custom incorrect response.",
//   },
//   {
//     q: "5. Broccoli, Brussels sprouts, cauliflower, and cabbage belong to which type of vegetables?",
//     options: [
//       "A. Root vegetables",
//       "B. Cruciferous vegetables",
//       "C. Leafy green vegetables",
//       "D. Poisonous vegetables",
//     ],
//     correctIndex: 1,
//     correctResponse: "Custom correct response.",
//     incorrectResponse: "Custom incorrect response.",
//   },
// ];

// $("#quiz").quiz({
//   questions: myQuiz,
// });
