// Função para sortear números aleatórios
function sortear() {
  let quantidade = parseInt(document.getElementById("quantidade").value);
  let de = parseInt(document.getElementById("de").value);
  let ate = parseInt(document.getElementById("ate").value);

  let sorteados = [];
  let numero;


  for (let i = 0; i < quantidade; i++) {
    // Gera um número aleatório entre o de e o ate
    numero = obterNumeroAleatorio(de, ate);

    // Gera um novo número se já foi sorteado
    while (sorteados.includes(numero)) {
      numero = obterNumeroAleatorio(de, ate);  // Gera um novo número se já foi sorteado
    }

    // Adiciona o número ao array de números sorteados e mostra no HTML
    sorteados.push(numero);
  }

  // Mostra os números sorteados no HTML
  let resultado = document.getElementById('resultado');
  resultado.innerHTML = `<label class="texto__paragrafo"
  >Números sorteados: ${sorteados}</label>`;
  alterarStatusBotao();
}


function obterNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
  let botao = document.getElementById('btn-reiniciar');
  if (botao.classList.contains('container__botao-desabilitado')) {
    botao.classList.remove('container__botao-desabilitado');
    botao.classList.add('container__botao');
  } else {
    botao.classList.remove('container__botao');
    botao.classList.add('container__botao-desabilitado');
  }
}

function reiniciar() {
  document.getElementById('quantidade').value = '';
  document.getElementById('de').value = '';
  document.getElementById('ate').value = '';
  document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
  alterarStatusBotao();
}