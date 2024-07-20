const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')

startButton.addEventListener('click', startQuiz)

let currentQuestionIndex = 0;

function startQuiz() {
  console.log('Started Quiz')
  startButton.classList.add('hide')
  questionContainerElement.classList.remove('hide')
  showQuestion();
} 

function setNextQuestion() {

}

function selectAnswer() {
  
}

function showQuestion() {
  const questionElement = document.getElementById('question');
  const answerButtonsElement = document.getElementById('answer-buttons');
  const currentQuestion = quizQuestions[currentQuestionIndex];

  // Clear last question
  questionElement.innerHTML = '';
  answerButtonsElement.innerHTML = '';

  // Display New Question
  questionElement.textContent = currentQuestion.question;

  // Buttons for each answer
  for(let i =0; i < currentQuestion.answers.length; i++) {
    const button = document.createElement('button');
    button.innerText = currentQuestion.answers[i];
    button.classList.add('btn')
    button.addEventListener('click', () => checkAnswer(i));
    answerButtonsElement.appendChild(button);
  }
}

function checkAnswer(answerIndex) {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  if (answerIndex === currentQuestion.correctAnswer) {
    alert('Correct!');
  } else {
    alert('Wrong!');
  }

// Move to the next question
currentQuestionIndex++;

// Move to next question or end quiz
if (currentQuestionIndex >= quizQuestions.length) {
  endQuiz();
} else {
  showQuestion();
}
}

function endQuiz() {
  const questionElement = document.getElementById('question');
  const answerButtonsElement = document.getElementById('answer-buttons');

  // Clear old question and answers
  questionElement.innerHTML = '';
  answerButtonsElement.innerHTML = '';
}


// Questions for quiz
const quizQuestions = [{
  question: "What year did the first World War start?",
  answers: ['1914', '1916', '1918', '1920'],
  correctAnswer: 0
},
{
  question: "Who painted the Mona Lisa?",
  answers: ['Leonardo da Vinci', 'Pablo Picasso', 'Vincent van Gogh', 'Michelangelo'],
  correctAnswer: 0
},
{
  question: "Who wrote the play 'Romeo and Juliet'?",
  answers: ['Charles Dickens', 'William Shakespeare', 'Mark Twain', 'Jane Austen'],
  correctAnswer: 1
},
{
  question: "Who was the first person to walk on the moon?",
  answers: ['Buzz Aldrin', 'Michael Collins', 'Yuri Gagarin', 'Neil Armstrong'],
  correctAnswer: 3
},
{
  question: "What year did the Berlin Wall fall?",
  answers: ['1987', '1989', '1991', '1993'],
  correctAnswer: 1
},
{
  question: "Who was the British Prime Minister during World War II?",
  answers: ['Neville Chamberlain', 'Clement Attlee', 'Winston Churchill', 'Harold Macmillan'],
  correctAnswer: 2
},
{
  question: "Which ancient civilization built the pyramids?",
  answers: ['Mesopotamians', 'Greeks', 'Romans', 'Egyptians'],
  correctAnswer: 3
},
{
  question: "In which year did the American Civil War begin?",
  answers: ['1859', '1860', '1861', '1862'],
  correctAnswer: 2
},
{
  question: "Which empire was ruled by Genghis Khan?",
  answers: ['Ottoman Empire', 'Byzantine Empire', 'Mongol Empire', 'Persian Empire'],
  correctAnswer: 2
},
{
  question: "The Treaty of Versailles ended which war?",
  answers: ['World War I', 'World War II', 'Franco-Prussian War', 'Crimean War'],
  correctAnswer: 0
}
];