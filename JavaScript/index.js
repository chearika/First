const body = document.body;
const h1 = document.getElementById("logo");
const array_h5 = document.getElementsByTagName("h5");

function changeMode(){
    body.classList.toggle("blackMode");
    h1.classList.toggle("modeColor");
    for(i = 0; i < array_h5.length ; i++){
        array_h5[i].classList.toggle("modeColor");
    }
}