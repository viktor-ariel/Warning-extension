function exibirPopUp() {
    var mensagem = "Viktor, tem um recado pra você ";
    var msg2 = "Está na hora do seu momento de inovação "
  
    // URL da busca no Google Images para uma imagem aleatória
    
    var imagem = chrome.runtime.getURL("");
  
    // Criar um elemento div para o pop-up
    var popUpDiv = document.createElement("div");
    popUpDiv.style.position = "fixed";
    popUpDiv.style.top = "50%";
    popUpDiv.style.left = "50%";
    popUpDiv.style.transform = "translate(-50%, -50%)";
    popUpDiv.style.padding = "20px";
    popUpDiv.style.background = "#fff";
    popUpDiv.style.border = "2px solid #000";
    popUpDiv.style.zIndex = "9999";
  
    // Adicionar a mensagem ao corpo do pop-up
    var mensagemElemento = document.createElement("h2");
    mensagemElemento.textContent = mensagem;
    popUpDiv.appendChild(mensagemElemento);
  
    // Adicionar uma imagem aleatória ao pop-up
    var imagemElemento = document.createElement("img");
    imagemElemento.src = imagem;
    imagemElemento.style.width = "50%";
    popUpDiv.appendChild(imagemElemento);

     // Adicionar a mensagem ao corpo do pop-up
     var msg2Elemento = document.createElement("h3");
     msg2Elemento.textContent = msg2;
     popUpDiv.appendChild(msg2Elemento);


    // Adicionar um botão "sair" ao pop-up
    var sairButton = document.createElement("button");
    sairButton.innerHTML = "Sair";
    sairButton.addEventListener("click", function () {
      popUpDiv.style.display = "none";
    });
    popUpDiv.appendChild(sairButton);
  
    // Adicionar o pop-up ao corpo da página
    document.body.appendChild(popUpDiv);
  
    // Armazenar a data e hora atual no armazenamento local
    var ultimaExibicao = new Date();
    localStorage.setItem("ultimaExibicao", ultimaExibicao.toString());
  }
  
  // Verificar se hoje é quarta, quinta ou sexta-feira e o horário é 18:52
  var dataAtual = new Date();
  var diaSemana = dataAtual.getDay(); // 0 (domingo) a 6 (sábado)
  var horaAtual = dataAtual.getHours();
  var minutosAtual = dataAtual.getMinutes();
  
  // Recuperar a última vez que o pop-up foi exibido do armazenamento local
  var ultimaExibicaoString = localStorage.getItem("ultimaExibicao");
  var ultimaExibicao = ultimaExibicaoString ? new Date(ultimaExibicaoString) : null;
  
  
  if (true){
    exibirPopUp();
  }


//   ( diaSemana === 0 || diaSemana === 1 || 
//     diaSemana === 2 || diaSemana === 3 || diaSemana === 4 || 
//     diaSemana === 5 || diaSemana === 6 ) && horaAtual === 20 && minutosAtual === 10) 
