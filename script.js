document.getElementById("calculateBtn").addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;
    const resultDisplay = document.getElementById("result");

    if (isNaN(num1) || isNaN(num2) || !operation) {
        resultDisplay.textContent = "Result: Please enter valid inputs!";
        return;
    }

    // Faulty operation (10% chance)
    const isFaulty = Math.random() < 0.1; // 10% probability
    let result;

    if (isFaulty) {
        switch (operation) {
            case "+":
                result = num1 - num2; // Faulty
                break;
            case "-":
                result = num1 / num2; // Faulty
                break;
            case "*":
                result = num1 + num2; // Faulty
                break;
            case "/":
                result = num1 ** num2; // Faulty
                break;
            default:
                resultDisplay.textContent = "Result: Invalid operation!";
                return;
        }
    } else {
        // Correct operation
        switch (operation) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                if (num2 === 0) {
                    resultDisplay.textContent = "Result: Division by zero is not allowed!";
                    return;
                }
                result = num1 / num2;
                break;
            default:
                resultDisplay.textContent = "Result: Invalid operation!";
                return;
        }
    }

    resultDisplay.textContent = `Result: ${result}`;
});
