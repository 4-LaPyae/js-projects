const button = document.querySelectorAll(".btnmain");
const reset = document.querySelector(".reset");
const message = document.querySelector(".message");
const name = document.querySelector(".name");
const image0 = document.querySelector(".image0");
const image1 = document.querySelector(".image1");
const image2 = document.querySelector(".image2");
const player = document.querySelector(".player");
const computer = document.querySelector(".computer");
const totalmessage = document.querySelector(".totalmessage");
const computerwin = document.querySelector(".computerwin");
const playerwin = document.querySelector(".playerwin");
let array = ["Rose", "Girl"];
let scores = [0, 0];
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", start);
}

function start(e) {
    const targetValue = e.target.innerText;
    console.log(targetValue);
    const random = Math.floor(Math.random() * array.length);
    let arrayResult = array[random];

    if (targetValue == arrayResult) {
        name.innerText = "Player win";
        scores[0]++;
        player.innerText = scores[0];
    } else {
        name.innerText = "Computer win";
        scores[1]++;
        computer.innerText = scores[1];
    }
    totalmessage.innerText = result();
    if (arrayResult == "Rose") {
        image0.style.display = "none";
        image1.classList.add("rose");
        image2.classList.remove("girl");
        return;
    }
    if (arrayResult == "Girl") {
        image0.style.display = "none";
        image1.classList.remove("rose");
        image2.classList.add("girl");
        return;
    }
}
function result() {
    if (scores[0] > scores[1]) {
        computerwin.classList.remove("green");
        playerwin.classList.add("green");
        return "Player Win!";
    } else if (scores[0] < scores[1]) {
        playerwin.classList.remove("green");
        computerwin.classList.add("green");
        return "Computer Win!";
    } else {
        computerwin.classList.remove("green");
        playerwin.classList.remove("green");
        return "Draw!";
    }
}
reset.addEventListener("click", () => {
    name.innerText = "Chose Rose or Girl";
    image0.style.display = "block";
    image2.classList.remove("girl");
    image1.classList.remove("rose");
    totalmessage.innerText = "Who will win";
    scores[0] = 0;
    scores[1] = 0;
    player.innerText = 0;
    computer.innerText = 0;
    computerwin.classList.remove("green");
    playerwin.classList.remove("green");
});
