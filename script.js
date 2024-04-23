const into_numero = document.querySelector('#into_numero');
const into_nome = document.querySelector('#into_nome');
const into_data = document.querySelector('#into_data');
const into_cvc = document.querySelector('#into_cvc');
const butao = document.querySelector('#butao');


function entrada () {
    const numero = document.querySelector('#numero').value;
    const nome = document.querySelector('#nome').value;
    const mes = document.querySelector('#mes').value;
    const ano = document.querySelector('#ano').value;
    const cvc = document.querySelector('#cvc').value;
    
    into_numero.textContent = numero;
    into_nome.textContent = nome;
    into_data.textContent = mes + '/' + ano;
    into_cvc.textContent = cvc;
}

const inputs = document.querySelectorAll('.input');

inputs.forEach(function(input) {
    input.addEventListener('input', function() {
        this.value = this.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    });const numeroInput = document.querySelector('#numero');

    numeroInput.addEventListener('input', function() {
        let unformattedValue = this.value.replace(/\s/g, '');
    
        let formattedValue = unformattedValue.replace(/\D/g, '').replace(/(\d{4})/g, '$1 ').trim();
    
        this.value = formattedValue;
    });
    
});

const mesInput = document.querySelector('#mes');
const anoInput = document.querySelector('#ano');

mesInput.addEventListener('input', function() {
    let mes = parseInt(this.value, 10);
    
    // Se o mês for maior que 12, ajusta para 12
    if (mes > 12) {
        this.value = '12';
    } else if (mes < 1) { // Se o mês for menor que 1, ajusta para 01
        this.value = '01';
    }
});
anoInput.addEventListener('input', function() {
    let ano = parseInt(this.value, 20);

    if (ano < 23) {
        this.value = '24';
    } else if (ano > 50) { // Se o mês for menor que 1, ajusta para 01
        this.value = '32';
    }
});

butao.addEventListener('click', entrada)
