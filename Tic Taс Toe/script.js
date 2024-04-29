// Tic Tac Toe
    let currentPlayer = 'X';
    const board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    function makeMove(row, col) {
        if (board[row][col] === '') {
            board[row][col] = currentPlayer;
            document.getElementById('board').children[row * 3 + col].innerText = currentPlayer;
            if (checkWin()) {
                showMessage(currentPlayer + ' выиграл!');
                resetBoard();
            } else if (checkDraw()) {
                showMessage('Ничья!');
                resetBoard();
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    }

    function checkWin() {
        for (let i = 0; i < 3; i++) {
            if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
                return true; // Проверка по горизонтали
            }
            if (board[0][i] !== '' && board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
                return true; // Проверка по вертикали
            }
        }
        if (board[0][0] !== '' && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
            return true; // Проверка по диагонали (левая верхняя - правая нижняя)
        }
        if (board[0][2] !== '' && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
            return true; // Проверка по диагонали (правая верхняя - левая нижняя)
        }
        return false;
    }

    function checkDraw() {
        for (let row of board) {
            for (let cell of row) {
                if (cell === '') {
                    return false; // Есть пустая ячейка, игра не окончена
                }
            }
        }
        return true; // Нет пустых ячеек, ничья
    }

    function resetBoard() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                board[i][j] = '';
                document.getElementById('board').children[i * 3 + j].innerText = '';
            }
        }
        currentPlayer = 'X';
    }

    function showMessage(message) {
        const messageBox = document.getElementById('messageBox');
        messageBox.innerText = message;
        setTimeout(function() {
            messageBox.classList.add('show');
        }, 100);
        setTimeout(function() {
            messageBox.classList.remove('show');
        }, 3000);
    }
    showMessage('Привет, это Игра Кретсики-Нолики давай начнём!');

