document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('form-sorteador').addEventListener('submit', function (evento) {
        evento.preventDefault();
        let numeroMaximo = document.getElementById('max-number').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numberRandom = Math.random() * numeroMaximo;
        numberRandom = Math.floor(numberRandom + 1);

        document.getElementById('resultado-valor').innerText = numberRandom;
        document.querySelector('.resultado').style.display = 'block';
    })
})  