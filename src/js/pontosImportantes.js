function ponto1 () {
    // Selecionar o botão
const button = document.getElementById('ponto-1');

// Função que cria e exibe a mensagem de alerta
function mostrarAlerta() {
  // Verificar se o alerta já existe para evitar duplicados
  if (document.querySelector('.alerta')) {
    return;
  }

  // Criar o elemento do alerta
  const alerta = document.createElement('div');
  alerta.className = 'alerta'; // Classe para facilitar identificação
  alerta.textContent = 'Este é um alerta criado dinamicamente!';

  // Estilizar o alerta via JS
  alerta.style.position = 'fixed'; // Posição fixa para centralizar
  alerta.style.top = '50%'; // Centraliza verticalmente
  alerta.style.left = '50%'; // Centraliza horizontalmente
  alerta.style.transform = 'translate(-50%, -50%)'; // Ajuste para centralização
  alerta.style.backgroundColor = '#f44336'; // Fundo vermelho (estilo alerta)
  alerta.style.color = '#fff'; // Texto branco
  alerta.style.padding = '20px'; // Espaçamento interno
  alerta.style.borderRadius = '10px'; // Bordas arredondadas
  alerta.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.1)'; // Sombra
  alerta.style.zIndex = '1000'; // Garantir que fique acima de outros elementos
  alerta.style.fontFamily = 'Arial, sans-serif'; // Fonte básica
  alerta.style.fontSize = '18px'; // Tamanho do texto
  alerta.style.textAlign = 'center'; // Centralizar o texto

  // Adicionar botão de fechamento dentro do alerta
  const botaoFechar = document.createElement('button');
  botaoFechar.textContent = 'Fechar';
  botaoFechar.style.marginTop = '10px'; // Espaçamento entre botão e texto
  botaoFechar.style.padding = '10px 20px';
  botaoFechar.style.border = 'none';
  botaoFechar.style.borderRadius = '5px';
  botaoFechar.style.backgroundColor = '#333';
  botaoFechar.style.color = '#fff';
  botaoFechar.style.cursor = 'pointer';

  // Adicionar evento para fechar o alerta
  botaoFechar.addEventListener('click', () => {
    alerta.remove(); // Remove o alerta do DOM
  });

  // Adicionar o botão ao alerta
  alerta.appendChild(botaoFechar);

  // Adicionar o alerta ao body
  document.body.appendChild(alerta);
}

// Adicionar evento de clique ao botão para mostrar o alerta
button.addEventListener('click', mostrarAlerta);
}
