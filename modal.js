const criarModal = () => {
    const modal = document.createElement('div');
    modal.id = 'sobreposicao-modal';
    modal.style = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background-color: rgba(0, 0, 0, 0.8); display: flex; justify-content: center; align-items: center;
        z-index: 1000; visibility: hidden; opacity: 0; transition: opacity 0.5s ease;
    `;

    const conteudo = document.createElement('div');
    conteudo.id = 'conteudo-modal';
    conteudo.style = `
        position: relative; padding: 20px; border-radius: 10px; 
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    `;

    const botaoFechar = document.createElement('button');
    botaoFechar.id = 'botao-fechar';
    botaoFechar.innerHTML = '&times;';
    botaoFechar.style = `
        position: absolute; top: 10px; right: 10px; background-color: red; color: white;
        border: none; border-radius: 50%; width: 30px; height: 30px; display: flex;
        justify-content: center; align-items: center; font-size: 20px; cursor: pointer;
        transition: background-color 0.3s ease;
    `;
    botaoFechar.onmouseover = () => (botaoFechar.style.backgroundColor = 'darkred');
    botaoFechar.onmouseout = () => (botaoFechar.style.backgroundColor = 'red');

    const imagem = document.createElement('img');
    imagem.src ="modal.jpeg";
    imagem.alt = 'Imagem de introdução';
    imagem.style = 'max-width: 65vw; max-height: 65vh; object-fit: contain; border-radius: 10px;';

    conteudo.appendChild(botaoFechar);
    conteudo.appendChild(imagem);
    modal.appendChild(conteudo);
    document.body.appendChild(modal);

    return modal;
};
            const inicializarModal = () => {
    const modal = criarModal();

    // Exibe o modal ao carregar a página
    setTimeout(() => {
        modal.style.visibility = 'visible';
        modal.style.opacity = '1';
    }, 100);

    // Fecha o modal ao clicar no botão
    const botaoFechar = document.getElementById('botao-fechar');
    botaoFechar.onclick = () => {
        modal.style.animation = 'saidaSuave 0.5s ease';
        setTimeout(() => {
            modal.style.visibility = 'hidden';
            modal.style.opacity = '0';
        }, 500);
    };

    // Adiciona animações ao documento
    const estilo = document.createElement('style');
    estilo.innerHTML = `
        @keyframes entradaSuave {
            from { transform: scale(0.9); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
        }

        @keyframes saidaSuave {
            from { transform: scale(1); opacity: 1; }
            to { transform: scale(0.9); opacity: 0; }
        }
    `;
    document.head.appendChild(estilo);
};
            window.onload = inicializarModal;
