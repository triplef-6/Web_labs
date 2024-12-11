let secretNumber; // секретное число
let attemptCount = 0; // попытки

function generateSecretNumber() { // генерация случайного числа
    let digits = [];
    while (digits.length < 4) {
        let digit = Math.floor(Math.random() * 10).toString();
        if (!digits.includes(digit)) digits.push(digit);
    }
    secretNumber = digits.join('');
    console.log(secretNumber);
}
generateSecretNumber();

function makeGuess() { // попытка
    const guess = document.getElementById("guess-input").value;
    if (guess.length !== 4 || new Set(guess).size !== 4 || isNaN(guess)) {
        document.getElementById("feedback").textContent = "введите четырехзначное число без повторяющихся цифр";
        return;
    }

    let bulls = 0;
    let cows = 0;
    attemptCount++;

    for (let i = 0; i < 4; i++) {
        if (guess[i] === secretNumber[i]) {
            bulls++;
        } else if (secretNumber.includes(guess[i])) {
            cows++;
        }
    }

    updateHistory(attemptCount, guess, bulls, cows);

    if (bulls === 4) {
        document.getElementById("feedback").textContent = `Вы угадали!!!\nСгенерировано новое число`;
        generateSecretNumber();
    } else {
        document.getElementById("feedback").textContent = `${bulls} быков, ${cows} коров`;
    }

    document.getElementById("guess-input").value = "";
}

function updateHistory(attempt, guess, bulls, cows) { // обновление истории
    const historyTable = document.getElementById("history").getElementsByTagName('tbody')[0];
    const newRow = historyTable.insertRow();

    const cellAttempt = newRow.insertCell(0);
    const cellGuess = newRow.insertCell(1);
    const cellBulls = newRow.insertCell(2);
    const cellCows = newRow.insertCell(3);

    cellAttempt.textContent = attempt;
    cellGuess.textContent = guess;
    cellBulls.textContent = bulls;
    cellCows.textContent = cows;
}

// правила игры
document.getElementById("rules").onclick = function() {
    document.getElementById("rules-modal").style.display = "block";
};
document.getElementById("close-modal").onclick = function() {
    document.getElementById("rules-modal").style.display = "none";
};