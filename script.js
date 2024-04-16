document.addEventListener('DOMContentLoaded', function(){

  const imagenPrincipal = document.getElementById('imagenPrincipal');
  const botonCambiarImagen = document.getElementById('botonCambiarImagen');

  const listaImagenes = ['imgCarro01.jpg','imgCarro02.jpg','imgCarro03.jpg','imgCarro04.jpg'];
  let indiceActual = 0;

  botonCambiarImagen.addEventListener('click', function(){
    indiceActual = (indiceActual + 1) % listaImagenes.length;
    imagenPrincipal.src = listaImagenes[indiceActual];
  });

});