$(document).ready(function () {

        var menu = $('#menu');
        var navbar = $('navbar');
        //var menu =$('#navid');
        var origOffsetY = menu.offset().top;

        function scroll() {
            if ($(window).scrollTop() >= origOffsetY) {
                $('#menu').addClass('sticky');
                $('.content').addClass('menu-padding');
                $('#navbar').addClass('fixed-top');
                $('#dow-up').css("display","none");
            } else {
                $('#menu').removeClass('sticky');
                $('.content').removeClass('menu-padding');
                $('#navbar').removeClass('fixed-top');
                $('#dow-up').css("display","block");
            }




        }
        /*
        function scroll(){
                if ($(window).scrollTop() >= origOffsetY) {
                $('#navid').addClass('sticky');
                $('.content').addClass('menu-padding');
            } else {
                $('#navid').removeClass('sticky');
                $('.content').removeClass('menu-padding');
            }
            }*/

        document.onscroll = scroll;

    });