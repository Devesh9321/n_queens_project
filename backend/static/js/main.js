// Main JavaScript file

// Add your JavaScript code here
console.log('Hello from main.js!');

// Validation function
function validateInput(inputValue) {
    if (inputValue === "") {
        return false;
    }
    var num = parseInt(inputValue);
    if (isNaN(num) || num < 0 || num >= 7 || num < 4 || inputValue.indexOf('.') !== -1) {
        return false;
    }

    return true;
}

// Function to create chessboard elements
function createChessboard(boardSize, id) {
    const chessboardWrapper = document.querySelector('.chess__wrapper');
    // chessboardWrapper.innerHTML = "";
    const chessboard = document.createElement('div');
    chessboard.setAttribute('id', id);
    chessboard.classList.add('chess__board');

    // Loop to create rows and elements
    for (let i = 0; i < boardSize; i++) {
        const row = document.createElement('div');
        row.classList.add('chess__board-row');

        // Loop to create elements within each row
        for (let j = 0; j < boardSize; j++) {
            const element = document.createElement('div');
            element.classList.add('chess__board-element');

            const wrapper = document.createElement('div');
            wrapper.setAttribute('id', id + '-' + i + '-' + j);
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

// Define a function to move the queen SVG element
function moveQueenToPosition(rowid) {
    const col = document.getElementById(rowid);
    col.style = "padding:1% 5%";
    const img = document.createElement('img');
    // img.setAttribute('id', 'your_id_here');
    img.classList.add('queen');
    img.src = '/static/svg/queen.svg'; // Set the image source

    col.appendChild(img);

}


//  Recurssion Tree
function drawNode(x, y, level) {
    ctx.beginPath();
    ctx.arc(x, y, nodeRadius, 0, Math.PI * 2);
    ctx.fillStyle = "Red";
    ctx.fill();
    ctx.fillStyle = "white";
    ctx.font = "14px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(level, x, y);
    ctx.closePath();
}

function drawArrow(x1, y1, x2, y2, direction, color) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const angle = Math.atan2(dy, dx);
    const arrowLength = 10;

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();

    if (direction === "rootToChild") {
        ctx.beginPath();
        ctx.moveTo(x2, y2);
        ctx.lineTo(
            x2 - arrowLength * Math.cos(angle - Math.PI / 6),
            y2 - arrowLength * Math.sin(angle - Math.PI / 6)
        );
        ctx.lineTo(
            x2 - arrowLength * Math.cos(angle + Math.PI / 6),
            y2 - arrowLength * Math.sin(angle + Math.PI / 6)
        );
        ctx.lineTo(x2, y2);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();
    } else if (direction === "childToRoot") {
        const midX = (x1 + x2) / 2;
        const midY = (y1 + y2) / 2;
        const controlX = midX - dy / 4;
        const controlY = midY + dx / 4;
        ctx.beginPath();
        ctx.moveTo(x2, y2);
        ctx.quadraticCurveTo(controlX, controlY, x1, y1);
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.closePath();
    }
}

function drawTree() {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const rootY = centerY - childDistance;

    drawNode(centerX, rootY, 1);
    for (let i = 0; i < childCount; i++) {
        const childX = centerX - ((childCount - 1) / 2) * childDistance + i * childDistance;
        const childY = centerY + childDistance;
        drawNode(childX, childY, 2);
        drawArrow(
            centerX,
            rootY + nodeRadius,
            childX,
            childY - nodeRadius,
            "rootToChild",
            "Blue"
        );
        // drawArrow(
            //     centerX,
            //     rootY + nodeRadius,
            //     childX,
            //     childY - nodeRadius,
            //     "childToRoot",
            //     "green"
            // );
            
;
    }
}




