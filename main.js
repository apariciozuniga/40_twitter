
var boton = document.getElementById("botoncito");
boton.addEventListener("click",agregarLista); //agregarlista es una funcion

function agregarLista(){
	var textArea = document.getElementById("textarea").value;

	if (textArea == 0){
		alert("Ingresa Texto :!");
		return false ;
	}
	else{ 
		var textArea =document.createTextNode(textArea);
		var listUl = document.getElementById("listUl");
		var lista = document.createElement("li");
		var check = document.createElement("input");
		check.setAttribute( "type", "checkbox");
		var spanTrash = document.createElement("span");
		spanTrash.classList.add("fa", "fa-trash");//llama al gliphycon
		lista.appendChild(check); //check agrelo a lista
		lista.appendChild(textArea);//lista agregale textarea
		lista.appendChild(spanTrash);
		listUl.appendChild(lista);//a lista agregale una lista
		textarea.value=" ";

		spanTrash.onclick=function(){
			listUl.removeChild(lista);
		}
		check.onclick = function(){
		lista.classList.add("lista");
		};
	
	};
	
};









// para encontrar al li  del bote de basura traeme al evento 
// li=e.target.parentElement;
// li. parentElement.removeChild(li);
// parentElement
// (e) ya trae toda la informacion que le diste

// setAttribute ("type","checkbox");  //
// para saber de que tipo es el valor qu es checkbox, radius y texto