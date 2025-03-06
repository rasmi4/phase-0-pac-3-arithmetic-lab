// Basic math functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// Increment and decrement functions
function increment(n) {
    return n + 1;
}

function decrement(n) {
    return n - 1;
}

// Function to parse an integer
function makeInt(n) {
    return parseInt(n, 10);
}

// Function to parse a float
function preserveDecimal(n) {
    return parseFloat(n);
}

// Export functions (if required for testing)
module.exports = {
    add,
    subtract,
    multiply,
    divide,
    increment,
    decrement,
    makeInt,
    preserveDecimal
};
