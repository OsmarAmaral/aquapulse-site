<?php
// Conexão com o banco de dados
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "AquaPulse";

// Criar conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

$alert_message = ""; // Variável para mensagens de alerta

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Coletando dados do formulário
    $email = trim($_POST['email']);
    $senha = trim($_POST['senha']);

    if (!empty($email) && !empty($senha)) {
        // Consultar usuário pelo e-mail
        $stmt_check = $conn->prepare("SELECT nome_usuario, senha_usuario FROM tbUsuarios WHERE email_usuario = ?");
        $stmt_check->bind_param("s", $email);
        $stmt_check->execute();
        $stmt_check->store_result();

        if ($stmt_check->num_rows > 0) {
            // Usuário encontrado, verificar senha
            $stmt_check->bind_result($nome_usuario, $senha_hash);
            $stmt_check->fetch();

            if (password_verify($senha, $senha_hash)) {
                // Login bem-sucedido, redirecionar usuário para usuario.php
                header("Location: usuario.php?nome=" . urlencode($nome_usuario) . "&email=" . urlencode($email));
                exit(); // Garantir que o script seja interrompido após o redirecionamento
            } else {
                $alert_message = "Senha incorreta. Tente novamente.";
            }
        } else {
            $alert_message = "Este email não está cadastrado.";
        }

        $stmt_check->close();
    } else {
        $alert_message = "Por favor, preencha todos os campos.";
    }
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="src/css/css-create-account.css">
    <title>AquaPulse Entrar</title>

    <!-- Script para exibir o alerta -->
    <script>
        window.onload = function () {
            var alertMessage = "<?php echo htmlspecialchars($alert_message, ENT_QUOTES, 'UTF-8'); ?>";
            if (alertMessage) {
                alert(alertMessage); // Exibe o alerta
                console.log(alertMessage); // Log da mensagem
            }
        };
    </script>
</head>

<body>
    <main>
        <form action="" method="POST">
            <h1>Entrar</h1>

            <label for="email-usuario">Email:</label><br>
            <input id="email-usuario" type="email" name="email" placeholder="Digite seu email..." required><br><br>

            <label for="senha-usuario">Senha:</label><br>
            <input id="senha-usuario" type="password" name="senha" placeholder="Digite sua senha..." minlength="8" required><br><br>

            <div class="box-btn">
                <a href="create_account.php">Não tem uma conta?</a>
                <button type="submit">Ok!</button>
            </div>
        </form>
    </main>
</body>

</html>
