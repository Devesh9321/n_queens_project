// Main JavaScript file

// Add your JavaScript code here
console.log('Hello from main.js!');

// Define the size of the chessboard
const boardSize = 8;
const squareSize = 50;

// Function to create chessboard elements
function createChessboard() {
    const chessboardWrapper = document.querySelector('.chess__wrapper');
    const chessboard = document.createElement('div');
    chessboard.classList.add('chess__board');

    // Loop to create rows and elements
    for (let i = 0; i < 8; i++) {
        const row = document.createElement('div');
        row.classList.add('chess__board-row');

        // Loop to create elements within each row
        for (let j = 0; j < 8; j++) {
            const element = document.createElement('div');
            element.classList.add('chess__board-element');

            const wrapper = document.createElement('div');
            wrapper.classList.add('chess__board-element-wrapper');

            element.appendChild(wrapper);
            row.appendChild(element);
        }

        chessboard.appendChild(row);
    }

    chessboardWrapper.appendChild(chessboard);
}

// Create a function to animate the chessboard elements
function animateChessboard() {
    // Target the chessboard elements
    const chessboardRows = document.querySelectorAll('.chess__board-row');
    const chessboardElements = document.querySelectorAll('.chess__board-element');

    // Define animation properties
    const animationProperties = {
        targets: chessboardElements,
        opacity: [0, 1],
        translateY: [-50, 0],
        easing: 'easeInOutQuad',
        duration: 1000,
        delay: (el, index) => index * 50 // Delay animation for each element
    };

    // Apply animation to chessboard rows
    anime(animationProperties);

    // Apply animation to chessboard elements
    chessboardRows.forEach((row, index) => {
        anime({
            targets: row,
            opacity: [0, 1],
            easing: 'easeInOutQuad',
            duration: 1000,
            delay: index * 100 // Delay animation for each row
        });
    });
}



