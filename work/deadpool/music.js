var sound = document.getElementById('music');
var play = document.getElementById('play');
var stop = document.getElementById('stop');

// Event
play.addEventListener("click", playMusic);
stop.addEventListener("click", stopMusic);

// play and pause
function playMusic(){
    if (sound.paused) {
        sound.play();
        play.innerHTML = "Pause";
        }
    else  {
        sound.pause(); 
        play.innerHTML = "Play";
        }
}

// stop
function stopMusic(){
    sound.pause();
    sound.currentTime = 0;
}