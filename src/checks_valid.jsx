// This checks the validity of the new inputted value in the sudoku board

import React from 'react';

function isValidMove(board, row, col, value) {
  const size = board.length;
  const rowBoxSize = size === 6 ? 2 : 3;
  const colBoxSize = size === 6 ? 3 : 3;

  const invalidMove = false;
    const validMove = true;

  // Check row
  for (let j = 0; j < size; j++) {
    if (board[row][j] === value) {
      return invalidMove;
    }
  }

  // Check column
  for (let i = 0; i < size; i++) {
    if (board[i][col] === value) {
      return invalidMove;
    }
  }

  // Check box
  const boxRowStart = Math.floor(row / rowBoxSize) * rowBoxSize;
  const boxColStart = Math.floor(col / colBoxSize) * colBoxSize;

  for (let i = boxRowStart; i < Math.min(size, boxRowStart + rowBoxSize); i++) {
    for (let j = boxColStart; j < Math.min(size, boxColStart + colBoxSize); j++) {
      if (board[i][j] === value) {
        return false;
      }
    }
  }

  return validMove;
}

export default isValidMove;
