
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
      const response = await fetch('http://192.168.0.252:8080/cadastro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Erro ao cadastrar o usuario:', error);
    }
  });
  