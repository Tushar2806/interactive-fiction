function topage2(){
    window.location.href="enterance.html"
}

var foo = new p5.Speech();

function setup() {
  noCanvas();
 
   foo.listVoices();
}

function draw(){

}

function playSound() {

    foo.setLang('ja');
    foo.setVoice('Microsoft Keita Online (Natural) - Japanese (Japan)');
    foo.setPitch(0.001)
    foo.setVolume(6);
    foo.setRate(0.75);
    foo.speak("タイムマシンへようこそ");
      
    }