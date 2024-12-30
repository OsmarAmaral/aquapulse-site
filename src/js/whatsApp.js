// Criação e configuração do botão WhatsApp
const criarBotaoWhatsApp = () => {
    // Cria o botão
    const botao = document.createElement('div');
    botao.className = 'whatsapp-button';
    botao.style = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 60px;
        height: 60px;
        background: linear-gradient(135deg, #25D366, #3ADF6B);
        color: white;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        cursor: pointer;
        transition: transform 0.3s, box-shadow 0.3s;
        z-index: 1000;
    `;

    const icone = document.createElement('i');
    icone.className = 'bi bi-whatsapp';
    icone.style.fontSize = '30px';
    botao.appendChild(icone);

    // Adiciona evento de clique para abrir o WhatsApp
    botao.addEventListener('click', () => {
        window.open('https://wa.me/5566992524707', '_blank');
    });

    // Adiciona o botão ao body
    document.body.appendChild(botao);
};

// Adiciona os ícones do Bootstrap Icons
const carregarBootstrapIcons = () => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.5/font/bootstrap-icons.min.css';
    document.head.appendChild(link);
};

// Inicializa o botão
window.onload = () => {
    carregarBootstrapIcons();
    criarBotaoWhatsApp();
};