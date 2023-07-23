const button = document.querySelector("button");
const span = document.querySelector("span");
const bcBody = document.querySelector(".center_control");

// button.addEventListener("click", () => {
//     let newcolor = "#" + color() + color() + color();
//     console.log(newcolor);
//     bcBody.style.background = newcolor;
//     span.textContent = newcolor;
// });

// function random(num) {
//     return Math.floor(Math.random() * num);
// }
// function color() {
//     let result = random(256).toString(16);
//     return String(result).substring(-2);
// }
const colorArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
button.addEventListener("click", () => {
    let color = "#";
    //console.log(color);
    for (let i = 0; i < 6; i++) {
        color += colorArray[random()];
    }
    console.log(color);
    bcBody.style.background = color;
    span.textContent = color;
});
function random() {
    return Math.floor(Math.random() * colorArray.length);
}