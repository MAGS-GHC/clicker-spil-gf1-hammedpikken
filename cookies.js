clicks = 0;
function Increment() {
  clicks++;
  document.getElementById("Count").innerHTML = clicks;
  console.log(clicks);
  var snd = new Audio('sound_file_name.mp3')//wav is also supported
  snd.play()//plays the sound
}

