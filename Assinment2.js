// This function checks if the input is a valid number or not.
// It returns 'true' if it's a valid number, and 'false' if it's not.
function isValidNumber(input) {
    return !isNaN(input) && input !== null && input !== '';
}

// This function is called when the "Calculate" button is pressed.
function performCalculation() {
    // Get the values from the input fields
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let operation = document.getElementById("operation").value;
    let result;

    // Check if both numbers are valid
    if (!isValidNumber(num1) || !isValidNumber(num2)) {
        alert("Invalid input. Please enter valid numbers.");
        return; // Exit the function if input is invalid
    }

    // Convert the input values to floats
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    // Perform the calculation based on the selected operation
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            // Check for division by zero
            if (num2 === 0) {
                alert("Error: Division by zero is not allowed.");
                return;
            }
            result = num1 / num2;
            break;
        case '^':
            result = Math.pow(num1, num2);
            break;
        case 'cube':
            result = Math.cbrt(num1);
            break;
        case 'log':
            // Logarithm is only valid for positive numbers
            if (num1 <= 0) {
                alert("Logarithm is only defined for positive numbers.");
                return;
            }
            result = Math.log(num1);
            break;
        default:
            alert("Invalid operation selected.");
            return;
    }

    // Display the result on the webpage
    document.getElementById("result").innerText = "Result: " + result;
}
