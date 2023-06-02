/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */

//создаём двумерный массив

let peremennaya = `1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--`;

function matrix(str) {
  let newArr = str.split("");
  let arr = [];
  for (let i = 0; i < newArr.length; i += 9) {
    const r = newArr.slice(i, i + 9);
    arr.push(r);
  }
  console.log(arr);
}
matrix(peremennaya);

// возвращает массив возможных значений
function getPossibleValues(coordinates, board) {
    let [r, c] = coordinates;
  
    let digits = {
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
    };
}

function solve(boardString) {
  
  

  


  // создаём рекурсивную функцию
  const solve = () => {
    const currPos = findEmpty(boardString)  
  }
  solve();
  return board;
}


/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {
  if (board.flat().includes(0)) {
    return false;
  }
  for (let i = 0; i < 9; i++) {
    if (
      new Set(board[i]).size !== 9 ||
      new Set(board.map((row) => row[i])).size !== 9
    ) {
      return false;
    }
  }
  // Проверка уникальности цифр в квадратах 3x3
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      let square = [];
      for (let k = i; k < i + 3; k++) {
        for (let l = j; l < j + 3; l++) {
          square.push(board[k][l]);
        }
      }
      if (new Set(square).size !== 9) {
        return false;
      }
    }
  }
  return true;
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
