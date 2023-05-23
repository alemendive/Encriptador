const botonEncriptar = document.getElementById("boton-encriptar");
botonEncriptar.addEventListener("click", validar);

const botonDesencriptar = document.getElementById("boton-desencriptar");
botonDesencriptar.addEventListener("click", validarDesencriptado);



function encriptar(mensaje) {
    let reemplazos = {
      e: "enter",
      i: "imes",
      a: "ai",
      o: "ober",
      u: "ufat"
    };
  
    let encriptado = mensaje.split('').map(caracter => reemplazos[caracter] || caracter).join('');
    return encriptado;
  }


  function desencriptar(mensaje) {
    let reemplazos = {
      enter: "e",
      imes: "i",
      ai: "a",
      ober: "o",
      ufat: "u"
    };
  
    let desencriptado = mensaje;
    Object.keys(reemplazos).forEach(reemplazo => {
      while (desencriptado.includes(reemplazo)) {
        desencriptado = desencriptado.replace(reemplazo, reemplazos[reemplazo]);
      }
    });
  
    return desencriptado;
  }


function validar() {
    let mensajeinicial = document.getElementById("mensaje").value;
    let regexp = /[A-ZáéíóúÁÉÍÓÚñÑüÜ]/;
    if (regexp.exec(mensajeinicial)) {
        const regla = document.getElementById("reglas");
        regla.style.color = "red";
    } else {
        let mensajeEncriptado = encriptar(mensajeinicial);
        let imagen = document.getElementById("antes-respuesta");
        let respuestaencriptado = document.getElementById("mih1");
        let botonCopia = document.getElementById("boton-copia");
        let regla = document.getElementById("reglas");
        regla.style.color = "#fafafa";
        imagen.style.display = "none";
        respuestaencriptado.style.display = "block";
        document.getElementById("mih1").innerHTML = mensajeEncriptado;
        botonCopia.style.display = "block";
        document.getElementById("respuesta").scrollIntoView();
    }
}

function validarDesencriptado() {
    let mensajeinicial = document.getElementById("mensaje").value;
    let regexp = /[A-ZáéíóúÁÉÍÓÚñÑüÜ]/;
    if (regexp.exec(mensajeinicial)) {
        let regla = document.getElementById("reglas");
        regla.style.color = "red";
    } else {
        let mensajeDesencriptado = desencriptar(mensajeinicial);
        document.getElementById("mih1").innerHTML = mensajeDesencriptado;
        /*-------------------------*/
        let regla = document.getElementById("reglas");
        regla.style.color = "#fafafa";
        imagen.style.display = "none";
        document.getElementById("respuesta").scrollIntoView();
    }
}

function copiarAlPortapapeles() {
    let mih1 = document.getElementById("mih1");
    let texto = mih1.textContent; 
  
    // Crear elemento input y configurar propiedades
    let input = document.createElement("input");
    input.setAttribute("readonly", true);
    input.value = texto;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
  
    // Actualizar el texto y estilo del botón de copia
    let botonCopia = document.getElementById("boton-copia");
    botonCopia.innerHTML = "¡Texto copiado!";
    botonCopia.style.color = "#00a2ff";
    botonCopia.style.borderColor = "#00a2ff";
    botonCopia.style.fontWeight = "900";
  
    setTimeout(function () {
      botonCopia.innerHTML = "Copiar";
      botonCopia.style.color = "#C5C5C5";
      botonCopia.style.borderColor = "#C5C5C5";
    }, 800);
  }
