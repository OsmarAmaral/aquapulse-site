<?php
$servername = "localhost";  // endereço do servidor MySQL
$username = "root";         // seu nome de usuário do MySQL
$password = "";             // sua senha do MySQL
$dbname = "aquapulse";      // nome do banco de dados

// Conectar ao banco de dados
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar a conexão
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Receber a pergunta do formulário
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $pergunta = trim($_POST['pergunta']);  // Usando trim() para remover espaços extras

    // Validar se a pergunta não está vazia
    if (!empty($pergunta)) {
        // Preparar a query para inserção
        $sql = "INSERT INTO tbperguntasfreq (pergunta) VALUES (?)";  // Certifique-se de que o nome da tabela é correto
        $stmt = $conn->prepare($sql);

        // Verificar se a preparação da query foi bem-sucedida
        if ($stmt === false) {
            die('Erro ao preparar a consulta: ' . $conn->error);
        }

        // Associar o parâmetro da pergunta ao prepared statement
        $stmt->bind_param("s", $pergunta);

        // Executar a query
        if ($stmt->execute()) {
            $message = "Sua pergunta foi enviada com sucesso!";
        } else {
            $message = "Erro ao enviar a pergunta: " . $conn->error;
        }

        // Fechar o statement
        $stmt->close();
    } else {
        $message = "A pergunta não pode estar vazia.";
    }
}

// Fechar a conexão
$conn->close();
?>

<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Suporte - AquaPulse</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="src/css/header.css">
    <link rel="stylesheet" href="src/css/footer.css">
    <script src="src/js/menu.js" defer></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #0D0D0D;
            color: #FFFFFF;
        }

        .section-title {
            font-size: 1.8rem;
            font-weight: 600;
            margin: 40px 0 20px;
            text-align: center;
            color: #FFFFFF;
            border-bottom: 1px solid #333333;
            padding-bottom: 10px;
        }

        .support-card {
            background-color: #1A1A1A;
            border: 1px solid #333333;
            border-radius: 8px;
            padding: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
            transition: background-color 0.3s ease, transform 0.2s ease;
        }

        .support-card:hover {
            background-color: #333333;
            transform: scale(1.02);
        }

        .support-card i {
            font-size: 2rem;
            color: #CCCCCC;
            margin-bottom: 15px;
        }

        .support-card h4 {
            font-size: 1.2rem;
            font-weight: 600;
            margin-bottom: 10px;
            color: #FFFFFF;
        }

        .support-card p {
            font-size: 0.9rem;
            color: #CCCCCC;
        }

        .action-btn {
            background: none;
            border: 1px solid #FFFFFF;
            padding: 8px 20px;
            font-size: 0.9rem;
            font-weight: 600;
            color: #FFFFFF;
            border-radius: 4px;
            transition: background-color 0.3s ease, color 0.3s ease;
        }

        .action-btn:hover {
            background-color: #FFFFFF;
            color: #0D0D0D;
        }

        .notification-card {
            position: fixed;
            top: 20px;
            right: 20px;
            max-width: 300px;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
            z-index: 1000;
            animation: slideIn 0.5s ease-in-out;
        }

        .notification-card p {
            margin: 0;
            font-size: 1rem;
            font-weight: bold;
            text-align: center;
        }

        .notification-card.success {
            background-color: #4CAF50;
            color: #FFF;
        }

        .notification-card.error {
            background-color: #FF5252;
            color: #FFF;
        }

        .d-none {
            display: none !important;
        }

        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }

            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    </style>
</head>

