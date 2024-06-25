// script.js
document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.button');
    let currentInput = '';
    let operator = '';
    let firstOperand = '';
    let secondOperand = '';
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');
            
            if (value === 'C') {
                currentInput = '';
                firstOperand = '';
                secondOperand = '';
                operator = '';
                display.textContent = '0';
            } else if (value === '=') {
                if (firstOperand !== '' && operator !== '' && currentInput !== '') {
                    secondOperand = currentInput;
                    currentInput = evaluateExpression(firstOperand, secondOperand, operator);
                    display.textContent = currentInput;
                    firstOperand = '';
                    secondOperand = '';
                    operator = '';
                }
            } else if (value === '+' || value === '-' || value === '*' || value === '/') {
                if (currentInput !== '') {
                    firstOperand = currentInput;
                    operator = value;
                    currentInput = '';
                }
            } else if (value === 'sqrt') {
                if (currentInput !== '') {
                    currentInput = Math.sqrt(parseFloat(currentInput)).toString();
                    display.textContent = currentInput;
                }
            } else {
                currentInput += value;
                display.textContent = currentInput;
            }
        });
    });

    function evaluateExpression(firstOperand, secondOperand, operator) {
        let result;
        switch (operator) {
            case '+':
                result = parseFloat(firstOperand) + parseFloat(secondOperand);
                break;
            case '-':
                result = parseFloat(firstOperand) - parseFloat(secondOperand);
                break;
            case '*':
                result = parseFloat(firstOperand) * parseFloat(secondOperand);
                break;
            case '/':
                result = parseFloat(firstOperand) / parseFloat(secondOperand);
                break;
            default:
                return 'Error';
        }
        return result.toString();
    }
});
