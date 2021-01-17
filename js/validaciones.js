$(window).ready(function(){
    var mensaje = $('#mensaje'),
        nombre = $('#nombre'),
        email = $('#email'),
        asunto = $('#asunto'),
        btnEnviar = $('#enviar');
        var alertaMensajes = $('#alerta-mensajes');

        //Detectar la orientación del dispositivo 
    $(window).on( "orientationchange", function( event ) {
        var width = screen.width,
            height = screen.height;
            if(width>=375&&width<=750)
        {
            modificacionHeader(width, height);
        }
    });
        //Funcion para modificar el header de forma dinamica
    function modificacionHeader(width, height){
            if(width>=375&&width<=425)
            {
                //alert('url("../img/fondo-pequeno.png")');
                $('#header').css({"background-size":width+'px'+' '+height+'px'},{"background-repeat":"no-repeat"});
             // {"background-image":"url('img/fondo-pequeno.png')"});
               // $('#header').css({"background-image":"url('img/fondo-pequeno.png')"});
               $('#header').css({"background-image":"url('img/iroman2.jpg')"});
                $('#header').css({"height":height-50});
            }
            else{
                if(width>425&&width<=750){
                    //alert(screen.width+'px'+' '+screen.height+'px');
                    $('#header').css({"background-size":width+'px'+' '+height+'px'},{"background-repeat":"no-repeat"});
                    $('#header').css({"background-image":"url('img/colores.jpg')"});
                    $('#header').css({"height":height});
                }
            }  
    }
    
    modificacionHeader(screen.width, screen.height);
    
        function validarMensaje(ul, mensaje,e)
        {
            if(mensaje.val()==''){
                li = $('<li></li>').attr({}).text("El campo del Mensaje vacio");
                ul.append(li);
                
                e.preventDefault();
            }
        }

        function validarNombre(ul, nombre,e)
        {
            if(nombre.val()==''){
                li = $('<li></li>').attr({}).text("El campo del Nombre esta vacio");
                ul.append(li);
                e.preventDefault();
            }
        }

        function validarEmail(ul, email,e)
        {
            if(email.val()==''){
                li = $('<li></li>').attr({}).text("El campo del Email esta vacio");
                ul.append(li);
                e.preventDefault();
            }
        }
        function validarAsunto(ul, asunto,e)
        {
            if(asunto.val()==''){
                li = $('<li></li>').attr({}).text("El campo del asunto esta vacio");
                ul.append(li);
                e.preventDefault();
            }
        }
        btnEnviar.on('click',function(e){
            $('#error').remove();
            var alertaMensajes = $('#alerta-mensajes');
            ul = $('<ul></ul>').attr({'id':'error'}).text("");
            alertaMensajes.append(ul);
           //validarCampos(mensaje,nombre,email,e);
           alertaMensajes.css('display','block');

           validarMensaje(ul, mensaje,e);
           validarNombre(ul,nombre,e);
           validarEmail(ul,email,e);
           validarAsunto(ul,asunto,e);
        });

        
});