// soma de dosi números 
 function somar(a, b){
     reSoma = a + b;
     return somar;
 }

 somar(2, 4);
 alert(reSoma);

 
// Mensagem de bem vindo para a pessoa que digitou o nome
 function pessoa(nome){
     pessoaNome = nome;
     return pessoa;

}

 pessoa(prompt("Digite seu nome:"))
 alert("Bem-vindo(a) " + pessoaNome)


// calculo de média
function calculo(nota1, nota2){
    notaSoma = nota1 + nota2;
    return calculo;
}

calculo(Number(prompt("Digite a Primeira nota:")), Number(prompt("Digite a Segunda nota:")))
media = (notaSoma / 2)

    if (media >= 7){
        alert("Você foi APROVADO!!! Parabens");
    } else if (media >= 5){
        alert("iiii não foi dessa vez nos vemos na RECUPERAÇÃO");
    } else {
    alert("Reprovado, já era meu amigo")
    }

    






