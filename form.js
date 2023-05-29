/* Script relacionado as opçoes de exame*/

/* Este é o script referente ao formulario do hemograma*/
$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    var nome = $('#nome').val();
    var dataNasc = $('#dataNasc').val();
    var cpf = $('#cpf').val();
    var hemacias = $('#hemacias').val();
    var hemoglobina = $('#hemoglobina').val();

    var dados = {
      nome: nome,
      dataNasc: dataNasc,
      cpf: cpf,
      hemacias: hemacias,
      hemoglobina: hemoglobina,
    };

    var qrCode = new QRCode(document.getElementById("qrcode"), {
      text: JSON.stringify(dados),
      width: 200,
      height: 200,
      colorDark : "#000000",
      colorLight : "#ffffff",
      correctLevel : QRCode.CorrectLevel.H
    });
  });
});
//Este código usa jQuery para capturar o envio do formulário e evitar que a página seja recarregada. Em seguida, ele coleta as informações do formulário e as coloca em um objeto dados. O código QR é gerado usando a biblioteca qrcode.js. Ele usa o objeto dados como texto e é exibido no elemento div com o id "qrcode". O código QR tem 200x200 pixels e usa a correção de nível H.

//Quando o usuário envia o formulário, o código QR é gerado e exibido na página, contendo as informações fornecidas pelo usuário. O usuário pode, então, fazer o download ou imprimir o código QR para usá-lo como desejar.






