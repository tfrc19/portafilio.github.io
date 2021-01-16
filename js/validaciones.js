$(window).ready(function(){
    var mensaje = $('#mensaje'),
        nombre = $('#nombre'),
        email = $('#email'),
        asunto = $('#asunto'),
        btnEnviar = $('#enviar');
        

    var alertaMensajes = $('#alerta-mensajes');
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