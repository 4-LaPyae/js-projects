const button = document.querySelector("button");
const span = document.querySelector("span");
const bcBody = document.querySelector(".center_control");
let colorArray = [
    "red",
    "green",
    "skyblue",
    "yellow",
    "rgb(22,54,194)",
    "#ff88ff",
    "orange",
];
//console.log(colorArray.length);
button.addEventListener("click", () => {
    let randomNumber = randon(colorArray.length);
    console.log(randomNumber);
    bcBody.style.background = colorArray[randomNumber];
    span.textContent = colorArray[randomNumber];
});
function randon(num) {
    return Math.floor(Math.random() * num);
}