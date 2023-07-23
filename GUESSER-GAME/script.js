$(document).ready(function () {
    let gameplay = false;
    const game = document.querySelector(".game");
    $("button[type=button]").on("click", function () {
        if (!gameplay) {
            $(this).text("Check Combo");
            game.innerHTML = "";
            maker();
            gameplay = true;
        } else {
            const inputs = document.querySelectorAll(".numb");
            let winCondition = 0;
            for (let i = 0; i < inputs.length; i++) {
                if (inputs[i].value == inputs[i].correct) {
                    inputs[i].style.background = "green";
                    inputs[i].style.color = "white";
                    winCondition++;
                    //console.log(winCondition);
                } else {
                    let bcolor = inputs[i].value > inputs[i].correct ? "red" : "blue";
                    inputs[i].style.background = bcolor;
                    inputs[i].style.color = "white";
                }
                //console.log(inputs.length); 
            }
            if (winCondition === inputs.length) {
                //console.log(winCondition, inputs.length);
                console.log("victory");
                reset();
            }
        }
        function reset() {
            console.log("reset");
            $("button").text("Reset");
            gameplay = false;
        }
    });

    function maker() {
        for (let i = 0; i < 4; i++) {
            const input = document.createElement("input");
            input.setAttribute("type", "number");
            input.min = 0;
            input.max = 9;
            input.size = 1;
            input.order = i;
            input.style.width = "50px";
            input.correct = Math.floor(Math.random() * 10);
            input.value = input.correct;
            input.classList.add("numb");
            game.appendChild(input);
        }
    }
});