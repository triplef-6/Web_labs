let timerInterval = null;
let remainingTime = 0; 

const timerDisplay = document.getElementById('timer-display');
const minutesInput = document.getElementById('minutes-input');
const secondsInput = document.getElementById('seconds-input');
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const resetButton = document.getElementById('reset-button');

function formatTime(ms) { // форматирование времени
    const minutes = Math.floor(ms / 60000).toString().padStart(2, '0');
    const seconds = Math.floor((ms % 60000) / 1000).toString().padStart(2, '0');
    const milliseconds = Math.floor((ms % 1000) / 10).toString().padStart(2, '0');
    return `${minutes}:${seconds}:${milliseconds}`;
}

function updateDisplay() {
    timerDisplay.textContent = formatTime(remainingTime);
}

function startTimer() {
    if (!timerInterval) {
        const minutes = parseInt(minutesInput.value) || 0;
        const seconds = parseInt(secondsInput.value) || 0;
        if (remainingTime === 0) {
            remainingTime = (minutes * 60 + seconds) * 1000; 
        }
        timerInterval = setInterval(() => {
            if (remainingTime > 0) {
                remainingTime -= 10; 
                updateDisplay();
            } else {
                clearInterval(timerInterval);
                timerInterval = null;
            }
        }, 10);

        startButton.disabled = true;
        stopButton.disabled = false;
        resetButton.disabled = false;
    }
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;

    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = false;
}

function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    remainingTime = 0;
    updateDisplay();

    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

updateDisplay();