let quiz = [
  {
    question: "What does HTML stand for?",
    option: [
      "Hyper Tag Markup Language",
      "Hyper Text Markup Language",
      "Hyperlinks Text Mark Language",
      "Hyperlinking Text Marking Language",
    ],
    answer: 2,
  },
  {
    question: "What does CSS stand for?",
    option: [
      "Computing Style Sheet",
      "Creative Style System",
      "Cascading Style Sheet",
      "Creative Styling Sheet",
    ],
    answer: 3,
  },
  {
    question: "Where should a CSS file be referenced in a HTML file?",
    option: [
      "Before any HTML code",
      "After all HTML code",
      "Inside the head section",
      "Inside the body section",
    ],
    answer: 3,
  },
  {
    question:
      "What is the correct format for aligning written content to the center of the page in CSS?",
    option: [
      "Text-align:center;",
      "Font-align:center;",
      "Text:align-center;",
      "Font:align-center;",
    ],
    answer: 1,
  },
  {
    question:
      "What is the correct format for changing the background colour of a div in CSS?",
    option: [
      "Bg-color:red;",
      "bg:red;",
      "Background-colour:red;",
      "Background-color:red;",
    ],
    answer: 4,
  },
  {
    question: "Choose the correct HTML tag for the largest heading",
    option: ["<heading>", "<h6>", "<head>", "<h1>"],
    answer: 4,
  },
  {
    question: "Which is the correct CSS syntax?",
    option: [
      "Body {color: black}",
      "{body;color:black}",
      "{body:color=black(body}",
      "body:color=black",
    ],
    answer: 1,
  },
  {
    question:
      "In CSS, what is the correct option to select all the tags on a page?",
    option: ["<p> { }", ".p { }", "#p { }", "* { }"],
    answer: 4,
  },
  {
    question: "Select the correct HTML tag to make a text italic?",
    option: ["Italic", "II", "IT", "I"],
    answer: 4,
  },
  {
    question: "Select the correct HTML tag to make a text bold.",
    option: ["bo", "bb", "b", "bold"],
    answer: 3,
  },
];

// var index = 0;

// var validateAnswer = function () {
//   console.log("hello");
// };

// var showQuestion = function () {
//   // $("#question-container").text = "";
//   var option1;
//   var option2;
//   var option3;
//   var option4;

//   questionEl.text = questions[index].question;
//   $("#answer-one").text = "TEST";
//   option2.text = questions[index].option2;
//   option3.text = questions[index].option3;
//   option4.text = questions[index].option4;

//   option1.addEventListener("click", showQuestion);
//   option2.addEventListener("click", showQuestion);
//   option3.addEventListener("click", showQuestion);
//   option4.addEventListener("click", showQuestion);

//   index++;

// $("#question").text(question);
// container.appendChild(option1);
// container.appendChild(option2);
// container.appendChild(option3);
// container.appendChild(option4);
// };

// startButton.addEventListener('click',showQuestion);

// [{name: "Simon", score:10},{name: "Simon", score:10},{name: "Simon", score:10}];

// var existingScores= JSON.parse(localStorage.getItem('scores'));

// var currentScore = {name: "", score: 12}

// existingScores.push(currentScore)
// localStorage.getItem('scores', JSON.stringify(existingScores));

//NEED TO ADD QUIZ FUNCTION, CALL WHEN START IS CLICKED

//FIRST QUESTION TRIAL!!!
// const quizQuestions = [
//   {
//     question: "From which part of a plant does a fruit typically develop?",
//     answer: [
//       { text: "Leaf", correct: false },
//       { text: "Flower", correct: true },
//       { text: "Stem", correct: false },
//       { text: "Roots", correct: false },
//     ],
//   },
// ];

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

// IF correct: true
// correctAnswer++
//else
//wrongAnswer++
// IF questionsAnswer == wrongAnswer + correctAnswer || countDown =< 0
// $("#question-container").html("<h2>GAME OVER</h2>");
// $("h2").append("<h4>Correct Answers: </h4>");
// $("h2").append("<h4>Inorrect Answers: </h4>");
// $("h2").append("<h4> Answers: </h4>");
//$("#btn-save").css("display", "inline");

// ----------------------------------------------------------------------------------------------
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
