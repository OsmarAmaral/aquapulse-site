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

function ponto2() {
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
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: '20px',
    borderRadius: '20px',
    boxShadow: '0px 12px 35px rgba(0, 0, 0, 0.4)',
    zIndex: '1000',
    fontFamily: "'Poppins', sans-serif",
    display: 'flex',
    flexDirection: 'column',
    backdropFilter: 'blur(10px)',
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
    borderBottom: '4px solid #e74c3c',
    paddingBottom: '15px',
  });
  header.innerHTML = `
    <span style="font-size: 45px; color: #e74c3c;">AquaPulse</span>
    <span style="display: block; font-size: 18px; font-weight: 300; color: #7f8c8d; margin-top: 10px;">Despedida de um membro</span>
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
    backgroundColor: 'rgba(240, 248, 255, 0.7)',
    borderRadius: '12px',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
  });
  texto.innerHTML = `
    <h2 style="color: #e74c3c; text-align: center; margin-bottom: 20px;">Saída de um Membro</h2>
    <p>
      Hoje nos despedimos de um grande membro de nossa equipe, que nos acompanhou em muitos momentos importantes.
    </p>
    <p>
      Sua contribuição foi essencial para o sucesso do projeto, e sempre lembraremos de sua dedicação e paixão.
    </p>
    <blockquote style="border-left: 5px solid #e74c3c; padding-left: 15px; color: #34495e; font-style: italic;">
      "Não é um adeus, mas um até logo. Que seus caminhos sejam repletos de sucesso!"
    </blockquote>
  `;

  // Seção de imagens
  const imagens = document.createElement('div');
  Object.assign(imagens.style, {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '15px',
    padding: '15px',
    backgroundColor: 'rgba(250, 250, 250, 0.9)',
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
    img.src = `src/image/img04.webp`;
    img.alt = `Membro ${i}`;
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
    backgroundColor: '#e74c3c',
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
    botaoFechar.style.backgroundColor = '#c0392b';
    botaoFechar.style.boxShadow = '0px 8px 20px rgba(0, 0, 0, 0.3)';
  });
  botaoFechar.addEventListener('mouseleave', () => {
    botaoFechar.style.backgroundColor = '#e74c3c';
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

function ponto3() {
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
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: '20px',
    borderRadius: '20px',
    boxShadow: '0px 12px 35px rgba(0, 0, 0, 0.4)',
    zIndex: '1000',
    fontFamily: "'Poppins', sans-serif",
    display: 'flex',
    flexDirection: 'column',
    backdropFilter: 'blur(10px)',
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
    borderBottom: '4px solid #3498db',
    paddingBottom: '15px',
  });
  header.innerHTML = `
    <span style="font-size: 45px; color: #3498db;">AquaPulse</span>
    <span style="display: block; font-size: 18px; font-weight: 300; color: #7f8c8d; margin-top: 10px;">Rumo ao ERI-MT 2024</span>
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
    backgroundColor: 'rgba(240, 248, 255, 0.7)',
    borderRadius: '12px',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
  });
  texto.innerHTML = `
    <h2 style="color: #3498db; text-align: center; margin-bottom: 20px;">Rumo ao ERI-MT 2024</h2>
    <p>
      É com entusiasmo que anunciamos nossa participação no <strong>Encontro Regional de Inovação</strong> (ERI-MT 2024), que será realizado em Cuiabá.
    </p>
    <p>
      Estamos nos preparando para apresentar nossas ideias e projetos inovadores para a comunidade acadêmica e empresarial da região. É uma oportunidade única para expandir nossos horizontes e consolidar nosso compromisso com a inovação e o progresso.
    </p>
    <blockquote style="border-left: 5px solid #3498db; padding-left: 15px; color: #34495e; font-style: italic;">
      "Grandes conquistas começam com grandes desafios. O futuro nos espera no ERI-MT 2024!"
    </blockquote>
  `;

  // Seção de imagens
  const imagens = document.createElement('div');
  Object.assign(imagens.style, {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '15px',
    padding: '15px',
    backgroundColor: 'rgba(250, 250, 250, 0.9)',
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
    img.src = `src/image/img06.webp`;
    img.alt = `ERI 2024 ${i}`;
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
    backgroundColor: '#3498db',
    color: '#fff',
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer',
    alignSelf: 'center',
    transition: 'all 0.3s ease',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
  });
  botaoFechar.textContent = 'Pronto para o desafio!';

  botaoFechar.addEventListener('mouseenter', () => {
    botaoFechar.style.backgroundColor = '#2980b9';
    botaoFechar.style.boxShadow = '0px 8px 20px rgba(0, 0, 0, 0.3)';
  });
  botaoFechar.addEventListener('mouseleave', () => {
    botaoFechar.style.backgroundColor = '#3498db';
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

function ponto4() {
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
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: '20px',
    borderRadius: '20px',
    boxShadow: '0px 12px 35px rgba(0, 0, 0, 0.4)',
    zIndex: '1000',
    fontFamily: "'Poppins', sans-serif",
    display: 'flex',
    flexDirection: 'column',
    backdropFilter: 'blur(10px)',
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
    borderBottom: '4px solid #2ecc71',
    paddingBottom: '15px',
  });
  header.innerHTML = `
    <span style="font-size: 45px; color: #2ecc71;">AquaPulse</span>
    <span style="display: block; font-size: 18px; font-weight: 300; color: #7f8c8d; margin-top: 10px;">Sejam Bem-vindos!</span>
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
    backgroundColor: 'rgba(240, 248, 255, 0.7)',
    borderRadius: '12px',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
  });
  texto.innerHTML = `
    <h2 style="color: #2ecc71; text-align: center; margin-bottom: 20px;">Entrada dos Novos Membros</h2>
    <p>
      É com grande alegria que anunciamos a chegada de novos integrantes à nossa equipe. Eles trazem consigo novas ideias, perspectivas e energia para impulsionar ainda mais nossos projetos.
    </p>
    <p>
      Cada um de vocês é uma peça importante na construção do nosso futuro. Estamos empolgados para começar esta jornada juntos e alcançar grandes conquistas.
    </p>
    <blockquote style="border-left: 5px solid #2ecc71; padding-left: 15px; color: #34495e; font-style: italic;">
      "O talento ganha jogos, mas o trabalho em equipe ganha campeonatos."
    </blockquote>
  `;

  // Seção de imagens
  const imagens = document.createElement('div');
  Object.assign(imagens.style, {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '15px',
    padding: '15px',
    backgroundColor: 'rgba(250, 250, 250, 0.9)',
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
    img.src = `src/image/produtor.webp`;
    img.alt = `Novo Membro ${i}`;
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
    backgroundColor: '#2ecc71',
    color: '#fff',
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer',
    alignSelf: 'center',
    transition: 'all 0.3s ease',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
  });
  botaoFechar.textContent = 'Vamos começar!';

  botaoFechar.addEventListener('mouseenter', () => {
    botaoFechar.style.backgroundColor = '#27ae60';
    botaoFechar.style.boxShadow = '0px 8px 20px rgba(0, 0, 0, 0.3)';
  });
  botaoFechar.addEventListener('mouseleave', () => {
    botaoFechar.style.backgroundColor = '#2ecc71';
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

function ponto5() {
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
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: '20px',
    borderRadius: '20px',
    boxShadow: '0px 12px 35px rgba(0, 0, 0, 0.4)',
    zIndex: '1000',
    fontFamily: "'Poppins', sans-serif",
    display: 'flex',
    flexDirection: 'column',
    backdropFilter: 'blur(10px)',
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
    borderBottom: '4px solid #f39c12',
    paddingBottom: '15px',
  });
  header.innerHTML = `
    <span style="font-size: 45px; color: #f39c12;">AquaPulse</span>
    <span style="display: block; font-size: 18px; font-weight: 300; color: #7f8c8d; margin-top: 10px;">2º Lugar na FECITI 2024</span>
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
    backgroundColor: 'rgba(240, 248, 255, 0.7)',
    borderRadius: '12px',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
  });
  texto.innerHTML = `
    <h2 style="color: #f39c12; text-align: center; margin-bottom: 20px;">Celebrando o 2º Lugar!</h2>
    <p>
      Com muito orgulho, anunciamos que o AquaPulse conquistou o <strong>2º lugar</strong> na FECITI 2024, um dos maiores eventos de ciência, tecnologia e inovação.
    </p>
    <p>
      Essa conquista é um reflexo do trabalho árduo, dedicação e paixão de toda a equipe. Agradecemos a todos que nos apoiaram ao longo dessa jornada.
    </p>
    <blockquote style="border-left: 5px solid #f39c12; padding-left: 15px; color: #34495e; font-style: italic;">
      "O esforço sempre será recompensado. Este é apenas o começo de algo ainda maior!"
    </blockquote>
  `;

  // Seção de imagens
  const imagens = document.createElement('div');
  Object.assign(imagens.style, {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '15px',
    padding: '15px',
    backgroundColor: 'rgba(250, 250, 250, 0.9)',
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
    img.src = `src/image/img07.webp`;
    img.alt = `FECITI 2024 ${i}`;
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
    backgroundColor: '#f39c12',
    color: '#fff',
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer',
    alignSelf: 'center',
    transition: 'all 0.3s ease',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
  });
  botaoFechar.textContent = 'Continuar Evoluindo!';

  botaoFechar.addEventListener('mouseenter', () => {
    botaoFechar.style.backgroundColor = '#d68910';
    botaoFechar.style.boxShadow = '0px 8px 20px rgba(0, 0, 0, 0.3)';
  });
  botaoFechar.addEventListener('mouseleave', () => {
    botaoFechar.style.backgroundColor = '#f39c12';
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

function ponto6() {
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
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: '20px',
    borderRadius: '20px',
    boxShadow: '0px 12px 35px rgba(0, 0, 0, 0.4)',
    zIndex: '1000',
    fontFamily: "'Poppins', sans-serif",
    display: 'flex',
    flexDirection: 'column',
    backdropFilter: 'blur(10px)',
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
    borderBottom: '4px solid #8e44ad',
    paddingBottom: '15px',
  });
  header.innerHTML = `
    <span style="font-size: 45px; color: #8e44ad;">AquaPulse</span>
    <span style="display: block; font-size: 18px; font-weight: 300; color: #7f8c8d; margin-top: 10px;">Dias Atuais</span>
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
    backgroundColor: 'rgba(240, 248, 255, 0.7)',
    borderRadius: '12px',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
  });
  texto.innerHTML = `
    <h2 style="color: #8e44ad; text-align: center; margin-bottom: 20px;">Os Dias Atuais</h2>
    <p>
      Vivemos um momento de constante evolução, onde os desafios são enfrentados com criatividade, trabalho em equipe e inovação.
    </p>
    <p>
      O AquaPulse continua firme em seu propósito, adaptando-se às mudanças, celebrando conquistas e explorando novos horizontes. Os dias atuais são uma mistura de aprendizado e crescimento, onde cada passo nos aproxima de um futuro ainda mais brilhante.
    </p>
    <blockquote style="border-left: 5px solid #8e44ad; padding-left: 15px; color: #34495e; font-style: italic;">
      "A única constante na vida é a mudança, e nela encontramos nossa força."
    </blockquote>
  `;

  // Seção de imagens
  const imagens = document.createElement('div');
  Object.assign(imagens.style, {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '15px',
    padding: '15px',
    backgroundColor: 'rgba(250, 250, 250, 0.9)',
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
    img.src = `src/image/residencial.webp`;
    img.alt = `Dias Atuais ${i}`;
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
    backgroundColor: '#8e44ad',
    color: '#fff',
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer',
    alignSelf: 'center',
    transition: 'all 0.3s ease',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
  });
  botaoFechar.textContent = 'Continuar Explorando';

  botaoFechar.addEventListener('mouseenter', () => {
    botaoFechar.style.backgroundColor = '#71368a';
    botaoFechar.style.boxShadow = '0px 8px 20px rgba(0, 0, 0, 0.3)';
  });
  botaoFechar.addEventListener('mouseleave', () => {
    botaoFechar.style.backgroundColor = '#8e44ad';
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
