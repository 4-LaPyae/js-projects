$(document).ready(function () {
    $(".bgcolor").on("input change", function () {
        $("body").css({ background: $(this).val() });
        if ($(this).val() <= "#242424") {
            $(".text").css({ color: "white" });
        } else {
            $(".text").css({ color: "black" });
        }
    });
});