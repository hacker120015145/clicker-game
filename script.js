let clicks = 0;
let clicksPerClick = 1;
let autoClickerActive = false;
let autoClickerInterval = null;

const clickCountEl = document.getElementById('click-count');
const clickButton = document.getElementById('click-button');
const upgradeDoubleBtn = document.getElementById('upgrade-double');
const upgradeAutoBtn = document.getElementById('upgrade-auto');

function updateDisplay() {
  clickCountEl.textContent = `Clicks: ${clicks}`;
}

clickButton.addEventListener('click', () => {
  clicks += clicksPerClick;
  updateDisplay();
});

upgradeDoubleBtn.addEventListener('click', () => {
  if (clicks >= 50) {
    clicks -= 50;
    clicksPerClick *= 2;
    updateDisplay();
    upgradeDoubleBtn.disabled = true;
    upgradeDoubleBtn.textContent = "Upgrade gekocht!";
  } else {
    alert("Niet genoeg clicks!");
  }
});

upgradeAutoBtn.addEventListener('click', () => {
  if (autoClickerActive) return;
  if (clicks >= 100) {
    clicks -= 100;
    updateDisplay();
    autoClickerActive = true;
    upgradeAutoBtn.disabled = true;
    upgradeAutoBtn.textContent = "Auto Clicker actief!";
    autoClickerInterval = setInterval(() => {
      clicks += clicksPerClick;
      updateDisplay();
    }, 1000);
  } else {
    alert("Niet genoeg clicks!");
  }
});

updateDisplay();
