

for ( let ib = 1; ib <= 3; ib++){

    const botao = document.getElementById("btn");
    const mensagem = document.getElementById("mensagem");

    let ib = 0;

    botao.addEventListener("click", function () {
  
    ib++;    

    if(ib === 1){
        mensagem.textContent = "olá";
    } else if(ib === 2){
        mensagem.textContent = "Bem-Vindo";
    } else {
      mensagem.textContent = "Você aprendeu javaScript";
      ib=0;
    }   


})};


      const botao1  = document.getElementById("btn2");
        const mensagem2 = document.getElementById("mensagem2");

        botao1.addEventListener("click", function () {
            mensagem2.textContent = "Sistema iniciado";
        
    });

      const botao3  = document.getElementById("btn3");
        const mensagem = document.getElementById("mensagem2");

        botao3.addEventListener("click", function () {
            mensagem2.textContent = "Sistema desligado";
        
    });