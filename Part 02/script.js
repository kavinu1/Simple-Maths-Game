var score = 0;

for (var i = 1; i <= 10; i++) {
  var x = Math.floor(Math.random() * 101);
  var y = Math.floor(Math.random() * 101);
  var ops = ["+", "-", "*"];
  var op = ops[Math.floor(Math.random() * 3)];
  var correct;

  if (op == "+") correct = x + y;
  if (op == "-") correct = x - y;
  if (op == "*") correct = x * y;

  var ans = parseInt(prompt("Q" + i + ": " + x + " " + op + " " + y + " = ?"));

  document.getElementById("question" + i).textContent = x + " " + op + " " + y;
  document.getElementById("answer" + i).textContent = ans;

  var f = document.getElementById("feedback" + i);
  if (ans == correct) {
    f.innerHTML = "&checkmark;";
    f.className = "correct";
    score++;
  } else {
    f.innerHTML = "&cross; correct: " + correct;
    f.className = "incorrect";
  }
}

document.getElementById("score").textContent = score + "/10";

if (score < 2) document.body.style.backgroundColor = "lightcoral";
else if (score < 5) document.body.style.backgroundColor = "lightyellow";
else document.body.style.backgroundColor = "lightgreen";
