<?php
// Defina as credenciais do banco de dados
$servername = "localhost"; // geralmente 'localhost' no XAMPP
$username = "root";        // Usuário padrão no XAMPP
$password = "";            // Senha padrão no XAMPP (geralmente em branco)
$dbname = "aquapulse"; // Nome do banco de dados que você criou

// Crie a conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifique a conexão
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
} 
echo "Conexão bem-sucedida!";
?>
