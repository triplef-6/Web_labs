const puzzleContainer = document.getElementById('puzzle-container');
const message = document.getElementById('message');
const restartBtn = document.getElementById('restart');
const fullImage = document.createElement('div');

const pieceCount = 16; // кол-во деталей
let correctPieces = 0; // правельные части

function createPuzzle() {
    puzzleContainer.innerHTML = ''; 
    correctPieces = 0; 
    message.style.display = 'none'; 
    restartBtn.style.display = 'none'; 

    for (let i = 0; i < pieceCount; i++) { // создание пазла
        const piece = document.createElement('div');
        piece.classList.add('puzzle-piece');
        piece.style.backgroundImage = 'url(Persepolis.jpg)'; 
        piece.style.backgroundPosition = getBackgroundPosition(i); 
       
        let currentRotation = Math.floor(Math.random() * 4) * 90;
        piece.style.transform = `rotate(${currentRotation}deg)`;

        const isCorrect = (currentRotation === 0);
        piece.dataset.correct = isCorrect; 

        if (isCorrect) {
            correctPieces++;
        }

        piece.addEventListener('click', function() { // обработка кликов
            if (piece.dataset.correct === "true") return; 

            currentRotation = (currentRotation + 90) % 360; 
            piece.style.transform = `rotate(${currentRotation}deg)`;

            if (currentRotation === 0) {
                piece.dataset.correct = "true";
                correctPieces++;
                checkCompletion();
            }
        });

        puzzleContainer.appendChild(piece); 
    }
}

function getBackgroundPosition(index) { // расчёт позиции изображения
    const row = Math.floor(index / 4);
    const col = index % 4;
    return `${-col * 100}px ${-row * 100}px`; 
}

function checkCompletion() { // проверка завершения пазла
    if (correctPieces === pieceCount) {
        showFullImage();
    }
}

function showFullImage() { // отображение полной картинка
    puzzleContainer.style.display = 'none'; 
    
    fullImage.style.backgroundImage = 'url(Persepolis.jpg)';
    fullImage.style.width = '400px';
    fullImage.style.height = '400px';
    fullImage.style.backgroundSize = 'cover';
    fullImage.style.margin = '10px auto';
    fullImage.style.display = 'block';
    puzzleContainer.parentElement.appendChild(fullImage); 

    setTimeout(() => {
        message.style.display = 'block';
        restartBtn.style.display = 'block';
    }, 100);
}

restartBtn.addEventListener('click', function() { // начать заново
    fullImage.style.display = 'none'; 
    puzzleContainer.style.display = 'grid'; 
    createPuzzle(); 
});

window.onload = createPuzzle; // запуск пазла