<?php
// Conexão com o banco de dados
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "AquaPulse"; // Nome do banco de dados

// Criar conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

$alert_message = ""; // Variável para armazenar mensagens de alerta

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
                $alert_message = "Cadastro realizado com sucesso!";
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
    <link rel="stylesheet" href="src/css/css-create-account.css">
    <title>AquaPulse Criar Conta</title>

    <!-- Script para exibir o alerta -->
    <script>
        window.onload = function () {
            var alertMessage = "<?php echo $alert_message; ?>";
            if (alertMessage) {
                alert(alertMessage); // Exibe o alerta com a mensagem
                console.log(alertMessage); // Exibe a mensagem no console
            }
        };
    </script>
</head>

<body>
    <main>
        <form action="" method="POST">

            <h1>Criar Conta</h1>

            <label for="nome-usuario">Nome:</label><br>
            <input id="nome-usuario" type="text" name="nome" placeholder="digite seu nome..." minlength="3" required><br><br>

            <label for="email-usuario">Email:</label><br>
            <input id="email-usuario" type="email" name="email" placeholder="digite seu email..." required><br><br>

            <label for="senha-usuario">Senha:</label><br>
            <input id="senha-usuario" type="password" name="senha" placeholder="digite sua senha..." minlength="8" required><br><br>

            <label for="confirmar-senha">Confirmar senha:</label><br>
            <input id="confirmar-senha" type="password" name="confirmar-senha" placeholder="digite sua senha novamente..." minlength="8" required><br><br>

            <div class="box-btn">
                <a href="#">Já tem uma conta?</a>
                <button type="submit">Ok!</button>
            </div>
        </form>
    </main>
</body>

</html>
