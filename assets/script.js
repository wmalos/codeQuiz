const startButton = document.getElementById('startBtn')

// create event listener for start button
startButton.addEventListener('click', startQuiz)

// starts timer and first question
function startQuiz() {

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
function gotoNextQuestion() {

}

// function that checks answers then goes on to next question
function selectAnswer() {

}

// subtract time on clock with incorrect answers
// onClick event listener
// look up add click on button (google)

// create game over function
// stops timer

// create scoreboard function into local storage
let savedScores = JSON.parse(localStorage.getItem("highScores"));