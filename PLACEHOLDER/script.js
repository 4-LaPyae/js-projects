const select = document.querySelector("select");
const allInput = document.querySelectorAll("input");
const div = document.querySelector(".container");
const sartar = document.querySelector("p");
const width = document.querySelector(".w");
const height = document.querySelector(".h");
const bc = document.querySelector(".bc");
const tc = document.querySelector(".tc");
const sar = document.querySelector(".sar");
let arrys = [
    { w: "350px", h: "150px", name: "Small" },
    { w: "650px", h: "350px", name: "Medium" },
    { w: "950px", h: "550px", name: "Large" },
];
allInput.forEach((item) => {
    item.addEventListener("change", build);
});
select.addEventListener("change", (e) => {
    let filAns = e.target.value;
    let newarry = arrys.filter((arry) => {
        return filAns == arry.name;
    });
    div.style.width = newarry[0].w;
    div.style.height = newarry[0].h;
    width.innerText = newarry[0].w;
    height.innerText = newarry[0].h;
    build();
});
function build() {
    let obj = {};
    obj.text = allInput[0].value;
    obj.bgClr = allInput[1].value;
    obj.txtClr = allInput[2].value;
    div.style.background = obj.bgClr;
    div.style.color = obj.txtClr;
    sartar.innerText = obj.text;
    sar.innerText = obj.text;
    bc.innerText = obj.bgClr;
    bc.style.color = obj.bgClr;
    tc.innerText = obj.txtClr;
    tc.style.color = obj.txtClr;
}