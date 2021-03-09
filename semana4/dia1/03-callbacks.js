function buscarPorDni(dni, fn){

    let rpta = "en blanco"

    setTimeout(function (){
        rpta = 'Jorge Zevallos';
        fn(rpta)
    }, 2000)

    return rpta;
}

buscarPorDni("47635332", function(nombre){
                            console.log(nombre);
});
