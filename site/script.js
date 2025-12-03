alert("You have a 50% chance to win! you can click the button as many times you want!");
const btn = document.getElementById("checkBtn");
const status = document.getElementById("status");
const title = document.getElementById("messageTitle");
const body = document.getElementById("messageBody");

btn.addEventListener("click", () => {
  status.className = "status wait";
  status.textContent = "...";
  title.textContent = "Checking...";
  body.textContent = "Validating entry...";

  setTimeout(() => {
    const win = Math.random() < 0.2; // 20% win chance

    if (win) {
      status.className = "status win";
      status.textContent = "✓";
      title.textContent = "Winner!";
      body.textContent = "You won the giveaway. A moderator will contact you.";
      alert("Great job! You won!");
    } else {
      status.className = "status lose";
      status.textContent = "✕";
      title.textContent = "Not Selected";
      body.textContent = "You were not selected this time.";
    }
  }, 1200);
});
