document.querySelector('#finalizacao').style.display = 'none';
document.querySelector('header').style.display = 'none';

function iniciarQuiz() {
    document.querySelector('.iniciar').style.display = 'none';

    setTimeout(function() {
        document.querySelector('.tela-principal').style.display = 'flex';
        document.querySelector('header').style.display = 'flex';
    }, 100);
}
