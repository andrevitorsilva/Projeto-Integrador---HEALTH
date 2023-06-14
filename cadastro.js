document.getElementById('cadastroForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  const nome_usuario = document.getElementById('nome_usuario').value;
  const nome_completo = document.getElementById('nome_completo').value;
  const senha = document.getElementById('senha').value;
  const data_nascimento = document.getElementById('data_nascimento').value;
  const cpf = document.getElementById('cpf').value;
  const email = document.getElementById('email').value;

  const data = {
    nome_usuario,
    nome_completo,
    senha,
    data_nascimento,
    cpf,
    email,
  };

  try {
    const response = await fetch('http://192.168.0.252:3000/cadastro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    if (response.ok) {
      // Cadastro bem-sucedido
      exibirMensagem('Usuário cadastrado com sucesso!', 'success');
      limparCampos();
    } else {
      // Cadastro falhou
      exibirMensagem('Erro ao cadastrar o usuário.', 'error');
    }
  } catch (error) {
    console.error('Erro ao cadastrar o usuário:', error);
    exibirMensagem('Erro de conexão.', 'error');
  }
});

function exibirMensagem(mensagem, tipo) {
  const mensagemElemento = document.getElementById('mensagem');
  mensagemElemento.textContent = mensagem;
  mensagemElemento.className = tipo;
  mensagemElemento.style.display = 'block';
  setTimeout(function() {
    mensagemElemento.style.display = 'none';
  }, 5000);
}

function limparCampos() {
  document.getElementById('nome_usuario').value = '';
  document.getElementById('nome_completo').value = '';
  document.getElementById('senha').value = '';
  document.getElementById('data_nascimento').value = '';
  document.getElementById('cpf').value = '';
  document.getElementById('email').value = '';
}
