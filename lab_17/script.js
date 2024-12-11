
const answers = {
    positive: [
        "Да, конечно!",
        "Естественно!",
        "Точно!"
    ],
    hesitant_positive: [
        "Наверное...",
        "Думаю, да",
        "Возможно"
    ],
    neutral: [
        "Хз",
        "Попробуй ещё",
        "Давай заново"
    ],
    negative: [
        "А может пошёл ты",
        "Нет",
        "Иди на #*~%"
    ]
};

function getPrediction() {
    const categories = Object.keys(answers);
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const randomAnswer = answers[randomCategory][Math.floor(Math.random() * answers[randomCategory].length)];

    const text = document.getElementById('text');
    const answerContainer = document.getElementById('answer-container');
    const answer = document.getElementById('answer');

    text.textContent = randomAnswer;
    answerContainer.style.opacity = "0"; 
}