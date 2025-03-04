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
            userResults.push(randomNumber);
            document.getElementById('user-results').innerText = userResults.join(', ');
            document.getElementById('user-record').innerText = Math.max(...userResults, 0);
        })
        .catch(error => console.error('Ошибка:', error));
    }
}