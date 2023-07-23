const currentResult = document.querySelector(".current-result");
const previousResult = document.querySelector(".previous-result");
const AC = document.querySelector(".allDelete");
const delete1 = document.querySelector(".delete");
const numBtns = document.querySelectorAll(".nums");
const operators = document.querySelectorAll(".operators");

let curAns;
//button click event
numBtns.forEach((numBtn) => {
    numBtn.addEventListener("click", (e) => {
        let targetNum = parseInt(e.target.innerText);
        switch (targetNum) {
            case 1:
                currentResult.innerText += targetNum;
                break;
            case 2:
                currentResult.innerText += targetNum;
                break;
            case 3:
                currentResult.innerText += targetNum;
                break;
            case 4:
                currentResult.innerText += targetNum;
                break;
            case 5:
                currentResult.innerText += targetNum;
                break;
            case 6:
                currentResult.innerText += targetNum;
                break;
            case 7:
                currentResult.innerText += targetNum;
                break;
            case 8:
                currentResult.innerText += targetNum;
                break;
            case 9:
                currentResult.innerText += targetNum;
                break;
            case 0:
                currentResult.innerText += targetNum;
                break;
        }
    });
});

//operator click event
operators.forEach((operator) => {
    operator.addEventListener("click", (e) => {
        let targetOpe = e.target.innerText;
        switch (targetOpe) {
            case "+":
                currentResult.innerText += "+";
                break;
            case "-":
                currentResult.innerText += "-";
                break;
            case "*":
                currentResult.innerText += "*";
                break;
            case "%":
                currentResult.innerText += "%";
                break;
            case ".":
                currentResult.innerText += ".";
                break;
            case "(":
                currentResult.innerText += "(";
                break;
            case ")":
                currentResult.innerText += ")";
                break;
        }
        //equal
        if (targetOpe == "=") {
            if (currentResult.innerText == "") {
                return;
            }
            curAns = eval(currentResult.innerText);
            currentResult.innerText = curAns;
            previousResult.innerText = curAns;
        }
    });
});

//all delete
AC.addEventListener("click", clearNums);

//clear function
function clearNums() {
    currentResult.innerText = "";
    previousResult.innerText = "";
}

//delete button
delete1.addEventListener("click", () => {
    let arry = Array.from(currentResult.innerText);
    arry.pop();
    let str = arry.toString().replace(/,/g, "");
    currentResult.innerText = str;
});
Footer
