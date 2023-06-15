/* Função para mostrar o exame */

$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    var nome = $('#nome').val();
    var dataNasc = $('#dataNasc').val();
    var cpf = $('#cpf').val();
    var medico = $('#medico').val();
    var metodo = $('#metodo').val();
    var data_coleta = $('#data_coleta').val();
    var hemacias = $('#hemacias').val();
    var hemoglobina = $('#hemoglobina').val();
    var hematocrito = $('#hematocrito').val();
    var vcm = $('#v_c_m').val();
    var hcm = $('#h_c_m').val();
    var chcm = $('#c_h_c_m').val();
    var rdw = $('#rdw').val();
    var leucocitos = $('#leucocitos').val();
    var bastonetes = $('#bastonetes').val();
    var segmentados = $('#segmentados').val();
    var eosinofilos = $('#eosinofilos').val();
    var linfocitos = $('#linfocitos').val();
    var monocitos = $('#monocitos').val();
    var plaquetas = $('#plaquetas').val();
    var vpm = $('#vpm').val();

    var dados = {
      nome: nome,
      dataNasc: dataNasc,
      cpf: cpf,
      medico: medico,
      metodo: metodo,
      data_coleta: data_coleta,
      hematocrito: hematocrito,
      vcm: vcm,
      hcm: hcm,
      chcm: chcm,
      rdw: rdw,
      leucocitos: leucocitos,
      hemacias: hemacias,
      hemoglobina: hemoglobina,
      bastonetes: bastonetes,
      segmentados:segmentados,
      eosinofilos: eosinofilos,
      linfocitos:linfocitos,
      monocitos: monocitos,
      plaquetas: plaquetas,
      vpm: vpm,
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





