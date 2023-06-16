

document.getElementById('cadastroForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  const nome_usuario = document.getElementById('nome_usuario').value;
  const razao_social = document.getElementById('razao_social').value;
  const senha = document.getElementById('senha').value;
  const cidade = document.getElementById('cidade').value;
  const estado = document.getElementById('estado').value;
  const rua = document.getElementById('rua').value;
  const bairro = document.getElementById('bairro').value;
  const cnpj = document.getElementById('cnpj').value;
  const data_inclusao = document.getElementById('data_inclusao').value;
  const laboratorio_ativo = document.getElementById('laboratorio_ativo').value;
  

  const data = {
    nome_usuario,
    razao_social,
    senha,
    cidade,
    estado,
    rua,
    bairro,
    cnpj,
    data_inclusao,
    laboratorio_ativo,
  
    
  };

  try {
    const response = await fetch(' http://192.168.35.23:3000/cadastro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    if (response.ok) {
      // Cadastro bem-sucedido
      window.alert("Usuario foi Cadastrado!.");
      window.location.href = 'login.html';
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
  document.getElementById('razao_social')
  document.getElementById('senha').value = '';
  document.getElementById('cidade').value = '';
  document.getElementById('estado').value = '';
  document.getElementById('rua').value = '';
  document.getElementById('bairro').value = '';
  document.getElementById('cnpj').value = '';
  document.getElementById('data_inclusao').value = '';
  document.getElementById('laboratorio_ativo').value = '';

}
