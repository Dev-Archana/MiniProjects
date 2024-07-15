const chessboard = document.querySelector('.chessboard');

function createChessboard() {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const square = document.createElement('div');
            const color = (i + j) % 2 === 0 ? 'white' : 'black';
            square.classList.add(color);
            chessboard.appendChild(square);
        }
    }
}

createChessboard();
