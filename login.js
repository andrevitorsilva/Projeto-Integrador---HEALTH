
document.getElementById('loginForm').addEventListener('submit', async function(event) {
  event.preventDefault();


    // Obtenha os valores dos campos de login
    const nome_usuario = document.getElementById('nome_usuario').value;
    const senha = document.getElementById('senha').value;

    const data = {
      nome_usuario,
      senha,
    }

    // Faça a requisição para a API de login

    try {
      const response = await fetch('http://192.168.35.23:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      // const result = await response.json();
      if (response.ok) {
        window.location.href = 'formulario.html';
      } else {
        // Cadastro falhou
        window.alert("Usuario nao cadastrado.");
        limparCampos();
      }
    } catch (error) {
      console.error('Erro :', error);
    }
  });
    



function limparCampos() {
  document.getElementById('nome_usuario').value = '';
  document.getElementById('senha').value = '';
}

    /* $.ajax({
      url: 'http://192.168.0.252:3000/login',
      method: 'POST',
      data: { nome_usuario, senha, cpf, data_nascimento },
      success: function(response) {
        window.location.href = '/formulario.html';
      },
      error: function(error) {
        $('#error-message').text('Dados de login inválidos');
      }
    });
  }); */

  
  function validaCPF(cpf) {
    function validaCPF(cpf) {
        cpf = cpf.replace(/[^\d]+/g, '');
  
        if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
          return false;
        }
  
        var sum = 0;
        var remainder;
  
        for (var i = 1; i <= 9; i++) {
          sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
        }
  
        remainder = (sum * 10) % 11;
  
        if (remainder === 10 || remainder === 11) {
          remainder = 0;
        }
  
        if (remainder !== parseInt(cpf.substring(9, 10))) {
          return false;
        }
  
        sum = 0;
  
        for (i = 1; i <= 10; i++) {
          sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
        }
  
        remainder = (sum * 10) % 11;
  
        if (remainder === 10 || remainder === 11) {
          remainder = 0;
        }
  
        if (remainder !== parseInt(cpf.substring(10, 11))) {
          return false;
        }
  
        return true;
      }
  
    return true; // Retorno temporário para teste
  }
  
