// Variables
const startButton = document.getElementById('start-btn'); 
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question'); // Get the element to display answer buttons
const answerButtonsElement = document.getElementById('answer-buttons');

// Questions for quiz
const quizQuestions = [
  {
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
  answers: ['Charles Dickens', 'William Shakespeare', 'Mark Twain', 'Jana Austen'],
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

let currentQuestionIndex = 0;

// Event listener for starting quiz
startButton.addEventListener('click', beginQuiz);

// Begin Quiz Area
function beginQuiz() {
  console.log('Quiz started');
  startButton.classList.add('hide'); // Hide the start button
  questionContainer.classList.remove('hide'); // Unhides the question and answers
  showQuestion(); // Displays first question and answers
}

function showQuestion() {
  const currentQuestion = quizQuestions[currentQuestionIndex]; // Get current question object from array
  questionElement.innerText = currentQuestion.question; // Display current question text
  answerButtonsElement.innerHTML = '';

currentQuestion.answers.forEach((answer, index) => {
  const button = document.createElement('button');
  button.innerText = answer;
  button.classList.add('btn');
  button.addEventListener('click', () => checkAnswer(index));
  answerButtonsElement.appendChild(button);
});
}

function checkAnswer(selectedIndex) {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  if (selectedIndex === currentQuestion.correctAnswer) {
    // If correct answer selected
    if (currentQuestionIndex < quizQuestions.length - 1) {
      // If there are more questions, move to the next question
      currentQuestionIndex++;
      showQuestion(); // Display next question
    } else {
      // If no more questions, handle quiz completetion
      quizComplete();
    }
    } else {
      // Handle incorrect answer
      console.log('Incorrect answer');
    }
  }

  function quizComplete() {
    // Show "Quiz Complete!" message
    questionElement.innerText = "Quiz Complete!";
    // Remove answer buttons when quiz is complete
    answerButtonsElement.innerHTML = '';
  }