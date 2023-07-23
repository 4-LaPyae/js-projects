const form = document.querySelector(".input-group");
const inputValue = document.querySelector("#input-value");
const ul = document.querySelector(".list-group");
const button = document.querySelector("#button");
const alert = document.querySelector(".showalert");
const btnsubmit = document.querySelector("#btnsubmit");
const newsearch = document.querySelector(".search");
const noitem = document.querySelector(".noitem");
newsearch.addEventListener("keyup", () => {
    const term = newsearch.search.value.trim();
    filterItems(term);
});

let itemsArray = [];
let saved = localStorage.getItem("items");
if (saved) {
    taskList = JSON.parse(localStorage.getItem("mylist"));
}
//search items
function filterItems(term) {
    let li = document.querySelectorAll("li");
    Array.from(li)
        .filter((f) => {
            let value = f.firstChild.innerHTML.toLowerCase();
            if (!value.includes(term)) {
                noitem.innerHTML = "Items not found!";
                button.innerHTML = "";
            }
            return !value.includes(term);
        })
        .map((i) => i.classList.add("filtered"));
    Array.from(li)
        .filter((f) => {
            let value = f.firstChild.innerHTML.toLowerCase();
            if (value.includes(term)) {
                noitem.innerHTML = "";
                button.innerHTML = "Clear Items";
            }
            return value.includes(term);
        })
        .map((i) => i.classList.remove("filtered"));
}

let editElement;
let editFlag = false;
form.addEventListener("submit", addItem);

//clear items
button.addEventListener("click", clearItems);

//additems
function addItem(e) {
    e.preventDefault();
    const inputResult = inputValue.value;
    if (inputResult && !editFlag) {
        button.innerText = "Clear Items";
        const element = document.createElement("li");
        element.innerHTML = `<p>${inputResult}</p>
        <div>
            <button class="edit-btn">
                <i class="bi bi-pencil-square text-success"></i>
            </button>
            <button class="delete-btn"><i class="bi bi-trash text-danger"></i></button>
        </div>`;

        itemsArray.push(inputResult);
        localStorage.setItem("items", JSON.stringify(itemsArray));
        ul.prepend(element);
        displayAlert(`add ${inputResult} items`, "success");

        //edit btn
        const editBtn = document.querySelectorAll(".edit-btn");
        editBtn.forEach((ed) => {
            ed.addEventListener("click", editItem);
        });

        //delete btn
        const deleteBtn = document.querySelectorAll(".delete-btn");
        deleteBtn.forEach((d) => {
            d.addEventListener("click", deleteItem);
        });
        backDefault();
    } else if (inputResult && editFlag) {
        editElement.innerText = inputResult;
        displayAlert("value changed", "success");
        backDefault();
    } else {
        displayAlert("Empty value!", "danger");
    }
}

//display alert
function displayAlert(text, color) {
    alert.textContent = text;
    alert.classList.add(color);
    setTimeout(() => {
        alert.textContent = "";
        alert.classList.remove(color);
    }, 1000);
}

//back to Default
function backDefault() {
    inputValue.value = "";
    editFlag = false;
    btnsubmit.value = "Submit";
}

//edit items
function editItem(e) {
    editElement = e.currentTarget.parentElement.previousElementSibling;
    inputValue.value = editElement.innerHTML;
    editFlag = true;
    btnsubmit.value = "Edit";
}

//delete items
function deleteItem(e) {
    let deleteli = e.currentTarget.parentElement.parentElement;
    deleteli.remove();
    if (ul.children.length === 0) {
        button.innerText = "";
    }
    displayAlert("Removed Items", "danger");
    backDefault();
}

//clear button
function clearItems() {
    const li = document.querySelectorAll("li");
    if (li.length > 0) {
        li.forEach((i) => {
            i.remove();
        });
    }
    displayAlert("empty lists", "danger");
    button.innerText = "";
    backDefault();
}