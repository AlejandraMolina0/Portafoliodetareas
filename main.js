var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Hola, soy  <strong>Alejandra Molina.</strong>')
    .pauseFor(2500)
    .deleteAll()
    .start();