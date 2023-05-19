var conteudoFormulario;

var enviar = document.getElementById("enviar");
    
enviar.onclick = function(event){
    event.preventDefault();
    conteudoFormulario = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        mensagem: document.getElementById("email").value
    };
}