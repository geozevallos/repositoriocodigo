// Una clase
// La clase por lo general se crea con mayuscula

// Creando un constructor para ingredientes
function Ingrediente(_nombre, _cantidad, _unidadDeMedida){
    this.nombre = _nombre || "";
    this.cantidad = _cantidad || 0;
    this.unidadMedida = _unidadDeMedida || "";
}

function Receta() {
    this.nombre = "";
    // Ingredientes va a ser un arreglo de objetos
    // this.ingredientes = [
    //     {nombre: "", cantidad: 0, unidadMedida: ""},
    // ];
    // Un ingrediente tiene la estrucutra de la clase ingrediente
    this.ingredientes = [];
    this.tiempo = 0;
    this.tipo = "";
    // Las clases pueden tener funciones aunque no es frecuente
    this.info = function(){
        console.log(`El plato ${this.nombre} es un plato ${this.tipo} y su tiempo de preparación es de ${this.tiempo}`);
    }
}

let cebiche = new Receta();
cebiche.nombre = "Cebiche";
cebiche.tipo = "Marino";
cebiche.tiempo= 1;
// Esto es sin un constructor, sin embargo, se pueden dar una mala escritura: 
// cebiche.ingredientes.push(
//     {nombre: "Pescado", cantidad: 1, unidadMedida: "Kilogramos"},
//     {nombre: "Cebolla", cantidad: 2, unidadMedida: "Unidades"}
// )

// Acá ya especificamos con un constructor
cebiche.ingredientes.push(new Ingrediente("Pescado", 1, "Kilogramos"));
cebiche.ingredientes.push(new Ingrediente("Cebolla", 2, "Unidades"))
console.log(cebiche);
cebiche.info();

let chaufaDePollo = new Receta();
chaufaDePollo.nombre = "Chaufa de pollo";
chaufaDePollo.tipo = "Oriental";
chaufaDePollo.tiempo = 1.2;
console.log(chaufaDePollo);
chaufaDePollo.info();
