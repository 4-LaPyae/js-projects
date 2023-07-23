const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const btn1 = document.querySelector(".btn1");
const img = document.querySelector("img");
const username = document.querySelector(".name");
const job = document.querySelector(".job");
const about = document.querySelector(".about");
userArray = [
    {
        id: "1",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_46pCSd78TpCxJiOhil3SloxFWf6jkKtjtw&usqp=CAU",
        name: "Susan Smith 1",
        job: "Web Developer",
        about: "Im baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: "2",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9NOs-OKDIsEWC-taYUeOx5LfLv-shWGRO_w&usqp=CAU",
        name: "Anna Johnson 2",
        job: "WEB DESIGNER",
        about: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: "3",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvk5wwbn0KMX2dgvlOsiHJ6koEE17fQhJoIQ&usqp=CAU",
        name: "Peter Jones 3",
        job: "INTERN",
        about: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.        ",
    },
    {
        id: "4",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF37ZjbA1ff9oa2swF1bBjnrK8FWAmPqw_CQ&usqp=CAU",
        name: "Poe Ma Mhe Thar 4",
        job: "Actress",
        about: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.        ",
    },
];

let currentItem = 0;
window.addEventListener("DOMContentLoaded", () => {
    showItems();
});

//btn-right
btnRight.addEventListener("click", () => {
    currentItem++;
    if (currentItem > userArray.length - 1) {
        currentItem = 0;
    }
    showItems();
});

//left button
btnLeft.addEventListener("click", () => {
    currentItem--;
    if (currentItem < 0) {
        currentItem = userArray.length - 1;
    }
    showItems();
});
//random btn
btn1.addEventListener("click", () => {
    currentItem = Math.floor(Math.random() * userArray.length);
    showItems();
});

//show items
function showItems() {
    let item = userArray[currentItem];
    img.src = item.img;
    username.innerText = item.name;
    job.innerText = item.job;
    about.innerText = item.about;
}