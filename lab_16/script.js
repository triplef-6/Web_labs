const pin1 = document.getElementById('pin1');
const pin2 = document.getElementById('pin2');
const numpad = document.getElementById('numpad');
const message = document.getElementById('message');
let activeInput = pin1;

    function focusInput(input) {
        activeInput = input;
        message.textContent = "";
    }

    pin1.addEventListener('focus', () => focusInput(pin1));
    pin2.addEventListener('focus', () => focusInput(pin2));

    const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'C', '0', '←'];
    buttons.forEach(value => {
        const button = document.createElement('button');
        button.textContent = value === '←' ? '⌫' : value; 
        if (value === 'C') button.classList.add('clear-btn');
        button.onclick = () => handleNumpadClick(value);
        numpad.appendChild(button);
    });

    function handleNumpadClick(value) {
        if (value === 'C') {
            activeInput.value = '';
        } else if (value === '←') {
            activeInput.value = activeInput.value.slice(0, -1);
        } else {
            if (activeInput.value.length < 6) {
                activeInput.value += value;
            }
        }

        if (pin1.value.length === 6 && pin2.value.length === 6) {
            validatePins();
        }
    }

    function validatePins() {
        if (pin1.value === pin2.value) {
            message.textContent = "ПИН-код установлен";
            message.style.color = "#18df07";
        } else {
            message.textContent = "ПИН-коды не совпадают";
            message.style.color = "red";
        }
    }