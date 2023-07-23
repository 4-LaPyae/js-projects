$(function () {
    var count = 0;
    $("button").on("click", function () {
        var arr = [
            "red",
            "blue",
            "yellow",
            "lightgrey",
            "darkorchid",
            "black",
            "orange",
            "deeppink",
            "green",
            "purple",
            "saddlebrown",
            "lightseagreen",
            "deepskyblue",
            "firebrick",
            "crimson",
        ];

        $("#container").append('<span class="ball-in"></span>');
        const colNum = Math.floor(Math.random() * arr.length + 0);
        const ballColor = arr[colNum];
        var spans = $("span");
        const sp = spans.eq(count);
        sp.css({
            "background-color": ballColor,
        });
        count = count + 1;
    });
});