// var btnStart = document.getElementById("btn-start");
// var btnReset = document.getElementById('btn-reset');
// var timer = document.getElementById("span-timer")


var btnStart = $('#btn-start');
var btnReset = $('#btn-reset');
var timerEl = $('#span-timer');
var startTime = 90;



btnStart.on('click', function(){
    // startQuiz();
    timerEl.text(startTime)
    console.log('working')
    
})


// $(startQuiz(){

  // jQuery methods go here...

// });










// btnReset.addEventListener("click", FUNCTION)
//VANILLA  JS

// function startQuiz(){
//     var countdownTimer = timer;
//     // console.log(countdownTimer)
    
//     setInterval(countdownTimer, 1000)
// };

// function resetQuiz(){
//     clearInterval()
// };










// var startCount = 16;
// //TIMER

$("#startButton").click(function (e) {
    var timer = startCount;
    console.log(timer)
    setInterval(function () {
        $("#span-timer").html(count);
        count--;
         if (count<= 0){
            $("#span-timer").html("TIME'S UP!")}
    }, 1000);
});

 




// $("#resetButton").click(function (e) {
//     clearInterval(testTimer()
// //     {
// //      $("#stopWatch").html("Click 'Start' to begin") 
// // }
// )
// });