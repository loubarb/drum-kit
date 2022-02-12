const audio = document.querySelector("audio");
const key = document.querySelector(".key");
const playing = document.querySelector(".playing");
const keys = document.querySelectorAll(".key");

document.addEventListener("keydown", function (e) {
    if (e.code == 'KeyA') {
        audio.currentTime = 0;
        document.getElementById("clap").play();
    } else if (e.code == 'KeyS') {
        audio.currentTime = 0;
        document.getElementById("hihat").play();
    } else if (e.code == 'KeyD') {
        audio.currentTime = 0;
        document.getElementById("kick").play();
    } else if (e.code == 'KeyF') {
        audio.currentTime = 0;
        document.getElementById("openhat").play();
    } else if (e.code == 'KeyG') {
        audio.currentTime = 0;
        document.getElementById("boom").play();
    } else if (e.code == 'KeyH') {
        audio.currentTime = 0;
        document.getElementById("ride").play();
    } else if (e.code == 'KeyJ') {
        audio.currentTime = 0;
        document.getElementById("snare").play();
    } else if (e.code == 'KeyK') {
        audio.currentTime = 0;
        document.getElementById("tom").play();
    } else if (e.code == 'KeyL') {
        audio.currentTime = 0;
        document.getElementById("tink").play();
    } else {
        return false;
    }
});


