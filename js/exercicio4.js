/*Trabalhando com DOM*/


    // <input type="text" name="nome" id="testeDom">
    // <button id="Entrar"></button>


// const input = document.getElementById("testeDom")
// const texto = document.getElementById("texto");
// const botao = document.getElementById("entrar");

// document.getElementById("botao");
// addEventListener("click", function(){
//     texto.innerHTML =  '' + input.value;
// });

const sub = document.getElementById("subtrair")
const adi = document.getElementById("adicionar")
const numero = document.getElementById("numero")
let valor = 0


    if(adi.addEventListener("click", function () {
        valor++
        atualizar()
    

    }));else if (
        
        sub.addEventListener("click", function () {
        valor--
            atualizar()

            
    
    }));

    function atualizar(){
        numero.textContent = valor;

        if(valor < 0){
            numero.style.color = "red"}
        else {
            numero.style.color = "blue"
        }
        }

