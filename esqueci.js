const inputEmail = document.querySelector('input[name="email"]');
const btnEnviar = document.querySelector('.bnt-enviar-link');

btnEnviar.addEventListener('click', () => {
    const email = inputEmail.value.trim();

    if (!email || !inputEmail.checkValidity()) {
        inputEmail.focus();
        alert('Digite um e-mail válido.');
        return;
    }

    btnEnviar.disabled = true;
    btnEnviar.textContent = 'Enviando...';

    setTimeout(() => {
        window.location.href="sucesso.html"; 
    }, 3000);
});