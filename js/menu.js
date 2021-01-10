/*$(document).ready(function(){
    var inicio=$('#inicio'),
        dropdownId=$('#acerca-de'),
        blog=$('#blog'),
        contacto=$('#contacto');

        $('#')
    $('#inicio').on('click',function(e){
      alert("Hola");  
      e.preventDefault();
      $('#inicio').addClass('activo');
    });

    $('#blog').on('click',function(e){
        alert("Hola");  

       // $('#blog').addClass('activo');
       // $('#blog').css('color','#cccccc');
        $('#blog').addClass('text-light');
        //$("#parrafo").css("color", "#000000");
        e.preventDefault();
      });
});*/

$(document).ready(function(){
    var inicio=$('#inicio'),
    dropdownId=$('#acerca-de'),
    blog=$('#blog'),
    contacto=$('#contacto');

    function filename(){
        var rutaAbsoluta = self.location.href;   
        var posicionUltimaBarra = rutaAbsoluta.lastIndexOf("/");
        var rutaRelativa = rutaAbsoluta.substring( posicionUltimaBarra + "/".length , rutaAbsoluta.length );
        return rutaRelativa;  
    }

  
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
