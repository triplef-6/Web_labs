let fbook_vin = 0;
let inst_vin = 0;
let raund = 0;

function fill() {
    let field = document.getElementById(event.srcElement.id);
    let turn = document.getElementById("nothing");
    let fiels = document.getElementsByClassName("puzzle")
    let wrapper = document.getElementById("wrapper");

    if (turn.dataset.turn == 'fbook' && field.dataset.logo == '0') {
        field.src = "./resourses/fbook.png"
        field.dataset.logo = 'fbook'
        turn.dataset.turn = 'inst'
    }
    if (turn.dataset.turn == 'inst' && field.dataset.logo == '0') {
        field.src = "./resourses/inst.png"
        field.dataset.logo = 'inst'
        turn.dataset.turn = 'fbook'
    }

    if (isVictory(fiels)) {
        let text_vin = document.getElementById('text_vin')
        let text_inst = document.getElementById('text_inst')
        let text_fbook = document.getElementById('text_fbook')
        let text_raund = document.getElementById('text_raund')

        if (turn.dataset.turn == 'fbook') {
            inst_vin++
            text_vin.innerText = 'Победил игрок: inst' //+ turn.dataset.turn //+ "\nнажмите в любое место что бы продолжить";
        }
        if (turn.dataset.turn == 'inst') {
            fbook_vin++
            text_vin.innerText = 'Победил игрок: fbook' //+ turn.dataset.turn //+ "\nнажмите в любое место что бы продолжить";
        }
        raund++

        text_raund.innerText = raund;
        text_fbook.innerText = 'fbook: ' + fbook_vin;
        text_inst.innerText = 'inst: ' + inst_vin;

        // wrapper.remove();
        newGame()
    }
}

function newGame() {
    one.src = ""
    one.dataset.logo = 0

    two.src = ""
    two.dataset.logo = 0

    three.src = ""
    three.dataset.logo = 0

    four.src = ""
    four.dataset.logo = 0

    five.src = ""
    five.dataset.logo = 0

    six.src = ""
    six.dataset.logo = 0

    seven.src = ""
    seven.dataset.logo = 0

    eight.src = ""
    eight.dataset.logo = 0

    nine.src = ""
    nine.dataset.logo = 0
    
    let turn = document.getElementById("nothing");
    turn.dataset.turn = 'fbook'
}

function isVictory(elements) {
    let combs = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < combs.length; i++) {
        if ((elements[combs[i][0]].dataset.logo == elements[combs[i][1]].dataset.logo) && (elements[combs[i][1]].dataset.logo == elements[combs[i][2]].dataset.logo) && elements[combs[i][1]].dataset.logo!='0' ) {
            return true;
        }
    }
    return false;
}