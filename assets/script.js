const startButton = document.getElementById('startBtn')
const nextButton = document.getElementById('nextBtn')
const questionContainerEl = document.getElementById('question-container')
const questionEl = document.getElementById('question')
const answerButtonsEl = document.getElementById('answers')

let shuffledQuestions, currentQuestionIndex

// create event listener for start button
startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    gotoNextQuestion()
})

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


// create function that delivers question and choices
function gotoNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}
// produces random question
function showQuestion(question) {
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsEl.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild)
    }
}

// function that checks answers then goes on to next question
function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsEl.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}


// subtract time on clock with incorrect answers
// onClick event listener
// look up add click on button (google)

// create array for questions, answers, wrong answers
const questions = [
    {
      question: 'Babies develop their first teeth within the first 6-8 months. Which set of teeth usually come in first?',
      answers: [
        { text: 'Lateral Incisor', correct: false },
        { text: 'Central Incisor', correct: true },
        { text: 'Canine', correct: false },
        { text: 'First Molar', correct: false },

      ]
    },
    {
      question: 'What does SIDS stand for?',
      answers: [
        { text: ' Sudden Infant Death Syndrome', correct: true },
        { text: 'Shaken Infant Death Syndrome', correct: false },
        { text: 'Small Intestine & Duodenum Symptom', correct: false },
        { text: 'Sudden Intestinal Deterioration Symptom', correct: false }
      ]
    },
    {
      question: 'The development of balance, equilibrium, postural control, muscle tone, maintaining a stable visual field while moving is called.',
      answers: [
        { text: 'Cognitive Development', correct: false },
        { text: 'Vestibular Development', correct: true },
        { text: 'Physical Development', correct: false },
        { text: 'None of the above', correct: false }
      ]
    },
    {
      question: 'When performing first aid to an infant choking from an obstructed airway how should the child NOT be positioned',
      answers: [
        { text: 'On top of the caregivers forearm', correct: false },
        { text: 'On the floor facing the caregiver', correct: true },
        { text: 'Head angled lower than their bottom', correct: false },
        { text: 'Infants head and neck supported by caregivers non-dominant hand', correct: false }
      ]
    }
  ]

// create game over function
// stops timer

// create scoreboard function into local storage
let savedScores = JSON.parse(localStorage.getItem("highScores"));