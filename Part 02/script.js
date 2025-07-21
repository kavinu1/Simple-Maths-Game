function startGame() {
  let score = 0;

  for (let i = 1; i <= 10; i++) {
    const x = Math.floor(Math.random() * 101);
    const y = Math.floor(Math.random() * 101);
    const ops = ["+", "-", "*"];
    const op = ops[Math.floor(Math.random() * ops.length)];

    let correct;
    switch (op) {
      case "+":
        correct = x + y;
        break;
      case "-":
        correct = x - y;
        break;
      case "*":
        correct = x * y;
        break;
    }

    let ans;
    do {
      ans = prompt(`Question 0${i}: ${x} ${op} ${y} = ?`);
    } while (ans === null || ans.trim() === "" || isNaN(ans));

    ans = Number(ans.trim());

    document.getElementById(`question${i}`).textContent = `${x} ${op} ${y}`;
    document.getElementById(`answer${i}`).textContent = ans;

    const f = document.getElementById(`feedback${i}`);
    if (ans === correct) {
      f.innerHTML = "&checkmark;";
      f.className = "correct";
      score += 10;
    } else {
      f.innerHTML = `&cross; correct: ${correct}`;
      f.className = "incorrect";
    }
  }

  document.getElementById("score").textContent = `${score}/100`;

  if (score < 20) {
    document.body.style.backgroundColor = "lightcoral";
  } else if (score < 50) {
    document.body.style.backgroundColor = "lightyellow";
  } else {
    document.body.style.backgroundColor = "lightgreen";
  }
}
