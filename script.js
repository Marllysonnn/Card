const into_numero = document.querySelector('#into_numero');
const into_nome = document.querySelector('#into_nome');
const into_data = document.querySelector('#into_data');
const into_cvc = document.querySelector('#into_cvc');
const butao = document.querySelector('#butao');

// Fornece as informacoes digitadas nos inputs para a frente e verso do cartão.
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

//Restricao de apenas numeros a ser digitado no nos inputs que requer dados de numeros.
inputs.forEach(function(input) {
    input.addEventListener('input', function() {
        this.value = this.value.replace(/\D/g, '');
    });const numeroInput = document.querySelector('#numero');

//Formatacao do input do numero do cartao, dando espacos a cada 4 digitos.
    numeroInput.addEventListener('input', function() {
        let unformattedValue = this.value.replace(/\s/g, '');
    
        let formattedValue = unformattedValue.replace(/\D/g, '').replace(/(\d{4})/g, '$1 ').trim();
    
        this.value = formattedValue;
    });
    
});

const mesInput = document.querySelector('#mes');
const anoInput = document.querySelector('#ano');

//Prevencao de erros da mes, restringindo o digito maximo ate 12.
mesInput.addEventListener('input', function() {
    let mes = parseInt(this.value, 10);
    
    if (mes > 12) {
        this.value = '12';
    } else if (mes < 1) {
        this.value = '01';
    }
});

butao.addEventListener('click', entrada)
