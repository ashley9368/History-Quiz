// Variables
const startButton = document.getElementById('start-btn'); 
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question'); // Get the element to display answer buttons
const answerButtonsElement = document.getElementById('answer-buttons');

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
  questionElement.innerText = "What year did the first world war start?";
  answerButtonsElement.innerHTML = '';

  const answers = [
    '1914',
    '1916',
    '1918',
    '1920'
  ];

  answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer;
    button.classList.add('btn');
    answerButtonsElement.appendChild(button);
  });
}