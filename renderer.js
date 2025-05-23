let timer = 0;
let interval = null;

const timerDisplay = document.getElementById("timer");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const saveButton = document.getElementById("saveButton");
//const resetButton = document.getElementById("resetButton");

function formatTime(seconds) {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hours}:${mins}:${secs}`;
}

startButton.addEventListener("click", () => {
    if (!interval) {
        interval = setInterval(() => {
            timer++;
            timerDisplay.textContent = formatTime(timer);
        }, 1000);
    }
});

stopButton.addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
});

const savedTimeDisplay = document.getElementById("savedTimeDisplay");

saveButton.addEventListener("click", () => {
    const timeString = formatTime(timer);
    window.electronAPI.saveTime(timeString);
    savedTimeDisplay.textContent = `Timer stopped at: ${timeString}`;
});