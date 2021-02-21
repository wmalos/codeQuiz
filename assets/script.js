// create event listener for start button
// starts timer and first question
var startButton = document.querySelector("#startQuiz");


function startFunction() {
    startQuiz.addEventListener("click", function () {
        playQuiz(questions);
      });
}
// create function that runs timer
// stop timer at zero
// call game over function at zero
// include set interval in timer function

// create array for questions, answers, wrong answers
// make it an array of objects
var questions = [
    {
        q: "String", 
        choices: ["True", "False",],
        correct: "True" 
    },
    {
        q: "String", 
        choices: ["True", "False"],
        correct: "False"
    },
    {
        q: "String", 
        choices: ["choice a", "choice b", "choice c"],
        correct: "choice a"
    },
    {
        q: "String", 
        choices: ["choice a", "choice b", "choice c"],
        correct: "choice a"
    },

]

// create function that delivers question and choices
// function that checks answers then goes on to next question
// subtract time on clock with incorrect answers
// onClick event listener
// look up add click on button (google)

// create game over function
// stops timer

// create scoreboard function into local storage
let savedScores = JSON.parse(localStorage.getItem("highScores"));