const form = document.getElementById('form-numeros');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
const successMessage = document.querySelector('.success-message');
const errorMessage = document.querySelector('.error-message');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Previne o envio padrão do formulário 

    const valorA = parseFloat(campoA.value);
    const valorB = parseFloat(campoB.value);

    // Limpa mensagens anteriores
    successMessage.style.display = 'none';
    errorMessage.style.display = 'none';

    // Validação
    if (valorB > valorA) {
        successMessage.innerHTML = `Formulário válido! O número B (${valorB}) é maior que o número A (${valorA}).`;
        successMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'block';
    }

    // Limpa os campos após a submissão
    campoA.value = '';
    campoB.value = '';
});


