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
  const winner = checkWinner(currentClass);
  if (winner) endGame(currentClass);

};
const checkWinner = (currentClass) =>
  winnerPosibility.some(posibility =>
    posibility.every(elIndex =>
      cellEl[elIndex].classList.contains(currentClass)
    )
  );

const bestAttack = () => {
    const posibility = winnerPosibility.map(pos => {
        return pos.map(p => cellEl[p].classList.contains(O_CLASS) ? O_CLASS: cellEl[p].classList.contains(X_CLASS) ? X_CLASS : p)
    })
}

const AIPlay = (cellClicked) => {
    const oCell = []
    cellEl.forEach((cell, index) => {
        cell.classList.contains(O_CLASS) && oCell.push(index)
    });

    const posibility = winnerPosibility.filter(pos => pos.includes(cellClicked))
    let deng = -1;

    posibility.forEach((pos) => {
        pos.forEach((p) =>{
                 if(p !== cellClicked && oCell.includes(p)) {
                    deng = pos.find(dengrous => dengrous !== p && dengrous !== cellClicked)
                }
        })
    })
    deng > -1 ? stwichBoard(cellEl[deng], X_CLASS) : bestAttack();

}

const handleClick = (e) => {
  const cell = e.target;
    stwichBoard(cell, O_CLASS)
  const cellClicked = [].indexOf.call(cellEl, cell);
    AIPlay(cellClicked);
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
