var boton = document.getElementById("botoncito");
boton.addEventListener("click",agregarLista); //agregarlista es una funcion

function agregarLista(e){
	var textArea = document.getElementById("textarea");
	if (textArea == null){
		alert("Ingresa Texto");
	}
	else{
		var textArea = document.getElementById("textarea");
		var listaUl = document.getElementById("listaUl");
		var lista = document.createElement("li");
		var check = document.createElement("input");
		check.setAttribute( "type", "checkbox");
		var spanTrash = document.createElement("span");
		spanTrash.classList.add("class","glyphicon glyphicon-trash");//llama al gliphycon
		lista.appendChild(check);
		lista.appendChild(textarea);
		lista.appendChild(spanTrash);
		listaUl.appendChild(lista);
	}
}

function quitarLi(){
	li=e.target.parentElement;
	li.parentElement.removeChild(li);

}









// para encontrar al li  del bote de basura traeme al evento 
// li=e.target.parentElement;
// li. parentElement.removeChild(li);
// parentElement
// (e) ya trae toda la informacion que le diste

// setAttribute ("type","checkbox");  //
// para saber de que tipo es el valor qu es checkbox, radius y texto