//simple

// const deBtn = document.querySelector(".danger");
// const inBtn = document.querySelector(".success");
// const resetBtn = document.querySelector(".info");
// const value = document.querySelector(".value");
// let count = 0;
// //increase

// inBtn.addEventListener("click", () => {
//     count++;
//     value.innerText = count;
//     if (count > 0) {
//         value.style.color = "green";
//     }
// });

//decrease
// deBtn.addEventListener("click", () => {
//     count--;
//     value.innerText = count;
//     if (count < 0) {
//         value.style.color = "red";
//     }
// });

// //reset
// resetBtn.addEventListener("click", () => {
//     count = 0;
//     value.innerText = count;
//     if (count == 0) {
//         value.style.color = "black";
//     }
// });
const btns = document.querySelectorAll(".btn");
const value = document.querySelector(".value");
console.log(btns);
let count = 0;
btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let style = e.currentTarget.classList;
        console.log(style);
        if (style.contains("success")) {
            count++;
        } else if (style.contains("danger")) {
            count--;
        } else {
            count = 0;
        }
        if (count > 0) {
            value.style.color = "green";
        } else if (count < 0) {
            value.style.color = "red";
        } else {
            value.style.color = "black";
        }
        value.innerText = count;
    });
});
