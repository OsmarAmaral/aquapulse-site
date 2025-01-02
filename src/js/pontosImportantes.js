function ponto1() {
  if (document.querySelector('.alerta')) {
    return;
  }

  const alerta = document.createElement('div');
  alerta.className = 'alerta';

  // Estilizar o container principal
  Object.assign(alerta.style, {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxWidth: '1200px',
    height: '90%',
    overflowY: 'auto',
    backgroundColor: 'rgba(255, 255, 255, 0.95)', // Fundo levemente transparente
    padding: '20px',
    borderRadius: '20px',
    boxShadow: '0px 12px 35px rgba(0, 0, 0, 0.4)',
    zIndex: '1000',
    fontFamily: "'Poppins', sans-serif", // Fonte moderna e elegante
    display: 'flex',
    flexDirection: 'column',
    backdropFilter: 'blur(10px)', // Efeito de vidro fosco
  });

  // Cabeçalho
  const header = document.createElement('div');
  Object.assign(header.style, {
    textAlign: 'center',
    marginBottom: '30px',
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#2c3e50',
    textTransform: 'uppercase',
    borderBottom: '4px solid #56ab2f',
    paddingBottom: '15px',
  });
  header.innerHTML = `
    <span style="font-size: 45px; color: #56ab2f;">AquaPulse</span>
    <span style="display: block; font-size: 18px; font-weight: 300; color: #7f8c8d; margin-top: 10px;">Inovação no futuro da irrigação</span>
  `;

  // Corpo principal (layout dividido)
  const content = document.createElement('div');
  Object.assign(content.style, {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '20px',
  });

  // Seção de texto
  const texto = document.createElement('div');
  Object.assign(texto.style, {
    fontSize: '18px',
    lineHeight: '1.8',
    color: '#2c3e50',
    padding: '15px',
    backgroundColor: 'rgba(240, 248, 255, 0.7)', // Fundo levemente azulado
    borderRadius: '12px',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
  });
  texto.innerHTML = `
    <h2 style="color: #56ab2f; text-align: center; margin-bottom: 20px;">Criação do Projeto</h2>
    <p>
      Decidimos sair dos nossos grupos e formar um novo projeto, com ideia simples, mas que ainda hoje pode trazer novos conceitos.
    </p>
    <p>
      Não sabíamos como seria o futuro do projeto, mas sabíamos que seria o melhor projeto.
    </p>
    <blockquote style="border-left: 5px solid #56ab2f; padding-left: 15px; color: #34495e; font-style: italic;">
      "Não precisa ser bom para começar, mas precisa começar para ser bom."
    </blockquote>
  `;

  // Seção de imagens
  const imagens = document.createElement('div');
  Object.assign(imagens.style, {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '15px',
    padding: '15px',
    backgroundColor: 'rgba(250, 250, 250, 0.9)', // Fundo sutil
    borderRadius: '12px',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
  });

  for (let i = 1; i <= 4; i++) {
    const img = document.createElement('img');
    Object.assign(img.style, {
      width: '100%',
      height: 'auto',
      borderRadius: '12px',
      boxShadow: '0px 8px 25px rgba(0, 0, 0, 0.3)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      cursor: 'pointer',
    });
    img.src = `src/image/img01.webp`;
    img.alt = `Imagem ${i}`;
    img.addEventListener('mouseenter', () => {
      img.style.transform = 'scale(1.05)';
      img.style.boxShadow = '0px 12px 30px rgba(0, 0, 0, 0.4)';
    });
    img.addEventListener('mouseleave', () => {
      img.style.transform = 'scale(1)';
      img.style.boxShadow = '0px 8px 25px rgba(0, 0, 0, 0.3)';
    });
    imagens.appendChild(img);
  }

  // Botão de fechamento
  const botaoFechar = document.createElement('button');
  Object.assign(botaoFechar.style, {
    marginTop: '30px',
    padding: '15px 30px',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#56ab2f',
    color: '#fff',
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer',
    alignSelf: 'center',
    transition: 'all 0.3s ease',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
  });
  botaoFechar.textContent = 'Entendido!';

  botaoFechar.addEventListener('mouseenter', () => {
    botaoFechar.style.backgroundColor = '#3b8c35';
    botaoFechar.style.boxShadow = '0px 8px 20px rgba(0, 0, 0, 0.3)';
  });
  botaoFechar.addEventListener('mouseleave', () => {
    botaoFechar.style.backgroundColor = '#56ab2f';
    botaoFechar.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.2)';
  });
  botaoFechar.addEventListener('click', () => {
    alerta.remove();
  });

  // Montar o layout
  content.appendChild(texto);
  content.appendChild(imagens);
  alerta.appendChild(header);
  alerta.appendChild(content);
  alerta.appendChild(botaoFechar);

  // Adicionar ao body
  document.body.appendChild(alerta);
}
