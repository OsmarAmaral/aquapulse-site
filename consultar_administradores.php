<?php
// Incluir a conexão com o banco de dados
include('config/conexao.php');

// Consultar todos os administradores
$sql = "SELECT id_adm, nome_adm, email_adm FROM tbadministradores";
$result = $conn->query($sql);

// Verificar e exibir os resultados
if ($result->num_rows > 0) {
    // Começar a tabela HTML
    echo "<table border='1'>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Email</th>
            </tr>";
    
    // Exibir cada linha de dados
    while($row = $result->fetch_assoc()) {
        echo "<tr>
                <td>" . $row["id_adm"]. "</td>   <!-- Ajuste para 'id_adm' -->
                <td>" . $row["nome_adm"]. "</td> <!-- Ajuste para 'nome_adm' -->
                <td>" . $row["email_adm"]. "</td> <!-- Ajuste para 'email_adm' -->
              </tr>";
    }
    echo "</table>";
} else {
    echo "Nenhum administrador encontrado.";
}

// Fechar a conexão
$conn->close();
?>