<body>
<header>
        <div id="logo-container">
            <img id="logo" src="src/image/logo.png" alt="Logo AquaPulse">
            <h1 id="titulo-principal">AquaPulse</h1>
        </div>
        <div id="menu-links">
            <a class="header-links" href="#sobre-produto">Sobre</a>
            <a class="header-links" href="produtos.html">Produto</a>
            <a class="header-links" href="suporte.php">Suporte</a>
            <a class="header-links" href="perguntas-frequentes.php">FAQ</a>
        </div>
        <div id="menu-icon-container">
            <i class="bi bi-list" id="menu-icon"></i>
        </div>
    </header>
    <div class="container my-5">
        <h2 class="section-title">Recursos e Instalações</h2>
        <div class="row g-4">
            <!-- 9 Recursos -->
            <div class="col-md-4">
                <div class="support-card">
                    <i class="fas fa-tools"></i>
                    <h4>Guia de Instalação</h4>
                    <p>Como instalar o sistema corretamente.</p>
                    <button class="action-btn" data-bs-toggle="modal" data-bs-target="#modal1">Ver Passo a Passo</button>
                </div>
            </div>
            <div class="col-md-4">
                <div class="support-card">
                    <i class="fas fa-wrench"></i>
                    <h4>Manutenção</h4>
                    <p>Dicas para manter o sistema eficiente.</p>
                    <button class="action-btn" data-bs-toggle="modal" data-bs-target="#modal2">Ver Passo a Passo</button>
                </div>
            </div>
            <div class="col-md-4">
                <div class="support-card">
                    <i class="fas fa-sync-alt"></i>
                    <h4>Atualizações</h4>
                    <p>Saiba como atualizar o firmware.</p>
                    <button class="action-btn" data-bs-toggle="modal" data-bs-target="#modal3">Ver Passo a Passo</button>
                </div>
            </div>
            <div class="col-md-4">
                <div class="support-card">
                    <i class="fas fa-wifi"></i>
                    <h4>Configuração Wi-Fi</h4>
                    <p>Resolva problemas de conexão.</p>
                    <button class="action-btn" data-bs-toggle="modal" data-bs-target="#modal4">Ver Passo a Passo</button>
                </div>
            </div>
            <div class="col-md-4">
                <div class="support-card">
                    <i class="fas fa-mobile-alt"></i>
                    <h4>Controle via App</h4>
                    <p>Gerencie tudo pelo aplicativo.</p>
                    <button class="action-btn" data-bs-toggle="modal" data-bs-target="#modal5">Ver Passo a Passo</button>
                </div>
            </div>
            <div class="col-md-4">
                <div class="support-card">
                    <i class="fas fa-cloud"></i>
                    <h4>Monitoramento</h4>
                    <p>Acompanhe o desempenho remotamente.</p>
                    <button class="action-btn" data-bs-toggle="modal" data-bs-target="#modal6">Ver Passo a Passo</button>
                </div>
            </div>
            <div class="col-md-4">
                <div class="support-card">
                    <i class="fas fa-leaf"></i>
                    <h4>Sustentabilidade</h4>
                    <p>Use o sistema de forma ecológica.</p>
                    <button class="action-btn" data-bs-toggle="modal" data-bs-target="#modal7">Ver Passo a Passo</button>
                </div>
            </div>
            <div class="col-md-4">
                <div class="support-card">
                    <i class="fas fa-cogs"></i>
                    <h4>Configurações Avançadas</h4>
                    <p>Personalize seu sistema.</p>
                    <button class="action-btn" data-bs-toggle="modal" data-bs-target="#modal8">Ver Passo a Passo</button>
                </div>
            </div>
            <div class="col-md-4">
                <div class="support-card">
                    <i class="fas fa-bolt"></i>
                    <h4>Economia de Energia</h4>
                    <p>Dicas para reduzir o consumo de energia.</p>
                    <button class="action-btn" data-bs-toggle="modal" data-bs-target="#modal9">Ver Passo a Passo</button>
                </div>
            </div>
        </div>
    </div>


    <!-- Modal 1: Guia de Instalação -->
    <div class="modal fade" id="modal1" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Guia de Instalação</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <ol>
                        <li>Conecte o sistema à fonte de água.</li>
                        <li>Fixe os sensores no local desejado.</li>
                        <li>Ligue o sistema à energia elétrica.</li>
                        <li>Configure o aplicativo para sincronizar.</li>
                    </ol>
                    <div class="video-support" style="margin-top: 20px; text-align: center;">
                        <p>Precisa de mais ajuda? Assista ao tutorial em vídeo abaixo:</p>
                        <div class="video-container" style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px; margin-top: 10px;">
                            <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;">
                        </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal 2: Manutenção -->
    <div class="modal fade" id="modal2" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Manutenção</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <ol>
                        <li>Verifique regularmente se há vazamentos.</li>
                        <li>Limpe os sensores para evitar sujeira.</li>
                        <li>Certifique-se de que os cabos estão conectados corretamente.</li>
                        <li>Realize testes periódicos no sistema.</li>
                    </ol>
                    <div class="video-support" style="margin-top: 20px; text-align: center;">
                        <p>Precisa de mais ajuda? Assista ao tutorial em vídeo abaixo:</p>
                        <div class="video-container" style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px; margin-top: 10px;">
                            <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;">
                        </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal 3: Atualizações -->
    <div class="modal fade" id="modal3" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Atualizações</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <ol>
                        <li>Abra o aplicativo Aquapulse.</li>
                        <li>Acesse Configurações > Atualizações.</li>
                        <li>Clique em 'Procurar Atualizações'.</li>
                        <li>Siga as instruções na tela para concluir.</li>
                    </ol>
                    <div class="video-support" style="margin-top: 20px; text-align: center;">
                        <p>Precisa de mais ajuda? Assista ao tutorial em vídeo abaixo:</p>
                        <div class="video-container" style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px; margin-top: 10px;">
                            <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;">
                        </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal 4: Configuração Wi-Fi -->
    <div class="modal fade" id="modal4" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Configuração Wi-Fi</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <ol>
                        <li>Acesse o aplicativo e entre na aba 'Configurações'.</li>
                        <li>Escolha a opção 'Rede Wi-Fi'.</li>
                        <li>Insira a senha da sua rede e clique em 'Salvar'.</li>
                        <li>Teste a conexão para garantir que está funcionando.</li>
                    </ol>
                    <div class="video-support" style="margin-top: 20px; text-align: center;">
                        <p>Precisa de mais ajuda? Assista ao tutorial em vídeo abaixo:</p>
                        <div class="video-container" style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px; margin-top: 10px;">
                            <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;">
                        </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Continue o mesmo padrão para os Modais 5 a 9 -->


    <!-- Modal 5: Controle via App -->
    <div class="modal fade" id="modal5" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Controle via App</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <ol>
                        <li>Baixe o aplicativo Aquapulse na loja do seu celular.</li>
                        <li>Cadastre uma conta e faça login.</li>
                        <li>Sincronize o dispositivo com o aplicativo.</li>
                        <li>Gerencie horários, sensores e relatórios diretamente pelo app.</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal 6: Monitoramento -->
    <div class="modal fade" id="modal6" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Monitoramento</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <ol>
                        <li>Acesse o app e clique em 'Monitoramento'.</li>
                        <li>Visualize os dados em tempo real.</li>
                        <li>Receba alertas sobre alterações no sistema.</li>
                        <li>Analise relatórios históricos para identificar padrões.</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal 7: Sustentabilidade -->
    <div class="modal fade" id="modal7" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Sustentabilidade</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <ol>
                        <li>Ajuste os horários de irrigação para períodos mais frescos do dia.</li>
                        <li>Evite desperdícios configurando os sensores corretamente.</li>
                        <li>Use água reaproveitada sempre que possível.</li>
                        <li>Ative configurações de economia no aplicativo.</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal 8: Configurações Avançadas -->
    <div class="modal fade" id="modal8" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Configurações Avançadas</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <ol>
                        <li>Acesse o menu de configurações avançadas no aplicativo.</li>
                        <li>Ative ou desative sensores conforme necessário.</li>
                        <li>Crie perfis personalizados para estações do ano.</li>
                        <li>Salve as alterações para aplicar automaticamente.</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal 9: Economia de Energia -->
    <div class="modal fade" id="modal9" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Economia de Energia</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <ol>
                        <li>Programe a irrigação para horários noturnos ou de menor calor.</li>
                        <li>Desative sensores desnecessários durante períodos de chuva.</li>
                        <li>Mantenha o sistema atualizado para garantir eficiência energética.</li>
                        <li>Monitore o consumo de energia pelo aplicativo.</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
    <!-- Formulário de Perguntas -->
    <div class="container my-5">
        <div class="card p-4 shadow-lg rounded" style="background-color: #1A1A1A; border: 1px solid #333;">
            <h4 class="text-center mb-3" style="color: #FFF; font-family: 'Poppins', sans-serif;">
                Você ainda tem dúvidas?
            </h4>
            <p class="text-center" style="color: #CCC; font-family: 'Poppins', sans-serif;">
                Digite sua pergunta no campo abaixo. Nossa equipe responderá em breve!
            </p>
            <form id="questionForm" method="POST" action="">
                <textarea id="userQuestion" name="pergunta" class="form-control mb-3 shadow" rows="4" placeholder="Escreva aqui sua pergunta..." required style="resize: none; background-color: #222; color: #FFF; border-radius: 8px; padding: 15px; font-size: 1rem; border: 1px solid #444;"></textarea>
                <button type="submit" class="btn btn-outline-light shadow-lg px-5 py-2" style="font-weight: bold; font-size: 1rem; font-family: 'Poppins', sans-serif;">
                    Enviar Pergunta
                </button>
            </form>
        </div>
    </div>

    <!-- Card de Notificação -->
    <div id="notificationCard" class="notification-card d-none">
        <p id="notificationMessage"></p>
    </div>

    <script>
        // Exibição de mensagem após o envio
        <?php if (isset($message)) { ?>
            const notificationMessage = '<?php echo $message; ?>';
            const notificationCard = document.getElementById('notificationCard');
            const messageElement = document.getElementById('notificationMessage');
            messageElement.textContent = notificationMessage;
            notificationCard.classList.remove('d-none');
            setTimeout(() => {
                notificationCard.classList.add('d-none');
            }, 5000);
        <?php } ?>
    </script>

    <footer>
        <p style="color: white"><a href="#" class="links-footer">Termos de uso</a> | <a href="#" class="links-footer">Políticas de Privacidade</a></p>
        <div id="redes-sociais" style="margin: 10px;">
            <a href="#"><i class="bi bi-google" style="color: green; margin: 5px;"></i></a>
            <a href="#"><i class="bi bi-linkedin" style="color: green; margin: 5px;"></i></a>
            <a href="#"><i class="bi bi-instagram" style="color: green; margin: 5px;"></i></a>
            <a href="#"><i class="bi bi-github" style="color: green; margin: 5px;"></i></a>
            <a href="#"><i class="bi bi-youtube" style="color: green; margin: 5px;"></i></a>
        </div>
        <p style="color: white;">
            © 2024 AquaPulse. Todos os direitos reservados.
        </p>
    </footer>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>
