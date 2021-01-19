$(document).ready(function(){
    $('.nombre').hide();
    //$('#mensajes').hide();
    $('#contenidoMenu').hide();
    $('#contenidoMenu').show(2000);
       // $('.textos').show(1000);
        $('.nombre').show(2500);
        $('#mensajes').show(1000);
    $('#contanto-social').hide();
       
    $('#mostrar-contacto-social').on('click',function(e){
        e.preventDefault();
        $('#contanto-social').show(2000);
        $('#mostrar-contacto-social').hide(1000);
    })
});