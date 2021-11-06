/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import './board.scss';

const width = 8;
const candyColors = ['blue', 'green', 'orange', 'purple', 'red', 'yellow'];

const Board = () => {
  const [currentColorArray, setCurrentColorArray] = useState([]);

  /* ****** CHECK FOR COINCIDENCES IN COLUMNS AND ROWS ****** */

  const checkColumnOfFour = () => {
    // 39 is the index number of the position we want to loop to stop
    for (let i = 0; i < 39; i++) {
      const columnOfFour = [i, i + width, i + width * 2, i + width * 3];
      const currentColor = currentColorArray[i];

      if (columnOfFour.every((square) => currentColorArray[square] === currentColor)) {
        columnOfFour.forEach((square) => (currentColorArray[square] = ''));
      }
    }
  };

  const checkRowOfFour = () => {
    for (let i = 0; i < 64; i++) {
      const rowOfFour = [i, i + 1, i + 2, i + 4];
      const currentColor = currentColorArray[i];

      // Stop checking in not suitable squares
      const notValidSquares = [
        5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53, 54, 55, 62, 63, 64,
      ];

      if (notValidSquares.includes(i)) continue;

      if (rowOfFour.every((square) => currentColorArray[square] === currentColor)) {
        // Check if every square has the same color
        rowOfFour.forEach((square) => (currentColorArray[square] = ''));
      }
    }
  };

  const checkColumnOfThree = () => {
    // 47 is the index number of the position we want to loop to stop
    for (let i = 0; i < 47; i++) {
      const columnOfThree = [i, i + width, i + width * 2];
      const currentColor = currentColorArray[i];

      // Check if every square has the same color
      if (columnOfThree.every((square) => currentColorArray[square] === currentColor)) {
        columnOfThree.forEach((square) => (currentColorArray[square] = ''));
      }
    }
  };

  const checkRowOfThree = () => {
    for (let i = 0; i < 64; i++) {
      const rowOfThree = [i, i + 1, i + 2];
      const currentColor = currentColorArray[i];

      // Stop checking in not suitable squares
      const notValidSquares = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64];

      if (notValidSquares.includes(i)) continue;

      if (rowOfThree.every((square) => currentColorArray[square] === currentColor)) {
        // Check if every square has the same color
        rowOfThree.forEach((square) => (currentColorArray[square] = ''));
      }
    }
  };

  /* ****** MOVE SQUARES ONCE CHECKED ****** */

  const moveIntoSquareBelow = () => {
    for (let i = 0; i < width * width - width; i++) {
      const firstRow = [0, 1, 2, 3, 4, 5, 6, 7];
      const isFirstRow = firstRow.includes(i);

      if (isFirstRow && currentColorArray[i] === '') {
        let randomIndex = Math.floor(Math.random() * candyColors.length);
        currentColorArray[i] = candyColors[randomIndex];
      }

      if (currentColorArray[i + width] === '') {
        currentColorArray[i + width] = currentColorArray[i];
        currentColorArray[i] = '';
      }
    }
  };

  const createBoard = () => {
    const randomColorArray = [];

    for (let i = 0; i < width * width; i++) {
      // Get a random color
      const randomColor = candyColors[Math.floor(Math.random() * candyColors.length)];

      // Add each color to the empty array
      randomColorArray.push(randomColor);
    }

    setCurrentColorArray(randomColorArray);
  };

  // To prevent this function to re-render indefinitely, a useEffect is needed so it only runs once
  useEffect(() => {
    createBoard();
  }, []);

  useEffect(() => {
    // Set when the game is going to check if there are any coincidences
    const timer = setInterval(() => {
      // Check columns of 4 before columns of 3
      checkColumnOfFour();
      checkRowOfFour();
      checkColumnOfThree();
      checkRowOfThree();
      moveIntoSquareBelow();
      setCurrentColorArray([...currentColorArray]);
    }, 100);

    return () => clearInterval(timer);
  }, [checkColumnOfFour, checkRowOfFour, checkColumnOfThree, checkRowOfThree, moveIntoSquareBelow, currentColorArray]);

  return (
    <div className='board'>
      <div className='game'>
        {currentColorArray.map((candyColor, i) => (
          <img key={i} style={{ backgroundColor: candyColor }} alt={candyColor} data-id={i} />
        ))}
      </div>
    </div>
  );
};

export default Board;
