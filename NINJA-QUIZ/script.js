const correctAnswers = ["A", "A", "A", "A", "A"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
//const span = document.querySelector("span");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let score = 0;
    const userAnswers = [
        form.q1.value,
        form.q2.value,
        form.q3.value,
        form.q4.value,
        form.q5.value,
    ];
    //console.log(userAnswers);
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 20;
        }
    });

    scrollTo(0, 0);
    result.querySelector("span").textContent = `${score}%`;
    result.classList.remove("d-none");

    let output = 0;
    let timer = setInterval(() => {
        result.querySelector("span").textContent = `${output}%`;
        if (output === score) {
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10);
});

// $(document).ready(function () {
//     const correctAnswers = ["A", "A", "A", "A", "A"];
//     $(".quiz-form").on("submit", function (e) {
//         e.preventDefault();
//         var q1 = $("input[name='q1']", this).val();
//         console.log(q1);
//     });
// });