$(document).ready(function () {
    let cur1 = 31;
    let cur2 = 31;
    let fadeId = false;
    let fadeId1 = true;
    $(".box1").css({ background: "red" });
    $(".box2").css({ background: "green" });
    $(".box12").css({ background: "black" });
    $(".box13").css({ background: "black" });
    $(".box22").css({ background: "black" });
    $(".box23").css({ background: "black" });
    function boxFun2() {
        if (cur2 < 6 && !fadeId) {
            $(".box2").css({ background: "black" });
            $(".swarng").css({ background: "yellow" });
            $(".box22").css({ background: "yellow" });
        }
        if (cur2 === 0 && !fadeId) {
            $(".box2").css({ background: "black" });
            $(".box22").css({ background: "black" });
            $(".box23").css({ background: "red" });
            $(".swarng").css({ background: "red" });

            cur2 = 31;
            fadeId = true;
        }
        if (cur2 < 1 && fadeId) {
            cur2 = 31;
            $(".box23").css({ background: "black" });
            $(".box2").css({ background: "green" });
            $(".swarng").css({ background: "green" });

            fadeId = false;
        }
    }
    function boxFun1() {
        if (cur1 < 6 && !fadeId1) {
            $(".box1").css({ background: "black" });
            $(".box13").css({ background: "black" });
            $(".box12").css({ background: "yellow" });
            $(".sactive").css({ background: "yellow" });
        }
        if (cur1 === 0 && fadeId1) {
            $(".box1").css({ background: "black" });
            $(".box12").css({ background: "black" });
            $(".box13").css({ background: "green" });
            $(".sactive").css({ background: "green" });

            cur1 = 31;
            fadeId1 = false;
        }
        if (cur1 < 1 && !fadeId1) {
            cur1 = 31;
            $(".box1").css({ background: "red" });
            $(".box12").css({ background: "black" });
            $(".box13").css({ background: "black" });
            $(".sactive").css({ background: "red" });
            fadeId1 = true;
        }
    }
    function start() {
        cur1--;
        cur2--;
        $(".box1").text(cur1);
        $(".box13").text(cur1);
        $(".box2").text(cur2);
        $(".box23").text(cur2);
        boxFun1();
        boxFun2();
    }
    setInterval(() => {
        start();
    }, 1000);
});
