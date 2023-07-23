const button = document.querySelector("button");
const message = document.querySelector(".message");
const gamearea = document.querySelector(".gamearea");

button.addEventListener("click", () => {
    button.style.display = "none";
    gamearea.style.border = "10px dotted red";
    gamearea.style.left = "50px";
    gamearea.style.top = "50px";
    messages("Click the circle quickly as you see them");
    showBox();
});
const messages = (mess) => {
    message.innerHTML = mess;
};

messages("Hey we go");

const showBox = () => {
    setTimeout(() => {
        boxModel();
    }, 2000);
};
const rand = (n) => {
    const result = Math.floor(Math.random() * n);
    return result;
};
//console.log(rand(1000));
const getColor = () => {
    function color() {
        let chcolor = rand(250).toString(16);
        console.log(chcolor);
        //console.log(("0" + String(chcolor)).substr(-2));
        return String(chcolor).substr(-2);
    }
    //console.log(color());

    return "#" + color() + color() + color();
};
//console.log(getColor());

const boxModel = () => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("newdiv");
    newDiv.style.backgroundColor = getColor();
    newDiv.style.width = rand(30) + 70 + "px";
    newDiv.style.height = rand(30) + 70 + "px";
    newDiv.style.borderRadius = rand(50) + "%";
    newDiv.style.top = rand(500) + 100 + "px";
    newDiv.style.left = rand(1000) + 100 + "px";
    newDiv.style.position = "relative";
    gamearea.appendChild(newDiv);
    newDiv.addEventListener("click", clickBox);
};
const clickBox = (e) => {
    e.target.style.display = "none";
    showBox();
};