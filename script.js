// aguarda o DOM estar pronto para executar scripts jQuery
$(document).ready(function(){

  $("#loginAluno").submit(function(event){
  
    var usuario = $("#inputUsuario").val()
    var senha = $("#inputSenha").val()

    // Testar se usuario e senha estao corretos
    if(usuario == "root" && senha == "1234"){

      //add classes CSS (alert) na DIV
      $("#mensagem").addClass("alert alert-success alert-dismissible fade show")
      
      $("#mensagem").removeClass("alert-warning")

      $("#mensagem").text("Usuário Logado").show().fadeOut(3000)

    }else{

      $("#mensagem").addClass("alert alert-warning alert-dismissible fade show")

      $("#mensagem").removeClass("alert-success")

      $("#mensagem").text("Usuário ou senha inválidos").show().fadeOut(3000)

      event.preventDefault() //bloqueia o evento de submit

    }



  })



})