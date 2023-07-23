const text = document.querySelector(".text");
const strText = text.innerHTML;
//to array
const splitText = strText.split("");
text.innerHTML = "";
for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}
let cur = 0;
const showText = () => {
    const spans = document.querySelectorAll("span")[cur];
    spans.classList.add("fade");
    cur++;
    if (cur == splitText.length) {
        clearInterval(timer);
    }
};
let timer = setInterval(showText, 50);
