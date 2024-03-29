(() => {
  function playDrumKitSound(event) {
    // select the corredponding audio element and make it play
    let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);

    if (!audio) {
      return;
    } //return stops code execution

    // rewind audio on every click and make it play
    audio.currentTime = 0;
    audio.play();

    // grab the div and animate it
    let key = document.querySelector(`div[data-key="${event.keyCode}"]`);
    key.classList.add("playing");
  }

  function removePlayingClass(event) {
    if (event.propertyName !== "transform") {
      return;
    } else {
      // remove the playing class here from the active div
      event.target.classList.remove("playing");
    }
  }

  const keys = Array.from(document.querySelectorAll(".keys"));

  keys.forEach((key) =>
    key.addEventListener("transitionend", removePlayingClass)
  );

  window.addEventListener("keydown", playDrumKitSound);
})();
