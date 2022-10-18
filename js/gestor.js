"use strict";

var doc = window.document;

function cuentaElementos(elemento) { //Función para obtener el número de un tipo de elemento en un HTML.
    let elementos = doc.querySelectorAll(elemento);
    return elementos.length;
}

function añadir() {
    let textarea = doc.querySelector("#tareas textarea");
    let tarea = doc.createElement("div");
    let texto = textarea.value;
    tarea.setAttribute("class","tarea");
    let id = "tarea"+cuentaElementos(".tarea");
    tarea.setAttribute("id",id);
    tarea.innerHTML=`<p>${texto}</p>
    <p class="botones">
      <input type="button" value="Borrar" class="del" onclick='borrar("${id}")'/>
      <input type="button" value="Acabar" class="end" onclick='acabar("${id}")'/>
    </p>`;
    doc.getElementById("pendientes").appendChild(tarea);
}

function borrar(id){
   doc.getElementById(id).remove();
}

function acabar(id) {
    let acabado = doc.getElementById(id);
    acabado.setAttribute("class","acabada");
    let nuevaId = "tarea"+cuentaElementos(".acabada");
    acabado.setAttribute("id",nuevaId);
    let arch = doc.querySelector("#"+nuevaId+" .del");
    arch.setAttribute("value","Archivar");
    arch.setAttribute("onclick","archivar('"+nuevaId+"')");
    let volv = doc.querySelector("#"+nuevaId+" .end");
    volv.setAttribute("value","Volver");
    volv.setAttribute("onclick","volver('"+nuevaId+"')");
    doc.getElementById("acabadas").appendChild(acabado);
}

function volver(id) {
    let acabado = doc.getElementById(id);
    acabado.setAttribute("class","tarea");
    let nuevaId = "tarea"+cuentaElementos(".tarea");
    acabado.setAttribute("id",nuevaId);
    let arch = doc.querySelector("#"+nuevaId+" .del");
    arch.setAttribute("value","Borrar");
    arch.setAttribute("onclick","borrar('"+nuevaId+"')");
    let volv = doc.querySelector("#"+nuevaId+" .end");
    volv.setAttribute("value","Acabar");
    volv.setAttribute("onclick","acabar('"+nuevaId+"')");
    doc.getElementById("pendientes").appendChild(acabado);
}


