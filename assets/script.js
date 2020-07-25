var startButton = document.getElementById("startBtn")
var questContainerEl = document.getElementById("questionContainer")
var questionEl = document.getElementById("question")
var choicesEl = document.getElementById("choices")
var currentQuestion

startButton.addEventListener("click", start)

var questions = [
  {
    question: "Question 1?",
    choices: [
      { text: "wrong", correct: false},
      { text: "wrong", correct: false},
      { text: "wrong", correct: false},
      { text: "right", correct: true}
    ]
  }
]

function start(){
  console.log("start working");
  startButton.classList.add("hide");
  currentQuestion = 0;
  questContainerEl.classList.remove("hide");
}

function Next(){
  showQuestion(currentQuestion)

}

function showQuestion(question){
  questionEl.innerText = question.question 
}

function choose(){

}