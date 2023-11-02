
//Ponemos la funcion que nos da la fecha en un DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  setYear();
});
//Seleccionamos los elementos HTML
const btnChecar = document.getElementById("btnChecar");
const textarea = document.getElementById("textarea");
const datosDiv = document.getElementById("datos");
const infos = document.getElementById("infos");
const setYear = () =>
  (document.getElementById("date").textContent = new Date().getFullYear());
//Click del botón
btnChecar.addEventListener("click", async () => {
  const tarjetas = textarea.value.split("\n").map((card) => card.split("|"));
  //Hacemos la solicitud
  try {
    const respuesta = await fetch("https://freeapi.stery.us/api/checarCC", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tarjetas),
    });
    const datos = await respuesta.json();
    //Limpiamos el textarea y el DIV
    datosDiv.innerHTML = "";
    textarea.value = "";
    let hayProblemas = true;
    //Aquí se manejan los errores.
    if (datos.error) {
      datosDiv.textContent = `Error: ${datos.error}`;
      hayProblemas = false;
    }
    if (hayProblemas) {
      //Si se cumple, mostramos los datos
      console.log(datos);
      for (const detalles in datos) {
        const tarjetas = datos[detalles];
        for (const tarjeta of tarjetas) {
          const resultado = `<p>
            ${detalles}:
            Tarjeta: ${tarjeta.ccNum},
            Mes: ${tarjeta.ccMes},
            Año: ${tarjeta.ccAnio},
            CCV: ${tarjeta.ccCodigo}
            </p>`;
          datosDiv.innerHTML += resultado;
        }
      }
    }
  } catch (error) {
    //cualquier error externo se mostrará en consola y en el HTML.
    console.error(`Error: ${error}`);
    infos.textContent = `ERROR: ${error}`;
    hayProblemas = false;
  }
});




 function loading() {
      document.querySelector('.ove').style.display = 'none';
    }

    // Simular tiempo de carga
    setTimeout(function() {
      // Llamar a la función para cerrar la animación
      loading();
    }, 3000); // Cambia el tiempo de espera a tu preferencia (en milisegundos)
    
 document.addEventListener('DOMContentLoaded', function() {
      document.querySelector('.square').addEventListener('click', function() {
        const checkmark = document.querySelector('.checkmark');
        const conElement = document.querySelector('.con');
        const textElement = document.querySelector('.text');
        const roundedRectangle = document.querySelector('.rounded-rectangle');
        const overlay1 = document.querySelector('.overlay1');
        const cont2 = document.querySelector('.cont2'); // Elemento para mostrar contenido web
        
        checkmark.style.animation = 'checkmarkAnimation 1s ease-in-out forwards';

        setTimeout(() => {
          checkmark.style.animation = '';
          conElement.style.display = 'none';
          textElement.style.display = 'none';
          roundedRectangle.style.display = 'none';
          overlay1.style.display = 'none';
          
          // Mostrar contenido web y aplicar la clase cont2
          cont2.style.display = 'block'; // O 'flex', según el caso
          cont2.classList.add('cont2');
        }, 3000);
      });
    });







document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('passwordInput');

    passwordInput.addEventListener('keyup', function(event) {
        const password = event.target.value;

        // Verificar si la contraseña es correcta (por ejemplo, "clave123")
        if (password === 'BSZ') {
            const overlay = document.querySelector('.overlay1');
            const overlayContent = document.querySelector('.overlay1-content');
            const inputField = document.querySelector('.overlay1 input');

            overlay.style.display = 'none'; // Ocultar el overlay
            overlayContent.style.display = 'none'; // Ocultar el contenido del overlay
            inputField.style.display = 'none'; // Ocultar el campo de entrada
        }
    });
});


// Obtener la dirección IP del usuario
const userIPElement = document.getElementById("userIP");

fetch("https://api64.ipify.org?format=json")
    .then(response => response.json())
    .then(data => {
        userIPElement.textContent = data.ip;
    })
    .catch(error => {
        console.error("Error al obtener la dirección IP:", error);
    });
// Obtener elementos del DOM
const profileImage = document.getElementById("profileImage");
const imageInput = document.getElementById("imageInput");

// Verificar si hay una imagen en el almacenamiento local y cargarla
const storedImage = localStorage.getItem("profileImage");
if (storedImage) {
    profileImage.src = storedImage;
    imageInput.style.display = "none";
}

// Manejar cambios en la imagen de perfil
imageInput.addEventListener("change", event => {
    const selectedImage = event.target.files[0];
    
    if (selectedImage) {
        const imageURL = URL.createObjectURL(selectedImage);
        profileImage.src = imageURL;
        
        // Guardar la imagen en el almacenamiento local
        localStorage.setItem("profileImage", imageURL);
        
        // Ocultar el botón de selección de imagen
        imageInput.style.display = "none";
    }
});



 // Función para copiar el texto al portapapeles
        function copyText() {
            // Obtener el texto dentro de las secciones
            var datosText = document.querySelector('#datos').innerText;
            var infosText = document.querySelector('#infos').innerText;

            // Combinar los textos
            var text = datosText + " " + infosText;

            // Crear un elemento de área de texto temporal para copiar el texto
            var tempTextArea = document.createElement('textarea');
            tempTextArea.value = text;
            document.body.appendChild(tempTextArea);

            // Seleccionar el texto dentro del elemento de área de texto
            tempTextArea.select();

            // Copiar el texto al portapapeles
            document.execCommand('copy');

            // Eliminar el elemento de área de texto temporal
            document.body.removeChild(tempTextArea);

            // Mostrar una alerta o mensaje indicando que el texto se ha copiado
            showAlert("Texto copiado al portapapeles!");
        }

        // Agregar evento de clic al botón "Copiar Texto"
        var copyButton = document.getElementById('copyButton');
        copyButton.addEventListener('click', copyText);

        // Función para mostrar una alerta
        function showAlert(message) {
            alert(message);
        }
