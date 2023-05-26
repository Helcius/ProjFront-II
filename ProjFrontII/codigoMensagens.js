var elementoTabela = document.getElementById("recebeTabela");
var arrayMensagens = obterMensagens();

var contador = 0;

console.log(arrayMensagens.lenght)

while (arrayMensagens.length > contador) {
    let recebeObjeto = arrayMensagens[contador];
    let td0 = recebeObjeto.nome;
    let td1 = recebeObjeto.email;
    let td2 = recebeObjeto.mensagem;

    let linha = elementoTabela.insertRow(contador);
    let cel0 = linha.insertCell(0);
    let cel1 = linha.insertCell(1);
    let cel2 = linha.insertCell(2);

    cel0.innerHTML = td0;
    cel1.innerHTML = td1;
    cel2.innerHTML = td2;

    contador++
}