/* Funçao para conectar o banco de dados */
/*
const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres',
  host: 'projeto.csxr7bnvb6ng.us-east-2.rds.amazonaws.com',
  database: 'db_healthtime',
  password: 'teste123',
  port: 5432,
});
*/






/*Funçao do login */
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var birthdate = document.getElementById("birthdate").value;
    var cpf = document.getElementById("cpf").value;
  
    // Verifica se o usuário, senha, data de nascimento e CPF estão preenchidos
    if (username && password && birthdate && cpf) {
      // Validação do CPF
      if (!validaCPF(cpf)) {
        alert("CPF inválido. Por favor, verifique.");
        return;
      }
  
      // Validação da data de nascimento
      var currentDate = new Date();
      var selectedDate = new Date(birthdate);
  
      if (selectedDate >= currentDate) {
        alert("Data de nascimento inválida. Por favor, verifique.");
        return;
      }
  
      // Redireciona para a página "formulario.html" após o login ser bem-sucedido
      window.location.href = "formulario.html";
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  }
  
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
  