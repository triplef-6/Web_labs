    // const gridSize = 3;
    // let board = Array(gridSize).fill().map(() => Array(gridSize).fill(0));
    // const gameContainer = document.getElementById('game-container');
    // let score = 0;

    // function initGame() {
    //     board = Array(gridSize).fill().map(() => Array(gridSize).fill(0));
    //     score = 0;
    //     addRandomTile();
    //     addRandomTile();
    //     updateBoard();
    // }

    // function addRandomTile() {
    //     const emptyCells = [];
    //     for (let i = 0; i < gridSize; i++) {
    //         for (let j = 0; j < gridSize; j++) {
    //             if (board[i][j] === 0) {
    //                 emptyCells.push({ x: i, y: j });
    //             }
    //         }result
    //     }
    //     if (emptyCells.length > 0) {
    //         const { x, y } = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    //         board[x][y] = Math.random() < 0.9 ? 2 : 4;
    //     }
    // }

    // function updateBoard() {
    //     gameContainer.innerHTML = '';
    //     for (let i = 0; i < gridSize; i++) {
    //         for (let j = 0; j < gridSize; j++) {
    //             const cell = document.createElement('div');
    //             cell.classList.add('cell');
    //             cell.textContent = board[i][j] === 0 ? '' : board[i][j];
    //             cell.dataset.row = i;
    //             cell.dataset.col = j;
    //             cell.style.transform = `translate(${j * 110}px, ${i * 110}px)`;
    //             gameContainer.appendChild(cell);
    //         }
    //     }
    //     document.getElementById('result').textContent = `Результат игры: ${score}`;
    // }

    // function move(direction) {
    //     let moved = false;
    //     const previousBoard = board.map(row => [...row]);

    //     switch (direction) {
    //         case 'left':
    //             for (let i = 0; i < gridSize; i++) {
    //                 let row = board[i].filter(cell => cell !== 0);
    //                 for (let j = 0; j < row.length - 1; j++) {
    //                     if (row[j] === row[j + 1]) {
    //                         row[j] *= 2;
    //                         score += row[j];
    //                         row[j + 1] = 0;
    //                         j++;
    //                     }
    //                 }
    //                 row = row.filter(cell => cell !== 0);
    //                 while (row.length < gridSize) {
    //                     row.push(0);
    //                 }
    //                 if (JSON.stringify(board[i]) !== JSON.stringify(row)) {
    //                     moved = true;
    //                 }
    //                 board[i] = row;
    //             }
    //             break;
    //         case 'right':
    //             for (let i = 0; i < gridSize; i++) {
    //                 let row = board[i].filter(cell => cell !== 0);
    //                 for (let j = row.length - 1; j > 0; j--) {
    //                     if (row[j] === row[j - 1]) {
    //                         row[j] *= 2;
    //                         score += row[j];
    //                         row[j - 1] = 0;
    //                         j--;
    //                     }
    //                 }
    //                 row = row.filter(cell => cell !== 0);
    //                 while (row.length < gridSize) {
    //                     row.unshift(0);
    //                 }
    //                 if (JSON.stringify(board[i]) !== JSON.stringify(row)) {
    //                     moved = true;
    //                 }
    //                 board[i] = row;
    //             }
    //             break;
    //         case 'up':
    //             for (let j = 0; j < gridSize; j++) {
    //                 let col = [];
    //                 for (let i = 0; i < gridSize; i++) {
    //                     col.push(board[i][j]);
    //                 }
    //                 col = col.filter(cell => cell !== 0);
    //                 for (let i = 0; i < col.length - 1; i++) {
    //                     if (col[i] === col[i + 1]) {
    //                         col[i] *= 2;
    //                         score += col[i];
    //                         col[i + 1] = 0;
    //                         i++;
    //                     }
    //                 }
    //                 col = col.filter(cell => cell !== 0);
    //                 while (col.length < gridSize) {
    //                     col.push(0);
    //                 }
    //                 for (let i = 0; i < gridSize; i++) {
    //                     board[i][j] = col[i];
    //                 }
    //                 if (JSON.stringify(col) !== JSON.stringify(board.map(row => row[j]))) {
    //                     moved = true;
    //                 }
    //             }
    //             break;
    //         case 'down':
    //             for (let j = 0; j < gridSize; j++) {
    //                 let col = [];
    //                 for (let i = 0; i < gridSize; i++) {
    //                     col.push(board[i][j]);
    //                 }
    //                 col = col.filter(cell => cell !== 0);
    //                 for (let i = col.length - 1; i > 0; i--) {
    //                     if (col[i] === col[i - 1]) {
    //                         col[i] *= 2;
    //                         score += col[i];
    //                         col[i - 1] = 0;
    //                         i--;
    //                     }
    //                 }
    //                 col = col.filter(cell => cell !== 0);
    //                 while (col.length < gridSize) {
    //                     col.unshift(0);
    //                 }
    //                 for (let i = 0; i < gridSize; i++) {
    //                     board[i][j] = col[i];
    //                 }
    //                 if (JSON.stringify(col) !== JSON.stringify(board.map(row => row[j]))) {
    //                     moved = true;
    //                 }
    //             }
    //             break;
    //     }

    //     console.log(moved)
    //     if (moved) {
    //         animateMovement(previousBoard);
    //         addRandomTile();
    //         updateBoard();
    //         if (isGameOver()) {
    //             alert(`Игра окончена. Результат: ${score}`);
    //             setResultGame(score);
    //             initGame();
    //         }
    //     }
    // }

    // function animateMovement(previousBoard) {
    //     const cells = document.querySelectorAll('.cell');
    //     cells.forEach((cell, index) => {
    //         const previousRow = Math.floor(index / gridSize);
    //         const previousCol = index % gridSize;
    //         const currentRow = parseInt(cell.dataset.row);
    //         const currentCol = parseInt(cell.dataset.col);
    //         const previousValue = previousBoard[previousRow][previousCol];
    //         const currentValue = board[currentRow][currentCol];

    //         if (previousValue !== currentValue && currentValue !== 0) {
    //             cell.style.transform = `translate(${currentCol * 110}px, ${currentRow * 110}px)`;
    //         }
    //     });
    // }

    // function isGameOver() {
    //     for (let i = 0; i < gridSize; i++) {
    //         for (let j = 0; j < gridSize; j++) {
    //             if (board[i][j] === 0) {
    //                 return false;
    //             }
    //             if (j < gridSize - 1 && board[i][j] === board[i][j + 1]) {
    //                 return false;
    //             }
    //             if (i < gridSize - 1 && board[i][j] === board[i + 1][j]) {
    //                 return false;
    //             }
    //         }
    //     }
    //     return true;
    // }

    // document.addEventListener('keydown', event => {
    //     switch (event.key) {
    //         case 'ArrowLeft':
    //             move('left');
    //             break;
    //         case 'ArrowRight':
    //             move('right');
    //             break;
    //         case 'ArrowUp':
    //             move('up');
    //             break;
    //         case 'ArrowDown':
    //             move('down');
    //             break;
    //     }
    // });

    // initGame();

    const gridSize = 3;
    let board = Array(gridSize).fill().map(() => Array(gridSize).fill(0));
    const gameContainer = document.getElementById('game-container');
    let score = 0;

    function initGame() {
        board = Array(gridSize).fill().map(() => Array(gridSize).fill(0));
        score = 0;
        addRandomTile();
        addRandomTile();
        updateBoard();
    }

    function addRandomTile() {
        const emptyCells = [];
        for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
                if (board[i][j] === 0) {
                    emptyCells.push({ x: i, y: j });
                }
            }
        }
        if (emptyCells.length > 0) {
            const { x, y } = emptyCells[Math.floor(Math.random() * emptyCells.length)];
            board[x][y] = Math.random() < 0.9 ? 2 : 4;
        }
    }

    function updateBoard() {
        gameContainer.innerHTML = '';
        for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.textContent = board[i][j] === 0 ? '' : board[i][j];
                cell.dataset.row = i;
                cell.dataset.col = j;
                cell.style.transform = `translate(${j * 110}px, ${i * 110}px)`;
                gameContainer.appendChild(cell);
            }
        }
        document.getElementById('score').textContent = `Score: ${score}`;
    }

    function move(direction) {
        let moved = false;
        const previousBoard = board.map(row => [...row]);
        const previousPositions = [];

        switch (direction) {
            case 'left':
                for (let i = 0; i < gridSize; i++) {
                    let row = board[i].filter(cell => cell !== 0);
                    for (let j = 0; j < row.length - 1; j++) {
                        if (row[j] === row[j + 1]) {
                            row[j] *= 2;
                            score += row[j];
                            row[j + 1] = 0;
                            j++;
                        }
                    }
                    row = row.filter(cell => cell !== 0);
                    while (row.length < gridSize) {
                        row.push(0);
                    }
                    if (JSON.stringify(board[i]) !== JSON.stringify(row)) {
                        moved = true;
                    }
                    board[i] = row;
                }
                break;
            case 'right':
                for (let i = 0; i < gridSize; i++) {
                    let row = board[i].filter(cell => cell !== 0);
                    for (let j = row.length - 1; j > 0; j--) {
                        if (row[j] === row[j - 1]) {
                            row[j] *= 2;
                            score += row[j];
                            row[j - 1] = 0;
                            j--;
                        }
                    }
                    row = row.filter(cell => cell !== 0);
                    while (row.length < gridSize) {
                        row.unshift(0);
                    }
                    if (JSON.stringify(board[i]) !== JSON.stringify(row)) {
                        moved = true;
                    }
                    board[i] = row;
                }
                break;
            case 'up':
                for (let j = 0; j < gridSize; j++) {
                    let col = [];
                    for (let i = 0; i < gridSize; i++) {
                        col.push(board[i][j]);
                    }
                    col = col.filter(cell => cell !== 0);
                    for (let i = 0; i < col.length - 1; i++) {
                        if (col[i] === col[i + 1]) {
                            col[i] *= 2;
                            score += col[i];
                            col[i + 1] = 0;
                            i++;
                        }
                    }
                    col = col.filter(cell => cell !== 0);
                    while (col.length < gridSize) {
                        col.push(0);
                    }
                    for (let i = 0; i < gridSize; i++) {
                        board[i][j] = col[i];
                    }
                    if (JSON.stringify(col) !== JSON.stringify(board.map(row => row[j]))) {
                        moved = true;
                    }
                }
                break;
            case 'down':
                for (let j = 0; j < gridSize; j++) {
                    let col = [];
                    for (let i = 0; i < gridSize; i++) {
                        col.push(board[i][j]);
                    }
                    col = col.filter(cell => cell !== 0);
                    for (let i = col.length - 1; i > 0; i--) {
                        if (col[i] === col[i - 1]) {
                            col[i] *= 2;
                            score += col[i];
                            col[i - 1] = 0;
                            i--;
                        }
                    }
                    col = col.filter(cell => cell !== 0);
                    while (col.length < gridSize) {
                        col.unshift(0);
                    }
                    for (let i = 0; i < gridSize; i++) {
                        board[i][j] = col[i];
                    }
                    if (JSON.stringify(col) !== JSON.stringify(board.map(row => row[j]))) {
                        moved = true;
                    }
                }
                break;
        }

        if (moved) {
            for (let i = 0; i < gridSize; i++) {
                for (let j = 0; j < gridSize; j++) {
                    if (board[i][j] !== previousBoard[i][j]) {
                        previousPositions.push({ row: i, col: j, previousValue: previousBoard[i][j] });
                    }
                }
            }
            animateMovement(previousPositions);
            addRandomTile();
            updateBoard();
            if (isGameOver()) {
                alert(`Game Over! Your score: ${score}`);
                initGame();
            }
        }
    }

    function animateMovement(previousPositions) {
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            const currentRow = parseInt(cell.dataset.row);
            const currentCol = parseInt(cell.dataset.col);
            const previousPosition = previousPositions.find(pos => pos.row === currentRow && pos.col === currentCol);

            if (previousPosition && previousPosition.previousValue !== board[currentRow][currentCol]) {
                const previousRow = previousPosition.row;
                const previousCol = previousPosition.col;
                cell.style.transform = `translate(${previousCol * 110}px, ${previousRow * 110}px)`;
                setTimeout(() => {
                    cell.style.transform = `translate(${currentCol * 110}px, ${currentRow * 110}px)`;
                }, 50);
            }
        });
    }

    function isGameOver() {
        for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
                if (board[i][j] === 0) {
                    return false;
                }
                if (j < gridSize - 1 && board[i][j] === board[i][j + 1]) {
                    return false;
                }
                if (i < gridSize - 1 && board[i][j] === board[i + 1][j]) {
                    return false;
                }
            }
        }
        return true;
    }

    document.addEventListener('keydown', event => {
        switch (event.key) {
            case 'ArrowLeft':
                move('left');
                break;
            case 'ArrowRight':
                move('right');
                break;
            case 'ArrowUp':
                move('up');
                break;
            case 'ArrowDown':
                move('down');
                break;
        }
    });

    initGame();


    //script

let authToken = null;
let userId = null;
let userResults = [];

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

function setResultGame(resGame) { // игра
    // const min = 20;
    // const max = 10000;
    // const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    // document.getElementById('result').innerText = `Результат игры: ${randomNumber}`;
    // console.log(randomNumber);

    if (userId != null) { // если выполнен вход
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
            userResults.push();
            document.getElementById('user-results').innerText = userResults.join(', ');
            document.getElementById('user-record').innerText = Math.max(...userResults, 0);
        })
        .catch(error => console.error('Ошибка:', error));
    }
}