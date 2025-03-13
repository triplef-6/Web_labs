let authToken = null; // токен
let userId = null; // id 
let userResults = []; // локальный список рузультатов
let gameState = null; // игра

function registration() { // регистрация
    const name_r = document.getElementById('name_r').value;
    const surname_r = document.getElementById('surname_r').value;

    fetch('/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({ "name": name_r, "surname": surname_r })
    })
}
function authenticate() { // аутентификация
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;

    fetch('/user/authenticate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, surname })
    })
    .then(response => response.json())
    .then(user => {
        if (user) {
            authToken = 'dummy-token-for-' + user.id; // Replace with actual token logic
            userId = user.id;
            userResults = user.results || [];
            displayUserInfo(user);
            alert('Аутентификация успешна!');
            document.getElementById('gameSection').style.display = 'block';
        } else {
            alert('Неверные учетные данные.');
        }
    })
    .catch(error => console.error('Ошибка:', error));
}
function displayUserInfo(user) { // отображение данных
    document.getElementById('user-info').style.display = 'block';
    document.getElementById('user-name').innerText = user.name;
    document.getElementById('user-surname').innerText = user.surname;
    document.getElementById('user-results').innerText = userResults.join(', ');
    document.getElementById('user-record').innerText = user.record;
}

function setResultGame(resGame) { // запись результатов игры
    if (authToken) { // если выполнен вход
        fetch(`/user/${userId}/results`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            },
            body: JSON.stringify(resGame)
        })
        .then(response => response.text())
        .then(message => {
            console.log(message);
            userResults.push(resGame);
            document.getElementById('user-results').innerText = userResults.join(', ');
            document.getElementById('user-record').innerText = Math.max(...userResults, 0);
        })
        .catch(error => console.error('Ошибка:', error));
    }
}

function startNewGame() { // старт игры
    if (authToken && gameState && gameState.score > 0) { // Если есть активная игра — обновляем рекорд перед запуском новой игры
        setResultGame(gameState.score);
    }
    fetch('/game/new', { method: 'POST' })
        .then(response => response.json())
        .then(data => {
            gameState = data;
            updateBoard();
        });
}
function move(direction) { // изменения доски
    if (!authToken) {
        alert('Сначала выполните вход!');
        return;
    }
    fetch('/game/move', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ direction: direction })
    })
        .then(response => response.json())
        .then(data => {
        gameState = data;
        updateBoard();
        // Если игра окончена
        if (gameState.gameOver && authToken) {
            setResultGame(gameState.score);
        }
    });
}
function updateBoard() { // обновление доски
    const boardDiv = document.getElementById('board');
    boardDiv.innerHTML = '';
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const tileValue = gameState.board[i][j];
            const tileDiv = document.createElement('div');
            tileDiv.className = 'tile tile-' + tileValue;
            tileDiv.textContent = tileValue !== 0 ? tileValue : '';
            boardDiv.appendChild(tileDiv);
        }
    }
    document.getElementById('score').textContent = gameState.score;
    document.getElementById('gameOverMsg').textContent = gameState.gameOver ? "Игра окончена!" : "";
}
document.addEventListener('keydown', function(event) { // обработка клавишь
    if (!authToken || !gameState || gameState.gameOver) return;
        switch (event.key) {
            case 'ArrowUp': {
                move("up");
                break;
            }
            case 'ArrowDown': {
                move("down"); 
                break;
            }
            case 'ArrowLeft': {
                move("left"); 
                break;
            }
            case 'ArrowRight': {
                move("right"); 
                break;
            }
    }
});
document.getElementById('newGameBtn').addEventListener('click', startNewGame);