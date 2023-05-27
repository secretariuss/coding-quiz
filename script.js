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

var start = document.getElementById("start");
start.onclick = startQuiz;

function startQuiz() {
  timerCount = 76;
  runTimer();
  start.setAttribute("hidden", "true");
}

function runTimer() {
  timer = setInterval(function () {
    timerCount--;
    timerCountdown.textContent = timerCount;
    if(timerCount == 0) { 
      // timerCount = finalScore.textContent;
      //document.getElementById('finalScore').textContent;
      clearInterval(timer);
    }
  }, 1000)
}