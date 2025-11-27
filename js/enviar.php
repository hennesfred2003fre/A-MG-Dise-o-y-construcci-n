<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitizar entradas para evitar inyección
    $nombre = htmlspecialchars($_POST["nombre"]);
    $email = htmlspecialchars($_POST["email"]);
    $celular = htmlspecialchars($_POST["celular"]);
    $mensaje = htmlspecialchars($_POST["mensaje"]);

    // Cambia esto por tu correo real
    $destinatario = "tatianacarranza76@gmail.com";
    $asunto = "Nuevo mensaje desde el formulario de contacto";

    $contenido = "Has recibido un nuevo mensaje:\n\n";
    $contenido .= "Nombre: $nombre\n";
    $contenido .= "Correo: $email\n";
    $contenido .= "Celular: $celular\n";
    $contenido .= "Mensaje:\n$mensaje\n";

    $cabeceras = "From: $email\r\n";
    $cabeceras .= "Reply-To: $email\r\n";
    $cabeceras .= "X-Mailer: PHP/" . phpversion();

    if (mail($destinatario, $asunto, $contenido, $cabeceras)) {
        echo "<div class='mensaje-exito'>✅ ¡Mensaje enviado con éxito! Gracias por contactarnos.</div>";
    } else {
        echo "<div class='mensaje-error'>❌ Hubo un error al enviar el mensaje. Intenta de nuevo.</div>";
    }
} else {
    echo "Acceso no permitido.";
}
?>
