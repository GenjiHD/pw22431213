let elemento = document.querySelector("#elemento");
let agregar = document.querySelector("#agregar");
let lista = document.querySelector("#listadinamica");
elemento.focus();

agregar.addEventListener("click",() => {
    if(elemento.value.trim() != ""){
        let nuevoelemento = document.createElement("li");
        nuevoelemento.innerText = elemento.value;
        lista.appendChild(nuevoelemento);
        elemento.value = "";
        elemento.focus();
    }
}); 

elemento.addEventListener("keydown",(e) => {
    if(e.key == "Enter"){
        agregar.click();
    }
});

// Arrastrar y soltar (drag and drop)
let arrastrar = document.querySelector("#arrastra");
let zonasoltar = document.querySelector("#zonasoltar");

arrastrar.addEventListener("dragstart", function(e){
    this.style.border = "5px solid red";
});

zonasoltar.addEventListener("dragover",function(e){
    // Olvide su funcion principal
    event.preventDefault();
});
zonasoltar.addEventListener("drop", function(e){
    arrastrar.style.border = "none";
    arrastrar.style.display = "block";
    this.append(arrastrar);
});