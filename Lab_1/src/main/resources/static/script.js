function getResultGame() {
    const min = 20;
    const max = 10000;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    document.getElementById('result').innerText = `Результат игры: ${randomNumber}`;
    console.log(randomNumber);

}