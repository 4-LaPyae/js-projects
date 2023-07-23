jQuery(function () {
    $(".menu-icon").on("click", function () {
        $(".menu-link").slideToggle();
    });
    var params = new URLSearchParams(location.search);
    var getParams = params.get("productId");
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
    function showCard(datas) {
        let infoArray = datas.filter((data) => {
            return data.id == getParams;
        });
        $.each(infoArray, function (index, element) {
            let result = `
            <div>
            <img src="${element.image}" width="300px" height="300px"/>
            </div>
            <div class="info-left">
                    <h2>${element.title}</h2>
                    <p class="text-muted">${element.description}</p>
                    <p class="price">$ ${element.price}</p>
                    <button class="btn">Add Cart</button>
            </div>
            `;
            $(".output").append(result);
            $(".product-info-title").text(element.title);
            //$(".output").hide().slideDown(1000);
        });
    }
});