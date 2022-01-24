const cellEl = document.querySelectorAll("[data-cell]");
const board = document.getElementById("board");
const modal = document.getElementById("modal");
const msg = document.querySelector("[data-msg]");
const restartBtn = document.getElementById("restartBtn");

const X_CLASS = "x";
const O_CLASS = "o";
let xTrun = false;
const winnerPosibility = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const startGame = () => {
  xTrun = false;
  xTrun ? board.classList.add(X_CLASS) : board.classList.add(O_CLASS);
  cellEl.forEach(cell => {
    cell.addEventListener("click", handleClick, { once: true });
  });
};

const endGame = (currentClass) => {
  modal.classList.add("show");
  msg.innerText = `The winner is : ${currentClass}`;
};
const stwichBoard = (cell, currentClass) => {
  cell.classList.add(currentClass);
  board.classList.remove(X_CLASS);
  board.classList.remove(O_CLASS);
  const boardClass = currentClass === X_CLASS ? O_CLASS : X_CLASS;
  const winner = checkWinner(currentClass);
  if (winner) endGame(currentClass);

  board.classList.add(boardClass);
};
const switchTurn = (cell) => {
  xTrun ? stwichBoard(cell, X_CLASS) : stwichBoard(cell, O_CLASS);
  xTrun = !xTrun;
};
const checkWinner = (currentClass) =>
  winnerPosibility.some(posibility =>
    posibility.every(elIndex =>
      cellEl[elIndex].classList.contains(currentClass)
    )
  );

const handleClick = (e) => {
  const cell = e.target;
  switchTurn(cell);
};

const resetGame = () => {
  modal.classList.remove("show");
  cellEl.forEach(cell => {
    cell.classList.remove(X_CLASS);
    cell.classList.remove(O_CLASS);
  });
  startGame();
};

restartBtn.addEventListener("click", resetGame);

startGame();
