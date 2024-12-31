function ponto1() {
    if (document.querySelector('.alerta')) {
      return;
    }
  
    const alerta = document.createElement('div');
    alerta.className = 'alerta';
  
    // Estilizar o container principal (parecido com o jornal)
    alerta.style.position = 'fixed';
    alerta.style.top = '50%';
    alerta.style.left = '50%';
    alerta.style.transform = 'translate(-50%, -50%)';
    alerta.style.width = '80%';
    alerta.style.maxWidth = '1200px';
    alerta.style.height = '90%';
    alerta.style.overflowY = 'auto'; // Rolagem se necessário
    alerta.style.backgroundColor = '#f9f9f9'; // Fundo claro (parecido com papel)
    alerta.style.padding = '20px';
    alerta.style.borderRadius = '12px';
    alerta.style.boxShadow = '0px 8px 20px rgba(0, 0, 0, 0.3)';
    alerta.style.zIndex = '1000';
    alerta.style.fontFamily = "'Times New Roman', serif"; // Fonte tradicional
    alerta.style.display = 'flex';
    alerta.style.flexDirection = 'column';
  
    // Cabeçalho do "jornal"
    const header = document.createElement('div');
    header.style.textAlign = 'center';
    header.style.marginBottom = '20px';
    header.style.fontSize = '28px';
    header.style.fontWeight = 'bold';
    header.style.color = '#2c3e50';
    header.style.textTransform = 'uppercase';
    header.style.borderBottom = '2px solid #56ab2f';
    header.style.paddingBottom = '10px';
    header.innerHTML = `
      <span style="font-size: 40px; color: #56ab2f;">AquaPulse</span>
    `;
  
    // Corpo principal (layout dividido em grades)
    const content = document.createElement('div');
    content.style.display = 'grid';
    content.style.gridTemplateColumns = '2fr 1fr'; // Texto ocupa 2/3, imagens 1/3
    content.style.gap = '20px';
  
    // Seção de texto (artigos)
    const texto = document.createElement('div');
    texto.style.fontSize = '18px';
    texto.style.lineHeight = '1.8';
    texto.style.color = '#2c3e50';
    texto.innerHTML = `
      <h2 style="color: #56ab2f;">Criação do projeto</h2>
      <p>
        decidimos sair dos nosso grupos e formar um novo projeto, com ideia simples porém , que ainda nos dias de hoje,
        pode trazer novos conceitos.
      </p>
      <p>
        não sabiamos como seria o futuro do projeto mais sabiamos que ia ser o melhor projeto
      </p>
      <blockquote style="border-left: 4px solid #56ab2f; padding-left: 10px; color: #7f8c8d;">
        "Não precisa sem bom para começar mas, precisa começar para ser bom."
      </blockquote>
    `;
  
    // Seção de imagens (estilo bento box)
    const imagens = document.createElement('div');
    imagens.style.display = 'grid';
    imagens.style.gridTemplateColumns = 'repeat(2, 1fr)'; // 2 colunas
    imagens.style.gap = '10px';
  
    // Adicionar imagens ao grid
    for (let i = 1; i <= 4; i++) {
      const img = document.createElement('img');
      img.src = `https://via.placeholder.com/300x200?text=Imagem+${i}`;
      img.alt = `Imagem ${i}`;
      img.style.width = '100%';
      img.style.height = 'auto';
      img.style.borderRadius = '8px';
      img.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.2)';
      imagens.appendChild(img);
    }
  
    // Rodapé com botão de fechamento
    const botaoFechar = document.createElement('button');
    botaoFechar.textContent = 'Ok';
    botaoFechar.style.marginTop = '20px';
    botaoFechar.style.padding = '10px 20px';
    botaoFechar.style.border = 'none';
    botaoFechar.style.borderRadius = '8px';
    botaoFechar.style.backgroundColor = '#56ab2f';
    botaoFechar.style.color = '#fff';
    botaoFechar.style.cursor = 'pointer';
    botaoFechar.style.alignSelf = 'center';
    botaoFechar.style.transition = 'all 0.3s ease';
  
    botaoFechar.addEventListener('mouseenter', () => {
      botaoFechar.style.backgroundColor = '#3b8c35';
    });
    botaoFechar.addEventListener('mouseleave', () => {
      botaoFechar.style.backgroundColor = '#56ab2f';
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
  
    // Adicionar o alerta ao body
    document.body.appendChild(alerta);
  }
  
