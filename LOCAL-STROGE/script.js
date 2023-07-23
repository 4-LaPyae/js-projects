// const button = document.querySelector("button");
// let player = {
//     speed: 100,
//     x: 100,
//     y: 100,
// };
// button.addEventListener("click", start);

// function start() {
//     player.x = 100;
//     player.y = 100;
//     const newDiv = document.createElement("div");
//     newDiv.style.width = player.x + "px";
//     newDiv.style.height = player.y + "px";
//     newDiv.style.backgroundColor = "red";
//     newDiv.style.position = "absolute";
//     newDiv.style.top = player.y + "px";
//     newDiv.style.left = player.x + "px";

//     document.body.appendChild(newDiv);

//     document.addEventListener("keydown", (e) => {
//         let key = e.keyCode;
//         if (key === 37) {
//             player.x -= player.speed;
//         }
//         if (key === 38) {
//             player.y -= player.speed;
//         }
//         if (key === 39) {
//             player.x += player.speed;
//         }
//         if (key === 40) {
//             player.y += player.speed;
//         }
//         newDiv.style.top = player.y + "px";
//         newDiv.style.left = player.x + "px";

//         console.log(key);
//     });
// }
const form = document.querySelector("form");
const button = document.querySelector("button");

let setLocalUser = (userobj) => {
    //let data = JSON.stringify(obj);
    //sessionStorage.setItem("localdb", data);
    let usersArray = getLocalUser();
    if (usersArray == null) {
        let usersArray = [];
        usersArray.push(userobj);
        saveLocalDb(usersArray);
    } else {
        usersArray.push(userobj);
        saveLocalDb(usersArray);
    }
    console.log(usersArray);
};
let saveLocalDb = (user) => {
    let saveData = JSON.stringify(user);
    sessionStorage.setItem("localdb", saveData);
};
let getLocalUser = () => {
    let str = sessionStorage.getItem("localdb");
    let obj = JSON.parse(str);
    return obj;
};
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = e.target.username.value;
    let age = e.target.number.value;
    let user = {
        name: name,
        age: age,
    };
    setLocalUser(user);
    //localStorage.setItem("comment1", JSON.stringify(user));
    //console.log(user);
});

button.addEventListener("click", () => {
    sessionStorage.removeItem("localdb");
});