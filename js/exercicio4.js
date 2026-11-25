/*Trabalhando com DOM*/


    // <input type="text" name="nome" id="testeDom">
    // <button id="Entrar"></button>



const caixa = document.getElementById("testeDom");
const botao = document.getElementById("entrar");

document.getElementById("testeDom");
document.getElementById("entar");

botao.addEventListener("click", function (){
    caixa.textContent = + this.inputMode.value;

});