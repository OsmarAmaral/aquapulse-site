import mysql.connector
import pandas as pd
import matplotlib.pyplot as plt

# Configuração da conexão com o banco de dados MySQL
db_config = {
    'host': 'localhost',       
    'user': 'root',    
    'password': '',   
    'database': 'AquaPulse'    
}

# Conexão com o banco
conn = mysql.connector.connect(**db_config)

# Consulta SQL para contar os valores de ava_usuario
query = """
SELECT ava_usuario, COUNT(*) as total
FROM tbUsuarios
GROUP BY ava_usuario;
"""

# Executar a query e carregar os dados em um DataFrame
df = pd.read_sql(query, conn)

# Fechar a conexão
conn.close()

# Verificar os dados retornados
print(df)

# Preparar os dados para o gráfico de pizza
labels = ['positivo', 'negativo']  # Ajuste os rótulos conforme necessário
sizes = df['total']
colors = ['#4CAF50', '#FF5733']  # Verde para True, Vermelho para False (personalizável)
explode = (0.1, 0)  # Destaque na fatia de 'Avaliado'

# Criar o gráfico de pizza
plt.figure(figsize=(8, 8))
plt.pie(sizes, labels=labels, autopct='%1.1f%%', startangle=90, colors=colors, explode=explode)
plt.title('Distribuição de Avaliações de Usuários')
plt.axis('equal')  # Garantir que o gráfico seja um círculo perfeito
plt.show()
