var questions = [
  {
    title: "Commonly used data types DO Not Include:",
    choices: ['string', 'booleans', 'alerts', 'numbers'],
    answer: "alerts",
  },
  {
    title: "The condition in a if/else statement is enclosed with___",
    choices: ['quotes', 'curly brackets', 'parenthesis', 'square brackets'],
    answer: "parenthesis",
  },
  {
    title: "Arrays is JavaScript can be used to store___",
    choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
    answer: "all of the above",
  },
  {
    title: "String values must be enclosed within ___ when beign assigned to variables.",
    choices: ['commas', 'curly brackets', 'quotes', 'parenthesis'],
    answer: "quotes",
  },
  {
    title: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ['JavaScript', 'terminal/bash', 'for loops', 'console.log'],
    answer: "console.log",
  }
];

var timer;
var timerCount;
var timerCountdown = document.getElementById("timerCountdown");
var pageWrapper = document.querySelector('.start')
var highscores = document.querySelector('.scores');
var timer = document.querySelector('#time');
var startButton = document.querySelector('#start');
var revealQuestion = document.querySelector('#questions');
var questionTitle = document.querySelector('#question-title');
var question = document.querySelector('choices');
var endScreen = document.querySelector('end-screen');
var finalScore = document.querySelector('#final-score');
var initials = document.querySelector('#initials');
var feedback = document.querySelector('#feedback');
var Currentquestion = "";
//var currentQ;
var questiontrack = 0;
var score = 0;
var yourScore = document.getElementById("yourScore");
//var currentQ = questions[questiontrack];

var start = document.getElementById("start");
start.onclick = startQuiz;

function startQuiz() {
  timerCount = 76;
  runTimer();
  start.setAttribute("hidden", "true");
  showQuestions();
}

function showQuestions() {
  //currentQ = questions[questiontrack];
  revealQuestion.setAttribute("class", "");
  questionTitle.textContent = questions[questiontrack].title
  console.log(questions[questiontrack].choices.length);
  for (var i = 0; i < questions[questiontrack].choices.length; i++) {
    var btn = document.createElement('button');
    console.log(questions);
    btn.textContent = questions[questiontrack].choices[i]
    choices.appendChild(btn);
    btn.setAttribute("id", "options" + i)
  }
}

choices.addEventListener("click", function (event) {
  var selected = event.target;
  var result;
  var Answer = selected.textContent === questions[questiontrack].answer;
  if (Answer) {
    score  += 10;
    result = "CORRECT +1 POINT";
    yourScore.textContent = "Your Score: " + score;
    Correct();
    NextQuestion();
  } else if (!Answer) {
    timerCount  -= 10;
    Incorrect();
    NextQuestion();
  }
})

function NextQuestion() {
  console.log(questions[questiontrack].choices.length);
  for (var i = 0; i < questions[questiontrack].choices.length; i++) {
    var buttonChosen = document.querySelector('#options' + i);
    buttonChosen.textContent = questions[questiontrack].choices[i]
  }
  questionTitle.textContent = questions[questiontrack].question;
  questiontrack++;
}

function runTimer() {
  timer = setInterval(function () {
    timerCount--;
    timerCountdown.textContent = timerCount;
    if (timerCount == 0) {
      // timerCount = finalScore.textContent;
      //document.getElementById('finalScore').textContent;
      timer.textContent = 60
      clearInterval(timer);
    }
  }, 1000)
}

function Incorrect () {
  feedback.textContent = "Wrong!"
  feedback.setAttribute("class", "")
}

function Correct () {
  feedback.textContent = "Correct!"
  feedback.setAttribute("class", "")
}