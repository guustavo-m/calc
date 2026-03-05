const display = document.querySelector("#display");
const botoes = document.querySelectorAll(".btn");
const operadores = ["+", "-", "*", "/"];

// CLIQUE NOS BOTÕES
botoes.forEach(btn => {
    btn.addEventListener("click", function () {

        if (btn.classList.contains("clear")) {
            display.value = "";

        } else if (btn.classList.contains("equals")) {
            display.value = eval(display.value);

        } else {
            const valor = btn.dataset.value;
            const ultimo = display.value.slice(-1);

            if (operadores.includes(ultimo) && operadores.includes(valor)) {
                return;
            }

            display.value += valor;
        }

    });
});


// TECLADO
window.addEventListener("keydown", function (event) {

    const tecla = event.key;
    const ultimo = display.value.slice(-1);

    // números
    if (!isNaN(tecla)) {
        display.value += tecla;
        return;
    }

    // operadores
    if (operadores.includes(tecla)) {

        if (operadores.includes(ultimo)) {
            return;
        }

        display.value += tecla;
        return;
    }

    // calcular
    if (tecla === "Enter") {
        event.preventDefault();
        display.value = eval(display.value);
        return;
    }

    // apagar último
    if (tecla === "Backspace") {
        display.value = display.value.slice(0, -1);
        return;
    }

    // limpar
    if (tecla === "Escape") {
        display.value = "";
        return;
    }

});
