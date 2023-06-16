const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const pool = new Pool({
    user: 'postgres',
    host: 'containers-us-west-15.railway.app',
    database: 'db_healthtime',
    password: '25uWUhd7h9KK7OWkF4tD',
    port: 5499
});

/* Area do Cadastro */
app.use(cors());
app.use(express.json());

app.post('/cadastro', async (req, res) => {
  try {
    const { nome_usuario, razao_social, senha, cidade, estado, rua, bairro, cnpj, data_inclusao, laboratorio_ativo } = req.body;

    const query = 'INSERT INTO laboratorio (nome_usuario, razao_social, senha, cidade, estado, rua, bairro, cnpj, data_inclusao, laboratorio_ativo) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)';
    const values = [nome_usuario, razao_social, senha, cidade, estado, rua, bairro, cnpj, data_inclusao, laboratorio_ativo];

    await pool.query(query, values);

    res.json({ message: 'O Usuário foi cadastrado!' });
  } catch (error) {
    console.error('Erro ao cadastrar o usuário:', error);
    res.status(500).json({ error: 'Erro ao cadastrar o usuário' });
  }
});



app.post('/login', async (req, res) => {
  async function verificarCadastro(nome_usuario, senha) {
    try {
      const query =
        'SELECT * FROM laboratorio WHERE nome_usuario = $1 AND senha = $2 ';
      const values = [nome_usuario, senha];

      const result = await pool.query(query, values);

      return result.rowCount === 1;
    } catch (error) {
      console.error('Erro ao verificar cadastro:', error);
      throw error;
    }
  }

  const { nome_usuario, senha } = req.body;

  const isValid = await verificarCadastro(nome_usuario, senha);

  if (isValid) {
    res.sendFile(__dirname + '/formulario.html');
  } else {
    res.status(400).send('Dados de login inválidos');
  }
});

  
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});


