//quando apertar o botão
var botaoMostrar = document.getElementById('exclusivo-btn');
const card = document.querySelector('.pop_senha')

// Adiciona um evento de clique ao botão
botaoMostrar.addEventListener('click', function() {
    // Adiciona a classe 'show' ao card
        card.classList.add('show');
    });

//comprovar a senha
function logar(){
    var senha = document.getElementById('password').value;

    if(senha == "senha"){
        alert('Sucesso');
        document.querySelector('.pop_senha').style.display = 'none';
        document.querySelector('#exclusivo-btn').style.display = 'none';
        document.querySelector('#container_exclusivo').style.filter = 'none';
    }else{
        alert('Senha incorreta');
    }

}
//pega a o enter
function verificarEnter(event) {
    if (event.key === 'Enter') {
        logar();
    }
}