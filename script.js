// script.js
const checkBtn = document.getElementById('checkBtn');
const statusEl = document.getElementById('status');
const messageTitle = document.getElementById('messageTitle');
const messageBody = document.getElementById('messageBody');
const claimArea = document.getElementById('claimArea');
const claimBtn = document.getElementById('claimBtn');
const spinnerHtml = '<div class="spinner" aria-hidden="true"></div>';

function setWaiting() {
  statusEl.className = 'status wait';
  statusEl.innerHTML = spinnerHtml;
  messageTitle.textContent = 'Checking...';
  messageBody.textContent = 'Validating the code. This is just a simulation.';
  claimArea.style.display = 'none';
}

function setLose() {
  statusEl.className = 'status lose';
  statusEl.textContent = '✕';
  messageTitle.textContent = 'Oops — not a winner';
  messageBody.textContent = 'You did not get Nitro this time. Better luck next time!';
  claimArea.style.display = 'none';
}

function setWin() {
  statusEl.className = 'status win';
  statusEl.textContent = '✓';
  messageTitle.textContent = 'Congrats — (prank)';
  messageBody.textContent = 'This result says you won, but this is a harmless prank. Do not click external claim links.';
  claimArea.style.display = 'flex';
}

// 80% lose, 20% win
function rollOutcome(winProbability = 0.20) {
  return Math.random() < winProbability; // true = win
}

checkBtn.addEventListener('click', () => {
  setWaiting();
  // simulate server checking delay
  const delay = 1200 + Math.floor(Math.random() * 1600);
  setTimeout(() => {
    const win = rollOutcome(0.20);
    if (win) setWin(); else setLose();
  }, delay);
});

claimBtn.addEventListener('click', () => {
  alert('Nice! But this was a prank — do NOT trust unknown claim links. Stay safe!');
  alert('But you can dm luisthegoat7301 in discord');
});

document.getElementById('codeInput').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') checkBtn.click();
});
