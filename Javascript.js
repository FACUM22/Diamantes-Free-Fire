// Inicializamos EmailJS
emailjs.init("LeJRfu9_PG4mkhiC3"); // ← reemplazá con tu Public Key de EmailJS

// Función que envía el correo
function comprar(producto) {
  emailjs.send("service_4yfy67q", "template_4a4hrys", { producto: producto })
    .then(function() {
      alert("Correo enviado con la compra de " + producto);
    })
    .catch(function(error) {
      alert("Error al enviar: " + JSON.stringify(error));
      console.error(error);
    });
}
