var obj;

var enviar = document.getElementById("enviar");
    
enviar.onclick = function(event){
    event.preventDefault();
    obj = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        mensagem: document.getElementById("email").value
    };

    inserirMensagem(obj)

}




