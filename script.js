//Validacion de formulario

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(event.target.elements);

  console.log(event.target.nombre.value);
  console.log(event.target.email.value);
  console.log(event.target.mensaje.value);

  const nombre = event.target.nombre.value;
  const email = event.target.email.value;
  const mensaje = event.target.mensaje.value;

  let msj = "";

  if (nombre.length < 3 || nombre.length > 30) {

    msj += "Nombre fuera de tamaño: debe contener entre 3 y 30 caracteres\n";
  }
  if (mensaje.length < 10 || mensaje.length > 80) {


    msj += "Mensaje fuera de tamaño: debe contener entre 10 y 80 caracteres\n";
  }
  if (
    (!email.endsWith(".com") && !email.endsWith(".es")) ||
    !email.includes("@")
  ) {
    console.log("Error validación: " + email);
    msj += "Error validación: " + email + "\n";
  }

  if (msj.length != 0) {
    alert(msj);
    let p = document.createElement("pre");
    let mensaje = document.createTextNode(msj);
    p.style.color = "#DD1C1A";
    p.style.fontSize = "16px";
    p.appendChild(mensaje);

    //document.getElementById("Contacto").appendChild(p);
  }
  else {

    alert("Formulario enviado con éxito");
    event.target.submit();
  }
});
