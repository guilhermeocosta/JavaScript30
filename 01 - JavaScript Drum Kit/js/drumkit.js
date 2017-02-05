{
  const keys = document.querySelectorAll('.key'); // selects all .key elements
  keys.forEach(key => key.addEventListener('transitionend', removeTransition)); // listen for all transition end on keys node
  window.addEventListener('keydown', playSound); // listen for a keydown to call playSound function

  // play a sound according to the key pressed
  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`),
          key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if(!audio)
      return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  };

  // remove the class that brings transition to life when a key is pressed
  function removeTransition(e) {
    if(e.propertyName != 'transform')
      return;

    this.classList.remove('playing');
  };
};
