<?php
// Defina as credenciais do banco de dados
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
            $feedbackMessage = "Pergunta enviada com sucesso!";
        } else {
            $feedbackMessage = "Erro ao enviar a pergunta: " . $conn->error;
        }

        // Fechar o statement
        $stmt->close();
    } else {
        $feedbackMessage = "A pergunta não pode estar vazia.";
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
    <title>AquaPulse 2057</title>
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="src/css/header.css">
    <link rel="stylesheet" href="src/css/footer.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: rgb(255, 255, 255);
            color: #333;
            overflow-x: hidden;
            transition: background-color 0.3s;
        }
        
        header {
            background-color: #0d0d0d !important;
        }

        .container {
            display: flex;
            padding: 40px 20px;
            justify-content: space-between;
            gap: 20px;
        }

        .faq, .ask-question {
            background-color: white;
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
        }

        .faq {
            width: 60%;
        }

        .ask-question {
            width: 35%;
        }

        .faq-item {
            background-color: white;
            margin-bottom: 15px;
            padding: 15px;
            border-radius: 10px;
            cursor: pointer;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            transition: background-color 0.3s, transform 0.3s;
        }

        .faq-item:hover {
            background-color: #e0f2f1;
            transform: translateX(5px);
        }

        .answer {
            display: none;
            margin-top: 15px;
            padding: 10px;
            background-color: #f9f9f9;
            border-left: 5px solid #2a8f85;
        }

        .input-field {
            width: 100%;
            padding: 12px;
            margin-bottom: 15px;
            border: 1px solid #ddd;
            border-radius: 8px;
            font-size: 16px;
            transition: border-color 0.3s;
            resize: vertical;
        }

        .input-field.error {
            border-color: #e74c3c;
        }

        .submit-btn {
            background-color: #2a8f85;
            color: white;
            border: none;
            padding: 12px;
            cursor: pointer;
            border-radius: 8px;
            font-size: 16px;
            width: 100%;
        }

        .submit-btn:hover {
            background-color: #1d6e59;
        }

        .floating-card {
            position: fixed;
            top: 20px;
            right: 20px;
            background-color: #2a8f85;
            color: white;
            padding: 15px;
            border-radius: 12px;
            display: none;
            font-size: 14px;
            z-index: 999;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            transition: opacity 0.5s ease-in-out;
        }

        .floating-card.success {
            background-color: #27ae60;
        }

        .floating-card.error {
            background-color: #e74c3c;
        }

        .floating-card .close-btn {
            background: none;
            border: none;
            color: white;
            font-size: 18px;
            cursor: pointer;
            margin-left: 10px;
        }

        footer {
            background-color: #0d0d0d !important;
        }

        footer a {
            color: white;
            text-decoration: none;
        }

        footer a:hover {
            text-decoration: underline;
        }

        #menu-links {
            display: flex;
            gap: 15px;
            align-items: center;
        }

        #menu-links a {
            color: white;
            text-decoration: none;
            font-size: 16px;
            transition: color 0.3s ease;
        }

        #menu-links a:hover {
            color: #28a745;
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
            <a class="header-links" href="index.html">Sobre</a>
            <a class="header-links" href="produtos.html">Produto</a>
            <a class="header-links" href="suporte.php">Suporte</a>
            <a class="header-links" href="perguntas-frequentes.html">FAQ</a>
        </div>
        <div id="menu-icon-container">
            <i class="bi bi-list" id="menu-icon"></i>
        </div>
    </header>


    <div class="container">
        <div class="faq">
            <h2>Perguntas Frequentes</h2>
            <div class="faq-item" onclick="toggleAnswer(1)">Como o sistema de irrigação AquaPulse funciona?</div>
            <div class="answer" id="answer1">O AquaPulse automatiza o controle de irrigação, ajustando os níveis de água conforme as condições climáticas e as necessidades das plantas. O sistema é controlado por meio de um aplicativo móvel.</div>

            <div class="faq-item" onclick="toggleAnswer(2)">Posso controlar o sistema de irrigação de qualquer lugar?</div>
            <div class="answer" id="answer2">Sim, o aplicativo AquaPulse permite que você controle o sistema de irrigação de qualquer lugar, basta ter acesso à internet.</div>

            <div class="faq-item" onclick="toggleAnswer(3)">O sistema de irrigação funciona em qualquer tipo de solo?</div>
            <div class="answer" id="answer3">O AquaPulse é compatível com a maioria dos tipos de solo. No entanto, a eficiência pode variar dependendo das características do solo e do sistema de irrigação utilizado.</div>

            <div class="faq-item" onclick="toggleAnswer(4)">O AquaPulse faz manutenção do sistema de irrigação?</div>
            <div class="answer" id="answer4">A manutenção do sistema de irrigação deve ser feita pelo proprietário. Contudo, o AquaPulse oferece suporte técnico para ajustes e otimização do sistema.</div>

            <div class="faq-item" onclick="toggleAnswer(5)">Preciso de algum equipamento especial para usar o AquaPulse?</div>
            <div class="answer" id="answer5">Não é necessário equipamento especial além do próprio sistema de irrigação e o aplicativo. O AquaPulse se integra facilmente aos sistemas existentes.</div>

            <div class="faq-item" onclick="toggleAnswer(6)">O AquaPulse é compatível com outros sistemas de automação doméstica?</div>
            <div class="answer" id="answer6">Sim, o AquaPulse pode ser integrado com outros sistemas de automação doméstica, permitindo um controle mais completo do ambiente.</div>
        </div>

        <div class="ask-question">
            <h2>Envie sua Pergunta</h2>
            <!-- Formulário para enviar a pergunta -->
            <form id="questionForm" method="POST" action="">
                <textarea class="input-field" id="user-question" name="pergunta" placeholder="Descreva sua dúvida..." rows="3"></textarea>
                <button type="submit" class="submit-btn">Enviar Pergunta</button>
            </form>
        </div>
    </div>

    <!-- Feedback sobre o envio -->
    <?php if (isset($feedbackMessage)) { ?>
        <div id="floating-card" class="floating-card">
            <span id="floating-card-message"><?php echo $feedbackMessage; ?></span>
            <button class="close-btn" onclick="closeFloatingCard()">×</button>
        </div>
    <?php } ?>

    <script>
        function toggleAnswer(index) {
            const answer = document.getElementById(`answer${index}`);
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        }

        function closeFloatingCard() {
            document.getElementById("floating-card").style.display = "none";
        }
    </script>

    <footer>
        <p style="color: white"><a href="#" class="links-footer">Termos de uso</a> | <a href="#" class="links-footer">Políticas de Privacidade</a></p>
        <div id="redes-sociais" style="margin: 10px;">
            <a href="#" class="footer-icons"><i class="bi bi-google"></i></a>
            <a href="#" class="footer-icons"><i class="bi bi-linkedin"></i></a>
            <a href="#" class="footer-icons"><i class="bi bi-instagram"></i></a>
            <a href="#" class="footer-icons"><i class="bi bi-github"></i></a>
            <a href="#" class="footer-icons"><i class="bi bi-youtube"></i></a>
        </div>
        <p style="color: white;">
            © 2024 AquaPulse. Todos os direitos reservados.
        </p>
    </footer>
</body>
</html>
