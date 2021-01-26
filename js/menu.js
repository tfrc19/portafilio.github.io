
$(document).ready(function(){
    var  toggleicon = $('#toggle-icon'),
        toggleiconX = $('#toggle-icon-x');

    var inicio=$('#inicio'),
    dropdownId=$('#acerca-de'),
    blog=$('#blog'),
    contacto=$('#contacto');
    var ventana_alto = $(window).height(),
        ventana_ancho = $(window).width();
        /*if(ventana_ancho>700){
            $('#logo-flotante').css('width','5%');
        }
        else
        {
            $('#logo-flotante').css('width','20%');
        }*/
    $('#logo-flotante').css('bottom',0);

    toggleicon.on('click',function(e){
        toggleicon.css({'display':'none'});
       //$('#btn-navbar').append("<span class='toggle-icon-x' id='toggle-icon-x'>X</span>");
        toggleiconX.css({'display':'block'});
        toggleiconX.text('X');
        
    });
    $('#toggle-icon-x').on('click',function(e){
        toggleiconX.css({'display':'none'});
        toggleicon.css({'display':'block'});
    });
    
    //alert(ventana_alto);

    function filename(){
        var rutaAbsoluta = self.location.href;   
        var posicionUltimaBarra = rutaAbsoluta.lastIndexOf("/");
        var rutaRelativa = rutaAbsoluta.substring( posicionUltimaBarra + "/".length , rutaAbsoluta.length );
        return rutaRelativa;  
    }
    
    /*$(inicio).on('click',function(e){
        location.href("../index.html");
        e.preventDefault();
    });
    $(dropdownId).on('click',function(e){
        
        e.preventDefault();
        
    });
    $(blog).on('click',function(e){
        location.href("../view/blog.html");
        e.preventDefault();
    });
    $(contacto).on('click',function(e){
        location.href("../view/contacto.html");
        e.preventDefault();
    });*/

    /*
    if(filename()=='index.html'){
        inicio.addClass("text-light"); 
        
        alert("Estas en el index.html");       
    }

    if(filename()=='blog.html'){
        blog.addClass("text-light"); 
        
        alert("Estas en el blog.html");       
    }*/
});
