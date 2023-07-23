$(document).ready(function () {
    $(".menuicon").on("click", function () {
        $(".link-container").slideToggle("slow");
    });
    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (
            document.body.scrollTop > 60 ||
            document.documentElement.scrollTop > 60
        ) {
            $(".btn").fadeIn(1000);
        } else {
            $(".btn").fadeOut();
        }
    }
    $(".btn").on("click", function () {
        window.scrollTo(0, 0);
    });
});