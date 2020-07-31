//START AND QUESTIONS SECTION
var startButton = document.getElementById("startBtn")
var nextButton = document.getElementById("nextBtn")
var questContainerEl = document.getElementById("questionContainer")
var questionEl = document.getElementById("question")
var choicesEl = document.getElementById("choices")
var answerEl = document.getElementById("answerResult")
var resultContainerEl = document.getElementById("resultContainter")
var resultEl = document.getElementById("results")
let currentQuestion, currentQuestionIndex

startButton.addEventListener("click", start)

function start() {
  console.log("start working")
  startButton.classList.add("hide")
  currentQuestion = questions
  currentQuestionIndex = 0
  questContainerEl.classList.remove("hide")
  setNextQuestion()
  timer()
}

function setNextQuestion() {
  reSet()
  showQuestion(currentQuestion[currentQuestionIndex])

}

function showQuestion(question) {
  questionEl.innerText = question.question
  question.choices.forEach(answer => {
    const button = document.createElement("button")
    button.innerText = answer.text
    button.classList.add("btn")
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener("click", chooseFunction)
    button.addEventListener("click", () => {
      currentQuestionIndex++
      setNextQuestion()
    })
    choicesEl.appendChild(button)

  });
}

function reSet() {
  while (choicesEl.firstChild) {
    choicesEl.removeChild(choicesEl.firstChild)
  }
}

function chooseFunction(e) {
  var answerBtn = e.target
  var correct = answerBtn.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(choicesEl.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (currentQuestion.length > currentQuestionIndex + 1) {
    console.log("next question")
  } else {
    questContainerEl.classList.add("hide")
    resultContainerEl.classList.remove("hide")
    console.log("end of quiz")
  }

}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add("correct")
  } else {
    element.classList.add("wrong")
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct")
  element.classList.remove("wrong")
}

const questions = [
  {
    question: "Question 1??",
    choices: [
      { text: "wrong", correct: false },
      { text: "wrong", correct: false },
      { text: "wrong", correct: false },
      { text: "right", correct: true }
    ]
  },
  {
    question: "Question 2??",
    choices: [
      { text: "wrong", correct: false },
      { text: "wrong", correct: false },
      { text: "right", correct: true },
      { text: "wrong", correct: false }
    ]
  }, {
    question: "Question 3??",
    choices: [
      { text: "right", correct: true },
      { text: "wrong", correct: false },
      { text: "wrong", correct: false },
      { text: "wrong", correct: false }
    ]
  }
]

//TIMER SECTION//
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");

function timer() {
  var timeRemaining = 60
  var timerInterval = setInterval(function(){
    timeRemaining--;
    secondsDisplay.textContent = timeRemaining;
    if(timeRemaining ===0){
      clearInterval(timerInterval)
    }
  }, 1000);
}