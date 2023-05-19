var conteudoLogin;

var enviar = document.getElementById("enviar");

enviar.onclick = function(event){
    event.preventDefault();
    conteudoLogin = {
        email: document.getElementById("email").value,
        senha: document.getElementById("senha").value
    };


    if(validarUsuario(conteudoLogin)){
        window.open("mensagens.html", "_self")
    }
}