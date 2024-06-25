
var formulario = document.getElementById("meuFormulario");
var botao = document.getElementById("meuBotao");
let linhas ='';

formulario.addEventListener("submit", function(e) {
    e.preventDefault();

    var inputNome = document.getElementById("inputNome")
    var inputNumero = document.getElementById("inputNumero");
    var corpoTabela = document.querySelector("tbody");

    
    let linha = '<tr>'
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputNumero.value}</td>`;
    linha += '</tr>'
    linhas += linha;
    corpoTabela.innerHTML = linhas;
    inputNome.value='';
    inputNumero.value='';


});