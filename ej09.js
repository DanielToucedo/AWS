
//Pongo evento al label

let captcha=document.getElementById("captcha");
captcha.addEventListener("mouseover",mostrar)
captcha.addEventListener("mouseout",noMostrar)

let botonLogin=document.getElementsByName("btnLogin")[0].addEventListener("click",login);
function mostrar(){
    //Quito el style hidden

    document.getElementById("code").style.visibility = "visible";
    
    //Cada vez que se pase por encima de captcha genero un captcha de 4 digitos
    const number = random(1000, 9999);//genero numero de 4 cifras entre el 1000 y el 9999

    document.getElementById("code").textContent=number ;

    
}

function noMostrar(){
    document.getElementById("code").style.visibility = "hidden";
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  function login(event){
  //Compruebo si el captcha es correcto

  
 
  if(document.getElementById("verify").value!=document.getElementById("code").textContent)
  {
    event.preventDefault();
    alert("captcha incorrecto");
  }
   

    
  }