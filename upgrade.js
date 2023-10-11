clicks = 0;
upgrade = 1;
upgradePrice = 0;

function Increment() {
  clicks += upgrade;
  document.getElementById("Count").innerHTML = clicks;
  console.log(clicks);
  var sound = new Audio('SNORKER.mp3')//wav is also supported
  sound.play()//plays the sound
}

function UpgradeEnhanceClick() {
  if (clicks > upgradePrice) {
    if (upgrade === 1) {
      clicks -= upgradePrice;
      upgrade++;
      upgradePrice = upgradePrice * 2;
    }
    clicks -= upgradePrice;
    upgrade *= 2;
    upgradePrice = upgradePrice * 2;
  }
}
