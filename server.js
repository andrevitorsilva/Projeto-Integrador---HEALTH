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
    const { nome_completo, nome_usuario, senha, data_nascimento, cpf, email } = req.body;

    const query = 'INSERT INTO usuario (nome_usuario, nome_completo, senha, data_nascimento, cpf, email) VALUES ($1, $2, $3, $4, $5, $6)';
    const values = [nome_usuario, nome_completo, senha, data_nascimento, cpf, email];

    await pool.query(query, values);

    res.json({ message: 'O Usuário foi cadastrado!' });
  } catch (error) {
    console.error('Erro ao cadastrar o usuário:', error);
    res.status(500).json({ error: 'Erro ao cadastrar o usuário' });
  }
});



app.post('/login', async (req, res) => {
  async function verificarCadastro(nome_usuario, senha, cpf, data_nascimento) {
    try {
      const query =
        'SELECT * FROM usuario WHERE nome_usuario = $1 AND senha = $2 AND cpf = $3 AND data_nascimento = $4';
      const values = [nome_usuario, senha, cpf, data_nascimento];

      const result = await pool.query(query, values);

      return result.rowCount === 1;
    } catch (error) {
      console.error('Erro ao verificar cadastro:', error);
      throw error;
    }
  }

  const { nome_usuario, senha, cpf, data_nascimento } = req.body;

  const isValid = await verificarCadastro(nome_usuario, senha, cpf, data_nascimento);

  if (isValid) {
    res.sendFile(__dirname + '/formulario.html');
  } else {
    res.status(400).send('Dados de login inválidos');
  }
});

  
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});


