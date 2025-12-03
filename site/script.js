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
      alert("great job you won!, not"
    } else {
      status.className = "status lose";
      status.textContent = "✕";
      title.textContent = "Not Selected";
      body.textContent = "You were not selected this time.";
    }
  }, 1200);
});
