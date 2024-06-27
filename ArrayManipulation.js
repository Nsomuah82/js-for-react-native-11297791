// arrayManipulation.js

// Function to process the array
function processArray(numbers) {
    return numbers.map(number => {
        if (number % 2 === 0) {
            // Square the even numbers
            return number * number;
        } else {
            // Triple the odd numbers
            return number * 3;
        }
    });
}

// Function to format strings based on the processed array of numbers
function formatArrayStrings(strings, processedNumbers) {
    return strings.map((str, index) => {
        if (processedNumbers[index] % 2 === 0) {
            // Capitalize the entire string if the number is even
            return str.toUpperCase();
        } else {
            // Convert the string to lowercase if the number is odd
            return str.toLowerCase();
        }
    });
}

module.exports = { processArray, formatArrayStrings };
