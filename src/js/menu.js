document.addEventListener("DOMContentLoaded", () => { 
  const menuIcon = document.querySelector("#menu-icon");
  const header = document.querySelector("header");

  // Criar o contêiner do menu
  const menuContainer = document.createElement("div");
  menuContainer.id = "menu-container";
  menuContainer.style.position = "absolute";
  menuContainer.style.top = "10vh"; // Menos espaço do topo
  menuContainer.style.right = "20px"; // Alinhado ao canto direito
  menuContainer.style.width = "250px"; // Menu mais estreito
  menuContainer.style.backgroundColor = "#0d0d0d"; // Fundo profissional
  menuContainer.style.color = "#fff";
  menuContainer.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.8)"; // Sombra suave
  menuContainer.style.borderRadius = "8px"; // Bordas mais suaves
  menuContainer.style.padding = "20px 15px";
  menuContainer.style.display = "none";
  menuContainer.style.flexDirection = "column";
  menuContainer.style.zIndex = "1000";

  // Adicionar título ao menu
  const menuTitle = document.createElement("h3");
  menuTitle.textContent = "Menu Adicionais";
  menuTitle.style.fontFamily = '"Bebas Neue", sans-serif';
  menuTitle.style.fontSize = "22px";
  menuTitle.style.marginBottom = "15px";
  menuTitle.style.color = "#28a745"; // Verde profissional
  menuTitle.style.textAlign = "center";
  menuContainer.appendChild(menuTitle);

  // Criar lista de itens do menu
  const menuListContainer = document.createElement("div");
  menuListContainer.id = "menu-list-container";
  menuListContainer.style.maxHeight = "300px"; // Limitar a altura do menu
  menuListContainer.style.overflowY = "scroll"; // Permitir rolagem

  const menuList = document.createElement("ul");
  menuList.style.listStyle = "none";
  menuList.style.padding = "0";
  menuList.style.margin = "0";

  // Dados do menu
  const menuItems = [
    { text: "CreateAccount.php", href: "create_account.php", icon: "bi bi-info-circle" },
    { text: "Login.php", href: "login.php", icon: "bi bi-bag" },
    { text: "Usuario.php", href: "usuario.php", icon: "bi bi-tools" },
  ];

  // Adicionar itens ao menu
  menuItems.forEach((item) => {
    const menuItem = document.createElement("li");
    menuItem.style.marginBottom = "12px"; // Menos espaço entre os itens

    const menuLink = document.createElement("a");
    menuLink.href = item.href;
    menuLink.style.color = "#fff";
    menuLink.style.textDecoration = "none";
    menuLink.style.padding = "12px 18px";
    menuLink.style.display = "flex";
    menuLink.style.alignItems = "center";
    menuLink.style.fontFamily = '"Bebas Neue", sans-serif';
    menuLink.style.fontSize = "16px";
    menuLink.style.transition = "all 0.3s ease";
    menuLink.style.border = "1px solid #1c1c1c";
    menuLink.style.borderRadius = "5px";

    // Adicionar ícone
    const menuIcon = document.createElement("i");
    menuIcon.className = item.icon; // Ícone do Bootstrap
    menuIcon.style.marginRight = "10px";
    menuIcon.style.fontSize = "18px";
    menuLink.appendChild(menuIcon);

    // Adicionar texto
    const menuText = document.createElement("span");
    menuText.textContent = item.text;
    menuLink.appendChild(menuText);

    menuItem.appendChild(menuLink);
    menuList.appendChild(menuItem);
  });

  menuListContainer.appendChild(menuList);
  menuContainer.appendChild(menuListContainer);

  // Adicionar ao header
  header.appendChild(menuContainer);

  // Exibir ou ocultar o menu ao clicar no ícone
  menuIcon.style.cursor = "pointer";
  menuIcon.addEventListener("click", () => {
    const isMenuVisible = menuContainer.style.display === "flex";
    menuContainer.style.display = isMenuVisible ? "none" : "flex";
  });

  // Fechar menu ao clicar fora
  document.addEventListener("click", (e) => {
    if (!menuContainer.contains(e.target) && !menuIcon.contains(e.target)) {
      menuContainer.style.display = "none";
    }
  });

  // Fechar menu ao rolar a página
  window.addEventListener("scroll", () => {
    if (menuContainer.style.display === "flex") {
      menuContainer.style.display = "none";
    }
  });

  // Exibir apenas 6 primeiros itens, e permitir scroll para o restante
  const initialItems = 6;
  const allItems = menuItems.length;

  function updateMenu() {
    // Mostrar apenas os primeiros 6 itens
    const visibleItems = menuItems.slice(0, initialItems);

    // Atualizar a lista do menu
    menuList.innerHTML = '';
    visibleItems.forEach((item) => {
      const menuItem = document.createElement("li");
      menuItem.style.marginBottom = "12px";

      const menuLink = document.createElement("a");
      menuLink.href = item.href;
      menuLink.style.color = "#fff";
      menuLink.style.textDecoration = "none";
      menuLink.style.padding = "12px 18px";
      menuLink.style.display = "flex";
      menuLink.style.alignItems = "center";
      menuLink.style.fontFamily = '"Bebas Neue", sans-serif';
      menuLink.style.fontSize = "16px";
      menuLink.style.transition = "all 0.3s ease";
      menuLink.style.border = "1px solid #1c1c1c";
      menuLink.style.borderRadius = "5px";

      // Adicionar ícone
      const menuIcon = document.createElement("i");
      menuIcon.className = item.icon;
      menuIcon.style.marginRight = "10px";
      menuIcon.style.fontSize = "18px";
      menuLink.appendChild(menuIcon);

      // Adicionar texto
      const menuText = document.createElement("span");
      menuText.textContent = item.text;
      menuLink.appendChild(menuText);

      menuItem.appendChild(menuLink);
      menuList.appendChild(menuItem);
    });
  }

  updateMenu();

});
