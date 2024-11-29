let musica;

function preload(){
  musica = loadSound("musiquinha.mp3")
}

function setup(){
  musica.play();
  musica.loop();
}