function clearResult() {
    document.getElementById('result').value = '';
}

function deleteChar() {
    let currentValue = document.getElementById('result').value;
    document.getElementById('result').value = currentValue.slice(0, -1);
}

function appendCharacter(char) {
    document.getElementById('result').value += char;
}

function calculateResult() {
    try {
        let result = eval(document.getElementById('result').value);
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}
