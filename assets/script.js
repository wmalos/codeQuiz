const startButton = document.getElementById('startBtn')
const questionContainerEl = document.getElementById('question')
const questionEl = document.getElementById('question')
const answerButtonsEl = document.getElementById('answers')

let shuffledQuestions, currentQuestionIndex

// create event listener for start button
startButton.addEventListener('click', startQuiz)

// starts timer and first question
function startQuiz() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerEl.classList.remove('hide')
    gotoNextQuestion()
}
// create function that runs timer
// stop timer at zero
// call game over function at zero
// include set interval in timer function

// create array for questions, answers, wrong answers
// make it an array of objects
const questions = [
    {
        question: 'What is lbla bala',
        answers: [
            { text: 'sdfasd', correct: true},
            { text: 'sdfadsa', correct: false}
        ] 
    }
] 
// create function that delivers question and choices
function gotoNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}
// produces random question
function showQuestion(question) {
    questionEl.innerText = question.question
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