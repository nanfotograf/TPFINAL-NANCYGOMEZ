//Efecto de cambio de imagen:
//mouseOver
let mainimg = document.getElementById('mainimg')
function mouseOver (){
    mainimg.src = "imagen/nandos.jpeg"

};
mainimg.addEventListener('mouseover', mouseOver);

//mouseOut
function mouseOut(){
    mainimg.src = "imagen/nan.jpeg"

};
mainimg.addEventListener('mouseout', mouseOut);

// Mostrar más información en la seccion de My Portfolio:
let saberMasUno = document.getElementById("saberMasUno");
let miBoton = document.createElement("button");

miBoton.innerText = "Saber más:";
miBoton.style.borderColor = "magenta";
miBoton.style.borderRadius= "3px";
miBoton.style.fontSize= "13px";

miBoton.addEventListener("click", function(){
    alert
}); 
saberMasUno.appendChild(miBoton);
//----------------------------------------
let saberMasDos =document.getElementById("saberMasDos");
let miBotonDos = document.createElement("button");

miBotonDos.innerText ="Saber más";
miBotonDos.style.borderColor = "magenta";
miBotonDos.style.borderRadius= "3px";
miBotonDos.style.fontSize= "13px";

miBotonDos.addEventListener("click", function(){
    alert
});
saberMasDos.appendChild(miBotonDos);
//----------------------------------------

let saberMasTres =document.getElementById("saberMasTres");
let miBotonTres = document.createElement("button");

miBotonTres.innerText ="Saber más";
miBotonTres.style.borderColor = "magenta";
miBotonTres.style.borderRadius= "3px";
miBotonTres.style.fontSize= "13px";
miBotonTres.addEventListener("click", function(){
    alert
});
saberMasTres.appendChild(miBotonTres);

//-------------------------------------------------

let saberMaCuatro =document.getElementById("saberMasCuatro");
let miBotonCuatro = document.createElement("button");

miBotonCuatro.innerText ="Saber más";
miBotonCuatro.style.borderColor = "magenta";
miBotonCuatro.style.borderRadius= "3px";
miBotonCuatro.style.fontSize= "13px";
miBotonCuatro.addEventListener("click", function(){
    alert
});
saberMasCuatro.appendChild(miBotonCuatro);

//-----------------------------------------------

let saberMasCinco =document.getElementById("saberMasCinco");
let miBotonCinco = document.createElement("button");

miBotonCinco.innerText ="Saber más";
miBotonCinco.style.borderColor = "magenta";
miBotonCinco.style.borderRadius= "3px";
miBotonCinco.style.fontSize= "13px";
miBotonCinco.addEventListener("click", function(){
    alert
});
saberMasCinco.appendChild(miBotonCinco);
//------------------------------------------------------


let saberMasSeis =document.getElementById("saberMasSeis");
let miBotonSeis = document.createElement("button");

miBotonSeis.innerText ="Saber más";
miBotonSeis.style.borderColor = "magenta";
miBotonSeis.style.borderRadius= "3px";
miBotonSeis.style.fontSize= "13px";
miBotonSeis.addEventListener("click", function(){
    alert
});
saberMasSeis.appendChild(miBotonSeis);

//Mensaje de enviado con "éxito" en el formulario:
document.getElementById('contactForm').addEventListener('submit', function(evento){
    evento.preventDefault();
  
    let nombre = document.getElementById('nombre').value;
    let number = document.getElementById('number').value;
    let email =  document.getElementById('email').value;
    let subjet = document.getElementById('subjet').value;
    let mensaje = document.getElementById('mensaje').value;

    if( !nombre || !number || !email || !subjet || !mensaje){
        document.getElementById('respuesta').style.color = 'magenta';
        document.getElementById('respuesta').innerText= '¡Mensaje enviado con éxito!';

    };
   
 
})

//Slider para las cards en la sección "What I Do":
let slider = document.querySelectorAll('.slider');
let tarjeta = document.querySelectorAll('.tarjeta');
let prevBtn = document.getElementById('prevBtn');
let nextBtn = document.getElementById('nextBtn');
let cardIndex = 0;

function sgtetTarjeta (){
    cardIndex = (cardIndex + 1) % tarjeta.length;
    slider.style.transform = `translateX(${-cardIndex * 310})`;
};

function tarjetaAnterior(){
    cardIndex = (cardIndex - 1 + tarjeta.length) % tarjeta.length;
    slider.style.transform = `translateX(${-cardIndex *310}px)`;
};
nextBtn.addEventListener('click ', sgtetTarjeta);
prevBtn.addEventListener('click ', tarjetaAnterior);