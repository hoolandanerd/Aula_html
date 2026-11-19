

let nome = prompt("Informe nome de Usuário")
let senha = prompt("Informe sua senha")
let saida = false ;

for (let tentativas = 1; tentativas <= 2; tentativas++ ){

    
    if (nome == "admin" && senha == "1234"){
        alert("Bem vindo");
        break;
    } else {
        alert("Usuario ou senha incorreto");
        nome = prompt("Informe nome de Usuário")
        senha = prompt("Informe sua senha")
    } 

    if (tentativas == 2){

        saida = true;
    }
}

if (saida == true){
        alert("Numeros de tentativas excedido") ;
}

