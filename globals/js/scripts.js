function checkAnswer(e) {
    const parent = e.parentElement;
    const userAnswer = parent.querySelector("input").value.toLowerCase();
    const correctAnswer = parent.querySelector(".solution").textContent.toLowerCase();
    // If the answer is correct, toggle correc
    if (userAnswer === correctAnswer) {
        parent.classList.add("correct");
        parent.classList.remove("wrong");
    } else {
        parent.classList.add("wrong");
        parent.classList.remove("correct");
    }
}

