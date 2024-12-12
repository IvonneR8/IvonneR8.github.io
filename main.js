var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});
// Comentario
typewriter.typeString(' Desarrolladora Frontend Jr.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Imagina, diseña, programa:')
    .pauseFor(2500)
    // Numero de caracteres que se borraran
    .deleteChars(26)
    .typeString('<strong> Hazlo realidad!</strong>')
    .pauseFor(2500)
    .start();