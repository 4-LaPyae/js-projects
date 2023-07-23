let menus = [
    {
        id: 1,
        title: "Buttermilk Pancakes",
        price: 15.99,
        category: "Breakfast",
        img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-1.jpeg",
        desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    },
    {
        id: 2,
        title: "Diner Double",
        price: 13.99,
        category: "Lunch",
        img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-2.jpeg",
        desc: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing.",
    },
    {
        id: 3,
        title: "Godzilla Milkshake",
        price: 6.99,
        category: "Shakes",
        img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-3.jpeg",
        desc: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
    },
    {
        id: 4,
        title: "Country Delight",
        price: 20.99,
        category: "Breakfast",
        img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-4.jpeg",
        desc: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut",
    },
    {
        id: 5,
        title: " Egg Attack",
        price: 22.99,
        category: "Lunch",
        img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-5.jpeg",
        desc: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
    },
    {
        id: 6,
        title: " Oreo Dream",
        price: 18.99,
        category: "Shakes",
        img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-6.jpeg",
        desc: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
    },
    {
        id: 7,
        title: "Bacon Overflow",
        price: 8.99,
        category: "Breakfast",
        img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-7.jpeg",
        desc: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
    },
    {
        id: 8,
        title: "American Classic",
        price: 12.99,
        category: "Lunch",
        img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-8.jpeg",
        desc: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
    },
    {
        id: 9,
        title: "Quarantine Buddy",
        price: 16.99,
        category: "Shakes",
        img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-9.jpeg",
        desc: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
    },
    {
        id: 10,
        title: "Steak Dinner",
        price: 39.99,
        category: "Dinner",
        img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-10.jpeg",
        desc: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
    },
];

let result;
const section = document.querySelector(".section-center");
const buttons = document.querySelectorAll("button");
const select = document.querySelector(".option_control");
const form = document.querySelector("form");
const category = document.querySelector(".category");

//form select option
category.addEventListener("change", (e) => {
    
    result = e.target.value;
    console.log(result);
});

//submit event
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let sname = e.target.name.value;
    let sprice = e.target.price.value;
    let simage = e.target.image.value;
    let sdesc = e.target.desc.value;
    let scategory = result;
    if (scategory == "All") {
        return;
    }
    let users = {
        id: Date.now(),
        title: sname,
        price: sprice,
        img: simage,
        desc: sdesc,
        category: scategory,
    };
    //menus = getAddData();
    menus.push(users);
    setAddData(menus);
    form.reset();
});

//set localstorage
function setAddData(menusArray) {
    let data = JSON.stringify(menusArray);
    localStorage.setItem("additem", data);
}

//get localstorage
function getAddData() {
    let str = localStorage.getItem("additem");
    let menuobj = JSON.parse(str);
    return menuobj;
}

//menu select option
select.addEventListener("change", (e) => {
    let changevalue = e.target.value;
    menus = getAddData();
    let filtermenu = menus.filter((menu) => {
        return menu.category == changevalue;
    });
    if (changevalue == "All") {
        showMenu(menus);
    } else {
        showMenu(filtermenu);
    }
});

//window event
window.addEventListener("DOMContentLoaded", () => {
    let newmenus = getAddData();
    if (newmenus == null) {
        showMenu(menus);
        return;
    }
    showMenu(newmenus);
});

//button event
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        let targetValue = e.target.innerHTML;
        menus = getAddData();

        let filtermenu = menus.filter((menu) => {
            return menu.category == targetValue;
        });
        if (targetValue == "All") {
            showMenu(menus);
        } else {
            showMenu(filtermenu);
        }
    });
});

//amount input box
function myFun(e) {
    {
        e = e || window.event;
        var charCode = typeof e.which == "undefined" ? e.keyCode : e.which;
        var charStr = String.fromCharCode(charCode);

        if (!charStr.match(/^[0-9]*\.?[0-9]*$/)) e.preventDefault();
    }
}

//show menu
function showMenu(currentMenu) {
    let displayMenu = currentMenu.map((menu) => {
        return `<article class="col-md-6  col-sm-12 my-2"">
    <div class="card" ">
        <div class="row g-0">
            <div class="col-md-4">
                <img
                    src="${menu.img}"
                    class="img-fluid rounded-start"
                    alt="welcome"
                    style="height:200px;width:100%"
                    
                />
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <div class="d-flex justify-content-between">
                    <h5
                        class="title card-title fw-bold"
                        style="letter-spacing: 5px"
                    >${menu.title}</h5>
                    <p class="text-danger fs-5">
                        $<span class="price">${menu.price}</span>
                    </p>
                </div>
                <div class="line"></div>
                    <p
                        class="desc card-text py-4 text-muted"
                    >${menu.desc}</p>
                </div>
            </div>
        </div>
    </div>
</article>`;
    });
    displayMenu = displayMenu.join("");
    section.innerHTML = displayMenu;
}