const display = document.querySelector("#display");
const botoes = document.querySelectorAll(".btn");


botoes.forEach(btn => {
    btn.addEventListener("click", function () {
        if (btn.classList.contains("clear")) {
            display.value = ""
        } else if (btn.classList.contains("equals")) {
            display.value = eval(display.value)
        } else {
            display.value += btn.dataset.value;
        }
    });
});
