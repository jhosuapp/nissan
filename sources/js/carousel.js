$(document).ready(function(){

    $(".owl-carousel").owlCarousel({
        items : 1, //NUMERO DE ITEMS
        loop: true, // HACE AL CAROUSEL INFINITO
        margin: 30, //MARGEN ENTRE ELEMENTOS
        nav: true, //AGREGAR FLECHITAS
        // navText: ["anterior", "siguiente"], //CAMBIAR TEXTO DEL SIGUIENTE Y ANTERIOR
        autoplay: true, //AGREGAR AUTOPLAY
        autoplayTimeout: 10000, //TIEMPO DEL AUTOPLAY
        dots: true, //PARA OCULTAR O MOSTRAR LOS DOTS
        responsive: { //RESPONSIVE
            780:{
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

});
