const nome = prompt("Informe nome de Usuário")
let senha = prompt("Informe sua senha")

if (nome == "admin" && senha == "1234"){
    alert("Bem vindo");
} else {
    alert("Usuario ou senha incorreto");
}