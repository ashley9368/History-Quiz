// Variables
const startButton = document.getElementById('start-btn'); 
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let currentQuestionIndex = 0;
let score = 0; // Initialize the score

// Event listener for starting quiz
startButton.addEventListener('click', startQuiz);

// Begin Quiz Area
function startQuiz() {
  console.log('Started Quiz');
  startButton.classList.add('hide'); // Hide the start button
  questionContainer.classList.remove('hide'); // Unhide the question and answers
  score = 0; // Reset score
  currentQuestionIndex = 0; // Reset question index
  showQuestion(); // Displays the first question and answers
}

function showQuestion() {
  const currentQuestion = quizQuestions[currentQuestionIndex];

  // Clear last question and reset container color
  questionElement.innerHTML = '';
  answerButtonsElement.innerHTML = '';
  questionContainer.classList.remove('correct', 'incorrect');

  // Display New Question
  questionElement.textContent = currentQuestion.question;

  // Buttons for each answer
  for (let i = 0; i < currentQuestion.answers.length; i++) {
    const button = document.createElement('button');
    button.innerText = currentQuestion.answers[i];
    button.classList.add('btn');
    button.addEventListener('click', () => checkAnswer(i));
    answerButtonsElement.appendChild(button);
  }
}

function checkAnswer(answerIndex) {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  
  // Remove existing color class from container
  questionContainer.classList.remove('correct', 'incorrect');

  if (answerIndex === currentQuestion.correctAnswer) {
    questionContainer.classList.add('correct'); // Add correct class
    score++; // Increment score for correct answer
  } else {
    questionContainer.classList.add('incorrect'); // Add incorrect class
  }

  // Move to the next question
  currentQuestionIndex++;

  // Move to next question or end quiz
  if (currentQuestionIndex >= quizQuestions.length) {
    endQuiz();
  } else {
    setTimeout(showQuestion, 1000); // Add a delay before showing the next question
  }
}

function endQuiz() {
  // Show "Quiz Complete!" message along with the score
  questionElement.innerText = `Quiz Complete! Your score is ${score}/${quizQuestions.length}.`;
  // Remove answer buttons when the quiz is complete
  answerButtonsElement.innerHTML = '';
  // Optionally hide the question container
  questionContainer.classList.add('hide');
}

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
