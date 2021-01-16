$(document).ready(function(){
    var facebook=$('#facebook'),
    instagram=$('#instagram'),
    twitter=$('#twitter'),
    github=$('#github'),
    linkedin=$('#linkedin'),
    whatsapp=$('#whatsapp'),
    correoElectronico=$('#correoElectronico'),
    inicio =$('#inicio'),
    blog =$('#blog'),
    conoceme =$('#conoceme'),
    proyectos =$('#proyectos'),
    herramientas =$('#herramientas'),
    blog =$('#blog'),
    contacto =$('#contacto');

    inicio.on('click',function(e){
        e.preventDefault();
        $(location).attr('href','index.html');
    });
     conoceme.on('click',function(e){
        e.preventDefault();
        $(location).attr('href','view/acerca-de.html');
    });

     proyectos.on('click',function(e){
        e.preventDefault();
        $(location).attr('href','view/proyectos-realizados.html');
    });
    
     herramientas.on('click',function(e){
        e.preventDefault();
        $(location).attr('href','view/lenguajes-y-herramientas.html');
    });

     blog.on('click',function(e){
        e.preventDefault();
        $(location).attr('href','view/blog.html');
    });
    contacto.on('click',function(e){
        e.preventDefault();
        $(location).attr('href','view/contacto.html');
    });
    facebook.on('click',function(e){
        e.preventDefault();
        $(location).attr('href','https://www.facebook.com/tfrc14/');
    });
    twitter.on('click',function(e){
        e.preventDefault();
        $(location).attr('href','https://twitter.com/tfrc14');
    });
    instagram.on('click',function(e){
        e.preventDefault();
        
    });
    github.on('click',function(e){
        e.preventDefault();
        $(location).attr('href','https://github.com/tfrc19');
    });
    linkedin.on('click',function(e){
        e.preventDefault();
        $(location).attr('href','https://www.linkedin.com/in/fernando-roque-colt-2a768313b/');
    });
    whatsapp.on('click',function(e){
        e.preventDefault();
    });
    correoElectronico.on('click',function(e){
        e.preventDefault();
        $(location).attr('href','mailto:telmo_ferc@hotmail.com');
    });
});