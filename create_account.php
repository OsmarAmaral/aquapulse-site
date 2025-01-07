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
$nome = $email = ""; // Inicialização de variáveis

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Coletando dados do formulário
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $senha = $_POST['senha'];
    $confirmar_senha = $_POST['confirmar-senha'];

    // Verificando se a senha e a confirmação de senha coincidem
    if ($senha !== $confirmar_senha) {
        $alert_message = "As senhas não coincidem!";
    } else {
        // Verificando se o usuário já existe
        $sql_check = "SELECT * FROM tbUsuarios WHERE email_usuario = '$email'";
        $result = $conn->query($sql_check);

        if ($result->num_rows > 0) {
            $alert_message = "Este email já está em uso.";
        } else {
            // Inserir o novo usuário no banco de dados
            $senha_hash = password_hash($senha, PASSWORD_DEFAULT); // Criptografando a senha
            $sql_insert = "INSERT INTO tbUsuarios (nome_usuario, email_usuario, senha_usuario)
                           VALUES ('$nome', '$email', '$senha_hash')";

            if ($conn->query($sql_insert) === TRUE) {
                // Redirecionar para a página de boas-vindas
                header("Location: usuario.php?nome=" . urlencode($nome) . "&email=" . urlencode($email));
                exit();
            } else {
                $alert_message = "Erro: " . $sql_insert . "<br>" . $conn->error;
            }
        }
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
    <link rel="stylesheet" href="src/css/create_account.css">
    <script src="src/js/usuario.js"></script>
    <title>AquaPulse Criar Conta</title>
</head>

<body>
    <main>
        <form action="" method="POST">
            <h1>Criar Conta</h1>

            <label for="nome-usuario">Nome:</label><br>
            <input sutofocus id="nome-usuario" type="text" name="nome" placeholder="Digite seu nome..." minlength="3" required><br><br>

            <label for="email-usuario">Email:</label><br>
            <input id="email-usuario" type="email" name="email" placeholder="Digite seu email..." required><br><br>

            <label for="senha-usuario">Senha:</label><br>
            <input id="senha-usuario" type="password" name="senha" placeholder="Digite sua senha..." minlength="8" required><br><br>

            <label for="confirmar-senha">Confirmar senha:</label><br>
            <input id="confirmar-senha" type="password" name="confirmar-senha" placeholder="Digite sua senha novamente..." minlength="8" required><br><br>

            <div class="box-btn">
                <a href="login.php">Já tem uma conta?</a>
                <button type="submit">Cadastrar</button>
            </div>
        </form>
    </main>
</body>

</html>
