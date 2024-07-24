// Variables
const startButton = document.getElementById('start-btn'); 
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const scoreHidden = document.getElementById('quiz-end-message');
const scoreElement = document.getElementById('score');

let currentQuestionIndex = 0;
// Keeps track of the current question index
let score = 0;
// Keeps track of the users score

// Starts Quiz
startButton.addEventListener('click', startQuiz);

// Begin Quiz Area
function startQuiz() {
  console.log('Started Quiz');
  startButton.classList.add('hide'); 
  scoreHidden.classList.add('hide'); 
  questionContainer.classList.remove('hide'); 
  score = 0; 
  currentQuestionIndex = 0; 
  showQuestion(); 
}
// Updates score 
function UpdateScore(points) {
  score += points;
  scoreElement.textContent = score;
}
// Displays question
function showQuestion() {
  const currentQuestion = quizQuestions[currentQuestionIndex]; 
  questionElement.innerHTML = '';
  answerButtonsElement.innerHTML = '';
  questionContainer.classList.remove('correct', 'incorrect');  
  questionElement.textContent = currentQuestion.question;  
  
  //Buttons for each answer
  for(let i = 0; i < currentQuestion.answers.length; i++) {
    const button = document.createElement('button'); 
    button.innerText = currentQuestion.answers[i]; 
    button.classList.add('btn'); 
    button.addEventListener('click', () => checkAnswer(i)); 
    answerButtonsElement.appendChild(button); 
  }
  }

  function checkAnswer(answerIndex) {
    const currentQuestion = quizQuestions[currentQuestionIndex]; // Same as line 30
    // Targets the main quiz container
    const mainQuizContainer = document.querySelector('.container'); 
    // Change the background color based on the answer
    if (answerIndex === currentQuestion.correctAnswer) {
      mainQuizContainer.style.backgroundColor = 'green';
      UpdateScore(1);
     // Sets the background color of the mainQuizContainer to green if the selected answer is correct
     // Increments the score by 1 for a correct answer 
    } else {
      mainQuizContainer.style.backgroundColor = 'red';
      UpdateScore(-1);
      // Sets the background color of the mainQuizContainer to red if the selected answer is incorrect
    }

    // Goes to the next question
    currentQuestionIndex++;
    //Increments the question index to move to the next question

    // Reset background color after a delay
    setTimeout(() => {
      mainQuizContainer.style.backgroundColor = '';
      // Resets the background color of the mainQuizContainer to its original state after a 1-second delay.

    // Move to next question or end quiz
    if (currentQuestionIndex >= quizQuestions.length) {
      endQuiz();
      // calls the 'endQuiz' function if there are no more questions
    } else {
      showQuestion();
      // Calls the 'showQuestion' function to display the next question if there are more questions
    }
    }, 1000);
    // Sets a delay of 1 second before executing the code inside the setTimeout function.
}
/* End Quiz area */
function endQuiz() {
  // Show "Quiz Complete!" message along with the score
  const endMessageElement = document.getElementById('quiz-end-message');
  endMessageElement.innerText = `Quiz Complete! Your score is ${score}/${quizQuestions.length}.`;
  endMessageElement.classList.remove('hide'); // Ensure the final message is visible
  questionContainer.classList.add('hide'); // Hides Quiz container at the end

  // Ensure background color of the main container is reset
  const mainQuizContainer = document.querySelector('.container');
  if (mainQuizContainer) {
    mainQuizContainer.style.backgroundColor = '';
  }
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
