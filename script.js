const keys = document.querySelectorAll(".key");

document.addEventListener("keydown", function(e) {
    const audio = document.querySelector(`audio[code="${e.code}"]`);
    const key = document.querySelector(`.key[code="${e.code}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
})

function removeTransition (e) {
    if (e.propertyName !== "transform") {
        return
    }
    this.classList.remove("playing"); //this = 'key'
};


keys.forEach(key => key.addEventListener("transitionend", removeTransition));