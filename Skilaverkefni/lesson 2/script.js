const board = document.getElementById('board');
const status = document.getElementById('status');
// currentPlayer set as let to be able to toggle between X and O
let currentPlayer = 'O';
const gameBoard = Array(9).fill(null);
const cells = []; // Store cell references

const WIN_PATTERNS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

function handleClick(index) {
    if (gameBoard[index] || checkWinner()) return;
    
    gameBoard[index] = currentPlayer;
    cells[index].textContent = currentPlayer;
    
    if (checkWinner()) {
        status.textContent = `${currentPlayer} wins!`;
        return;
    }
    
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    status.textContent = `Current player: ${currentPlayer}`;
}

function checkWinner() {
    for (const pattern of WIN_PATTERNS) {
        const [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            return gameBoard[a];
        }
    }
    return null;
}


function resetGame() {
    gameBoard.fill(null);
    cells.forEach(cell => cell.textContent = '');
    currentPlayer = 'O';
    status.textContent = 'Current player: O';
}

function createBoard() {
    for (let index = 0; index < 9; index++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.id = `cell-${index}`;
        cell.addEventListener('click', () => handleClick(index));
        board.appendChild(cell);
        cells.push(cell); // Store reference
    }
}

createBoard();