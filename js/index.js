window.addEventListener("keydown", teclado);
window.addEventListener("keyup", teclado);
const NAVE= document.querySelector(".nave");
let y=0;
let subir=false;

function teclado(e) {
    const TECLA=e.key;
    (TECLA==="Enter") && (e.type==="keydown")
    ? combustion()
    : NAVE.src="img/nave1.png";

    (TECLA==="ArrowUp" && subir) && (NAVE.style.bottom=`${y+=10}px`)
}

function combustion(){
    NAVE.src="img/nave2.png"
    subir=true;
}