$(document).ready(function () {
    $(".menu-icon").on("click", function () {
        $(".menu-link").slideToggle();
    });
    function scrollFunction() {
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-50px";
        }
    }
    window.onscroll = function () {
        scrollFunction();
    };

    const url = "https://fakestoreapi.com/products";
    async function getData() {
        try {
            let response = await fetch(url);
            let data = await response.json();
            !data && $("#output-control").prepend("<div class='loader'></div>");
            showCard(data);
            showFilter(data);
        } catch (error) {
            console.log(error);
        }
    }
    getData();
    function showFilter(datas) {
        $(".filter-btn").each(function (index, element) {
            $(element).on("click", function () {
                var value = $(this).text().toLowerCase();
                filterOutput(value, datas);
                value == "all" && showCard(datas);
            });
        });
        $(".input-search").on("input", function () {
            var searchValue = $(this).val().toLowerCase();
            var search = $.grep(datas, function (element, index) {
                return element.title.toLowerCase().includes(searchValue);
            });
            $(".output").text("").css({ padding: "0" });
            search.length === 0 &&
                $(".output")
                    .text("products not found!")
                    .css({ padding: "200px" });

            showCard(search);
        });
        $("select").on("change", function () {
            var selectValue = $(this).val().toLowerCase();
            filterOutput(selectValue, datas);
        });
    }

    function filterOutput(value, datas) {
        let filterArray = datas.filter((data) => {
            return data.category == value;
        });
        $(".output").text("");
        showCard(filterArray);
    }
    function showCard(data) {
        $.each(data, function (index, element) {
            let result = `<div class="card">
            <div>
                <img
                    src="${element.image}"
                    height="250px"
                    width="250px"
                />
            </div>
            <div><h2 class= "stitle">${element.title}</h2></div>
            <div class="amount"><p>$ ${element.price}</p></div>
            <div class="btn-control">
               <a href="../product-info/productinfo.html?productId=${element.id}"> <button class="btn3">view</button></a>
                <button class="btn3" id="add-cart">add cart</button>
            </div>
        </div>`;
            $(".output").append(result);
            //$(".output").hide().slideDown(1000);
        });
    }
});
// jQuery(function () {
//     $(".menu-icon").on("click", function () {
//         $(".menu-link").slideToggle();
//     });
//     window.onscroll = function () {
//         scrollFunction();
//     };

//     function scrollFunction() {
//         if (
//             document.body.scrollTop > 20 ||
//             document.documentElement.scrollTop > 20
//         ) {
//             document.getElementById("navbar").style.top = "0";
//         } else {
//             document.getElementById("navbar").style.top = "-50px";
//         }
//     }
//     const url = "https://fakestoreapi.com/products";
//     async function getData() {
//         try {
//             let response = await fetch(url);
//             let data = await response.json();
//             !data && $("#output-control").prepend("<div class='loader'></div>");
//             showCard(data);
//             showFilter(data);
//         } catch (error) {
//             console.log(error);
//         }
//     }
//     getData();
//     function showFilter(datas) {
//         $(".filter-btn").each(function (index, element) {
//             $(element).on("click", function () {
//                 var value = $(this).text().toLowerCase();
//                 filterOutput(value, datas);
//                 value == "all" && showCard(datas);
//             });
//         });
//         $(".input-search").on("input", function () {
//             var searchValue = $(this).val().toLowerCase();
//             var search = $.grep(datas, function (element, index) {
//                 return element.title.toLowerCase().includes(searchValue);
//             });
//             $(".output").text("").css({ padding: "0" });
//             search.length === 0 &&
//                 $(".output")
//                     .text("products not found!")
//                     .css({ padding: "200px" });

//             showCard(search);
//         });
//         $("select").on("change", function () {
//             var selectValue = $(this).val().toLowerCase();
//             filterOutput(selectValue, datas);
//         });
//     }

//     function filterOutput(value, datas) {
//         let filterArray = datas.filter((data) => {
//             return data.category == value;
//         });
//         $(".output").text("");
//         showCard(filterArray);
//     }
//     function showCard(data) {
//         $.each(data, function (index, element) {
//             let result = `<div class="card">
//             <div>
//                 <img
//                     src="${element.image}"
//                     height="250px"
//                     width="250px"
//                 />
//             </div>
//             <div><h2 class= "stitle">${element.title}</h2></div>
//             <div class="amount"><p>$ ${element.price}</p></div>
//             <div class="btn-control">
//                <a href="../product info/productinfo.html?productId=${element.id}"> <button class="btn3">view</button></a>
//                 <button class="btn3" id="add-cart">add cart</button>
//             </div>
//         </div>`;
//             $(".output").append(result);
//             //$(".output").hide().slideDown(1000);
//         });
//     }
// });