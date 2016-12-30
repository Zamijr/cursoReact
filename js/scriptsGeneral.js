/*Jquery*/
$(document).ready(function(){
    $( "#contenidoPrincipal" ).load( "paginas/layoutHTML5.html" );
    
    $('#layoutHTML5').click(function(){
        $( "#contenidoPrincipal" ).load( "paginas/layoutHTML5.html" );
    });
    $('#textoHTML5').click(function(){
        $( "#contenidoPrincipal" ).load( "paginas/manejoTextoHTML5.html" );
    });
    $('#bloqueLinea').click(function(){
        $( "#contenidoPrincipal" ).load( "paginas/bloqueLinea.html" );
    });

}); 



/*Vanilla js*/