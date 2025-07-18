const questions = [
  { q: "8 + 7", answer: 15 },
  { q: "12 × 6", answer: 72 },
  { q: "26 - 7", answer: 19 },
  { q: "9 × 3", answer: 27 },
  { q: "100 ÷ 4", answer: 25 },
  { q: "14 + 18", answer: 32 },
  { q: "7 × 8", answer: 56 },
  { q: "49 ÷ 7", answer: 7 },
  { q: "30 - 12", answer: 18 },
  { q: "5 × 5", answer: 25 },
];

let correctCount = 0;

for (let i = 0; i < questions.length; i++) {
  const userInput = prompt(questions[i].q + " = ...");
  const userAnswer = parseInt(userInput);

  const qSpan = document.getElementById("question" + (i + 1));
  const aSpan = document.getElementById("answer" + (i + 1));
  const fSpan = document.getElementById("feedback" + (i + 1));

  qSpan.textContent = questions[i].q + " = ...";
  aSpan.textContent = isNaN(userAnswer) ? "No answer" : userAnswer;

  if (userAnswer === questions[i].answer) {
    fSpan.innerHTML = "&checkmark;";
    fSpan.classList.add("correct");
    correctCount++;
  } else {
    fSpan.innerHTML = "&cross; The correct answer is " + questions[i].answer;
    fSpan.classList.add("incorrect");
  }
}

document.getElementById("score").textContent = correctCount * 10 + " / 100";
