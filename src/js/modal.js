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
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); background: transparent;
    `;

    const botaoFechar = document.createElement('button');
    botaoFechar.id = 'botao-fechar';
    botaoFechar.innerHTML = '&times;';
    botaoFechar.style = `
        position: absolute; top: 10px; right: 10px; background-color: red; color: white;
        border: none; border-radius: 50%; width: 30px; height: 30px; display: flex;
        justify-content: center; align-items: center; font-size: 20px; cursor: pointer;
    `;
    botaoFechar.onclick = () => fecharModal();

    const imagem = document.createElement('img');
    imagem.src = "/src/image/modal.jpeg";
    imagem.alt = 'Imagem de introdução';
    imagem.style = 'max-width: 65vw; max-height: 65vh; object-fit: contain; border-radius: 10px;';

    conteudo.appendChild(botaoFechar);
    conteudo.appendChild(imagem);
    modal.appendChild(conteudo);
    document.body.appendChild(modal);

    return modal;
};

const exibirModal = () => {
    const modal = document.getElementById('sobreposicao-modal');
    modal.style.visibility = 'visible';
    modal.style.opacity = '1';

    // Desabilita o scroll no body
    document.body.style.overflow = 'hidden';

    const whatsappButton = document.querySelector('.whatsapp-button');
    if (whatsappButton) whatsappButton.style.display = 'none'; // Oculta o botão WhatsApp
};

const fecharModal = () => {
    const modal = document.getElementById('sobreposicao-modal');
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.visibility = 'hidden';

        // Reativa o scroll no body
        document.body.style.overflow = 'auto';

        const whatsappButton = document.querySelector('.whatsapp-button');
        if (whatsappButton) whatsappButton.style.display = 'flex'; // Reexibe o botão WhatsApp
    }, 500);
};

const inicializarModal = () => {
    criarModal();
    setTimeout(() => exibirModal(), 1000); // Exibe o modal automaticamente após 1 segundo
};

document.addEventListener('DOMContentLoaded', inicializarModal);
