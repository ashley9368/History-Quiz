const startBtn = document.getElementById('start-btn');
const questionContainer = document.getElementById('question-container');

startBtn.addEventListener('click', beginQuiz);

function beginQuiz() {
  console.log('Quiz started');
  startBtn.classList.add('hide');
  questionContainer.classList.remove('hide');
}

function setNextQuestion() {

}

function selectAnswer() {

}