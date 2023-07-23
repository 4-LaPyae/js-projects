$(document).ready(function () {
    $(".menu-icon").on("click", function () {
        $(".menu-link").slideToggle();
    });
    const url = "https://fakestoreapi.com/products";
    async function getData() {
        try {
            let response = await fetch(url);
            let data = await response.json();
            showCard(data);
        } catch (error) {
            console.log(error);
        }
    }
    getData();
    function showCard(data) {
        for (let i = 0; i < 3; i++) {
            let result = `<div class="card">
            <div>
                <img
                   src="${data[i].image}"
                    width="300px"
                    height="300px"
                />
            </div>
            <div><h2>${data[i].title}</h2></div>
            <div class="amount"><p>$${data[i].price}</p></div>
            <div class="btn-control">
             <a href="../product-info/productinfo.html?productId=${data[i].id}">   <button class="btn3">view</button></a>
                <button class="btn3">add cart</button>
            </div>
        </div>`;
            $(".output").append(result);
        }
    }
  });
// jQuery(function () {
//     $(".menu-icon").on("click", function () {
//         $(".menu-link").slideToggle();
//     });
//     const url = "https://fakestoreapi.com/products";
//     async function getData() {
//         try {
//             let response = await fetch(url);
//             let data = await response.json();
//             showCard(data);
//         } catch (error) {
//             console.log(error);
//         }
//     }
//     getData();
//     function showCard(data) {
//         for (let i = 0; i < 3; i++) {
//             let result = `<div class="card">
//             <div>
//                 <img
//                    src="${data[i].image}"
//                     width="300px"
//                     height="300px"
//                 />
//             </div>
//             <div><h2>${data[i].title}</h2></div>
//             <div class="amount"><p>$${data[i].price}</p></div>
//             <div class="btn-control">
//              <a href="../product info/productinfo.html?productId=${data[i].id}">   <button class="btn3">view</button></a>
//                 <button class="btn3">add cart</button>
//             </div>
//         </div>`;
//             $(".output").append(result);
//         }
//     }
// });