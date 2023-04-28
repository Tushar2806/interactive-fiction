var foo = new p5.Speech();
function slideright()
{
    let a = document.getElementById("sidebar1");

  a.style.animation=("slide 2s forwards");
 a.style.webkitAnimationDelay=("0s");
 document.getElementById("key").style.color=("white")
 


}
function nextpage(){
    window.location.href="hall.html";

}

function die()
{
    window.location.href="die.html";
}


function setup() {
  noCanvas();
 
   foo.listVoices();
}

function draw(){

}

function playSound(){



    foo.setLang('en-US');
    foo.setVoice('Microsoft Michelle Online (Natural) - English (United States)');
    foo.setVolume(10);
    foo.setRate(0.80);
    foo.speak('you fell into the basement.Hover around to find hints and clues on the page and get out of here.');

}
function hover(){
 document.getElementsByClassNames('text').style

}