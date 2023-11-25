let questions = [
  {
    question: "Who is the current prime minister of India?",
    options: [
      "AdityaNath yogi",
      "Narendra Modi",
      "Ashok Gahlot",
      "Salman Khan",
    ],
  },
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Rajasthan", "Karnataka"],
  },
  { question: "How many states ther are in India?", options: [32, 25, 28, 29] },
  {
    question: "In which year India got freedom?",
    options: [1942, 1964, 1947, 1945],
  },
  {
    question: "Who is the richest person in India?",
    options: ["Anil Ambani", "Elon Musk", "Sharukh khan", "Mukesh Ambani"],
  },
];
let correctAnswers = ["Narendra Modi", "Delhi", 28, 1947, "Mukesh Ambani"];
let currentQuestion = 0;
let currentPage = 1;
let count = 1;
let score = 0;
let scoreCount = 0;
let btnDiv = document.querySelector(".btn");
let headingThree = document.querySelector(".inside-content h3");
let headingFour = document.querySelectorAll(".inside-content h4"); // array of h4 headings
let headingSix = document.querySelector(".btn h6");
let answerDiv = document.querySelector(".answer-div");
let userScore = document.querySelector(".user-score");
let button = document.querySelector(".btn button")

function displayQuestions() {
  headingThree.textContent = questions[currentQuestion].question;
  questions[currentQuestion].options.forEach((item, index) => {
    headingFour[index].textContent = item;
  });
}
displayQuestions();

btnDiv.addEventListener("click", function () {
    button.classList.toggle("removeIt")
    headingFour.forEach((item) => {
        item.classList.remove("bg-brown");
        item.classList.remove("bg-skyblue");
    });
    if (count !== 5) {
      answerDiv.classList.toggle("disabled");
    currentQuestion++;
    count++;
    currentPage = "PAGE :" + count + "/5";
    headingSix.textContent = currentPage;
    displayQuestions();
  } else if(count==5){
    console.log('klsjd')
  }
});
answerDiv.addEventListener("click", function (e) {
    button.classList.toggle("removeIt")
  let selectedAnswer = e.target.textContent;
  answerDiv.classList.toggle("disabled");
  headingFour.forEach((item, index) => {
    if (item.textContent == correctAnswers[currentQuestion]) {
      item.classList.toggle("bg-skyblue");
    } else if (item.textContent == selectedAnswer) {
      item.classList.toggle("bg-brown");
    }
  });
  if (selectedAnswer == correctAnswers[currentQuestion]) {
    scoreCount++;
    userScore.textContent = "SCORE :" + scoreCount + "/5";
  }
});
