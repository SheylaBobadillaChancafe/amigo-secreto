// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigosAgregados = [];
let lista = document.getElementById('listaAmigos');


 

 function agregarAmigo() {


    let amigo = document.getElementById('amigo').value ;

    //Validando entrada
    if (amigo ==''){

        alert('Por favor, ingrese un nombre');
    }else {

        if (listaAmigosAgregados.includes(amigo)) {
            alert('Este amigo ya está en la lista');

        }else {
        listaAmigosAgregados.push(amigo); //Agregar el amigo a la lista
        limpiarCaja(); //Limpiar la caja de entrada
        mostrarLista(); //Actualizar la lista de amigos en la interfaz
        }
    }

 }



 function limpiarCaja() {
    document.getElementById('amigo').value ='';
 }



function mostrarLista() {

   limpiarLista ();

    for (let i = 0; i< listaAmigosAgregados.length; i++){

        const li = document.createElement('li'); // Crear un nuevo <li>
        li.textContent = listaAmigosAgregados[i]; // Establecer el texto del <li>
        lista.appendChild(li); // Agregar el <li> al <ul>
    }
        
}
   

function limpiarLista() {
    lista.innerHTML ='';
    console.log("Limpiando lista...")
}

function sortearAmigo() {
    if (listaAmigosAgregados.length>0) {

        limpiarLista();

        //Generar un índice aleatorio
        let numeroGenerado = Math.floor(Math.random()*listaAmigosAgregados.length);

        //Obtener el número sorteado
        let amigoGanador = listaAmigosAgregados[numeroGenerado];

        //Obtener el elemento de resultado en el DOM
        const listaGanador = document.getElementById('resultado');

        //Limpiar la lista de resultados
        listaGanador.innerHTML ='';


        //Mostrar el amigo sorteado en el DOM
       
        listaGanador.innerHTML= `<li> El amigo secreto ganador es: ${amigoGanador}</li>`;


    }else {
        alert('La lista de amigos está vacia, por favor ingrese un nombre');

    }
}



