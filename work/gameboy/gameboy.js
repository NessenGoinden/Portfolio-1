var mario = document.getElementById('mario');
var sound = document.getElementById('mario_theme');

function on() {
    mario.style.display = "flex";
    sound.play(); 
}

function off() {
    mario.style.display = "none";
    sound.pause();

}