import React from 'react';

export default function Rules() {
  return (
    <>
      <div className="hero">
        <div className="title bebas-neue-regular">
          <h2>Rules: learn to play</h2>
        </div>
        <div className="rules-text">
          <p>
            <ol>
              <li>The classic Sudoku game involves a 9x9 grid divided into nine 3x3 subgrids.</li>
              <li>The objective is to fill the grid with digits from 1 to 9, ensuring that each row, column, and 3x3 subgrid contains each digit exactly once.</li>
              <li>Some cells are pre-filled with numbers, providing clues to help solve the puzzle.</li>
              <li>Players must use logic and deduction to determine the correct placement of numbers in the empty cells.</li>
              <li>The game is won when the entire grid is correctly filled according to the rules.</li>
            </ol>
          </p>
        </div>
      </div>
    </>
  );
}
