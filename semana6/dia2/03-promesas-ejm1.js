const titulo = document.getElementById("titulo")
const listaTODOS = document.getElementById("listaTODOs")
titulo.innerText = "Cargando.."

console.log(axios);

axios.get("https://jsonplaceholder.typicode.com/todos")
.then((rpta) =>
{
    titulo.innerText = "Ya llegó el platillo volador"
    
    const {data} = rpta;
    data.forEach((ObjToDo) =>{
        const li = document.createElement("li");
        li.innerText = `${ObjToDo.title} - ${ObjToDo.completed ? 'completado' : 'incompleto'}`;
        listaTODOS.appendChild(li);
    })


    
    console.log(rpta);
})
.catch((error) => {
    console.log(error);
    titulo.innerText = "Tenemos problemas"
});


for (const n of [50,13,56,85]) {
    console.log(n);
}