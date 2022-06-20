$(document).ready(function(){

    $(".owl-carousel").owlCarousel({
        items : 1, //NUMERO DE ITEMS
        loop: false, // HACE AL CAROUSEL INFINITO
        margin: 30, //MARGEN ENTRE ELEMENTOS
        nav: true, //AGREGAR FLECHITAS
        // navText: ["anterior", "siguiente"], //CAMBIAR TEXTO DEL SIGUIENTE Y ANTERIOR
        autoplay: false, //AGREGAR AUTOPLAY
        autoplayTimeout: 5000, //TIEMPO DEL AUTOPLAY
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
