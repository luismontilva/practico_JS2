//Leer en HTML desde JS

const h1 = document.querySelector('h1') //De esta manera selecciono un selector en el archivo HTML.
//const p = document.querySelectorAll('p') //Esto me generara una lsita con todos los elementos que tengan la etiqueta p

//const parrafito = document.querySelector('.parrafito') //Podemos seleccionar tambien clases y id's
//const pid = document.querySelector('#id')
//const input = document.querySelector('input')

const input1 = document.querySelector("#calculo1") //El valor 1 del input, convirtiendolo a numero.
const input2 = document.querySelector("#calculo2") //El valor 2 del input, convirtiendolo a numero.
const btn = document.querySelector("#btnCalcular") //El boton que ejecutara el evento
const suma_impresa = document.querySelector(".resultado") //El selector que mostrara el resultado

// console.log(input.value); //Asi accedo a una de las propiedades de este elemento "value", la cual pudiera estar vacia de inicio. Pero si un usuario llena este campo "input", entonces generaria un valor, y se podria tomar.

// console.log({
//     h1,
//     parrafito,
//     pid,
//     p,
// })

//Escribir en HTML desde JS

//h1.innerHTML = 'Patito <br> feo' //Con esto agrego un valor a la etiqueta h1. Se pueden agregar etiquetas o texto.

// h1.innerHTML = 'Patito <br> feo'; //Agregara un valor a el selector en HTML. Lo entendera como texto y etiquetas.
// h1.innerText = 'Patito <br> feo'; //Agregara un valor a el selector en texto. Lo lo entendera como texto, no se pueden agregar etiquetas.

//Acceder o cambiar valores de atributos 

// console.log(h1.getAttribute('pantalla')); //Accedo y puedo extraer el valor del atributo pantalla en h1

// h1.setAttribute('pantalla', 'rojo'); //Modifico el valor de la etiqueta pantalla en el selector h1.

//Agregar, eliminar o verificar valores de clases

// h1.classList.add('rojo'); //De esta manera agrego valores al atributo class.
// h1.classList.remove('rojo'); //De esta manera elimino valores al atributo class.

// console.log(h1.classList.contains('rojo')); //Devuelve true o false en caso de tener o no el valor dado en class.

//Agregar o modificar caracteristicas del input

// input.value = '456'//agrego un valor por defecto al input
// input.placeholder = 'hola'//modifico el placeholder del input

//Crear un elemento desde 0 y agregarlo a un elemento ya existente (como hijo o dentro)

// const img = document.createElement('img'); //Creo la variable que contendra el elemento creado.
// img.setAttribute('src', 'https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg'); //Agrego un atributo que sera el 'source' del link donde esta la imagen

// pid.innerHTML = ""; //De esta manera vacio el contenido que tenia la etiqueta de antes.
// pid.append(img); //al selector ya existente <p> con el id 'id', le agregare adentro (como hijo) el elemento creado 'img'.
// pid.appendChild(img) //funciona igual a append.

//Si quiero reemplazar un elemento ya existente con uno nuevo.

// pid.replaceWith(img); //De esta manera puedo modificar y reemplazar una etiqueta antes seleccionada con el nuevo elemento.

//TRABAJANDO CON EVENTOS DESDE HTML

function btnOnClick(event) {

    // console.log({event});
    // event.preventDefault(); //Le pido al evento submit que no ejecute lo que por defecto deberia (recargar pagina para enviar formulario)
    suma = Number(input1.value) + Number(input2.value); //Se guardara la suma de los valores de esas variables (convertidos a numero)

    suma_impresa.innerText = "El resultado es: " + suma; //Imprimo en el selector asignado el resultado
}

//TRABAJANDO CON EVENTOS DESDE JAVASCRIPT (addEventListeners). LA MAS USADA

// btn.addEventListener('click', btnOnClick) // De esta manera agrego un escuchador de eventos a la etiqueta btn y luego defino la funcion que debera ejecutar si sucede (el metodo agregaria los parentesis)

//TRABAJANDO CON EVENTOS DE TIPO FORMS

// const form = document.querySelector("#form"); //Creo la conexion con el formulario

// form.addEventListener('submit', btnOnClick); //Se escuchara el evento de submit y se correra la funcion btnOnClick

//Tambien se puede cambiar el tipo de boton en HTML a "button" y asi se ejecutaria normal como un boton normal. (MAS FACIL)

btn.addEventListener('click', btnOnClick); //Se escuchara el evento de submit y se correra la funcion btnOnClick

//hola
