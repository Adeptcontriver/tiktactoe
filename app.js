let game = document.querySelector("game");
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetbtn");
let newGameBtn = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let congImage = document.querySelector(".cong-img");

let playerTurn = true; // Player(1)  Player(2)

let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    playerTurn = "true";
    enableBoxes();
    msgContainer.classList.add("hide");
    congImage.style.display = "none";
};
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("button was clicked");
        if (playerTurn) {
            box.innerText = "O";
            playerTurn = false;
        } else {
            box.innerText = "X";
            playerTurn = true;
        }
        box.disabled = true;

        checkWinner();
    });
});
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        resetBtn.style.display = "block";
        congImage.style.display = "none";
    }
};
const showWinner = (winner) => {
    msg.innerText = `Congratulation You Win The Game`;
    msgContainer.classList.remove("hide");
    resetBtn.style.display = "none";
    congImage.style.display = "block";

    disableBoxes();
};
const checkWinner = () => {
    for (let patterns of winPatterns) {
        let pos1Val = boxes[patterns[0]].innerText;
        let pos2Val = boxes[patterns[1]].innerText;
        let pos3Val = boxes[patterns[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner", pos1Val);
                showWinner(pos1Val);
                congImage.classList.remove("hide");
                game.style.display = "none";
            }
        }
    }
};
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
