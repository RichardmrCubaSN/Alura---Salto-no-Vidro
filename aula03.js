ganhou = 0
for(let rodada = 1; rodada <= 3; rodada++) {

  escolhaJogador = prompt("Nivel "+rodada+", escolha vidro (1,2 ou 3)?") 
  pisoQuebrado = Math.floor(Math.random()*3) + 1;
  
  if(escolhaJogador == pisoQuebrado){
    alert("vidro quebrou acabou o jogo para Você")
    rodada = 4;
    ganhou= 1
  }
  else {
    alert("Passou! piso quebrado esta na ponte : " + pisoQuebrado)
  }
 
}

if(ganhou == 0) {
  alert("Você Venceu! Parabens! ")
}