let a=[''];
let b= [2,8,0,6,2,0,0,3];
let c = ['']
console.log(b);
let count = 0;

var foo = new p5.Speech();

function setup() {
  noCanvas();
 
   foo.listVoices();
}

function draw(){

}

function no0()
{
    a = a+ 0;
    console.log(a)
    document.getElementById("no0").style.backgroundColor=("green");

   

        foo.setLang('en-US');
        foo.setVoice('Microsoft Michelle Online (Natural) - English (United States)');
        foo.setVolume(10);
        foo.setRate(1.05);
        foo.speak('0');
          
       
    
}


function no1()
{   
    
    a = a+ 1;
    console.log(a)
    document.getElementById("no1").style.backgroundColor=("green");
       
        foo.setLang('en-US');
        foo.setVoice('Microsoft Michelle Online (Natural) - English (United States)');
        foo.setVolume(10);
        foo.setRate(1.05);
        foo.speak('1');
    
}

function no2()
{
    a = a+ 2;
    console.log(a)
    document.getElementById("no2").style.backgroundColor=("green")
        
        foo.setLang('en-US');
        foo.setVoice('Microsoft Michelle Online (Natural) - English (United States)');
        foo.setVolume(10);
        foo.setRate(1.05);
        foo.speak('2');

}
function no3()
{
    a = a+ 3;
    console.log(a)
    document.getElementById("no3").style.backgroundColor=("green")
    foo.setLang('en-US');
        foo.setVoice('Microsoft Michelle Online (Natural) - English (United States)');
        foo.setVolume(10);
        foo.setRate(1.05);
        foo.speak('3');
}

function no4()
{
    a = a+ 4;
    console.log(a)
    document.getElementById("no4").style.backgroundColor=("green")
   
        foo.setLang('en-US');
        foo.setVoice('Microsoft Michelle Online (Natural) - English (United States)');
        foo.setVolume(10);
        foo.setRate(1.05);
        foo.speak('4');
}
function no5()
{
    a = a+ 5;
    console.log(a)
    document.getElementById("no5").style.backgroundColor=("green")
        foo.setLang('en-US');
        foo.setVoice('Microsoft Michelle Online (Natural) - English (United States)');
        foo.setVolume(10);
        foo.setRate(1.05);
        foo.speak('5');
}
function no6()
{
    a = a+ 6;
    console.log(a)
    document.getElementById("no6").style.backgroundColor=("green")
        
        foo.setLang('en-US');
        foo.setVoice('Microsoft Michelle Online (Natural) - English (United States)');
        foo.setVolume(10);
        foo.setRate(1.05);
        foo.speak('6');
}
function no7()
{
    a = a+ 7;
    console.log(a)
    document.getElementById("no7").style.backgroundColor=("green")
      
        foo.setLang('en-US');
        foo.setVoice('Microsoft Michelle Online (Natural) - English (United States)');
        foo.setVolume(10);
        foo.setRate(1.05);
        foo.speak('7');
}
function no8()
{
    a = a+ 8;
    console.log(a)
    document.getElementById("no8").style.backgroundColor=("green")
        
        foo.setLang('en-US');
        foo.setVoice('Microsoft Michelle Online (Natural) - English (United States)');
        foo.setVolume(10);
        foo.setRate(1.05);
        foo.speak('8');
}
function no9()
{
    a = a+ 9;
    console.log(a)
    document.getElementById("no9").style.backgroundColor=("green")
       
            foo.setLang('en-US');
        foo.setVoice('Microsoft Michelle Online (Natural) - English (United States)');
        foo.setVolume(10);
        foo.setRate(1.05);
        foo.speak('9');
}
function no11(){
    a = [''];
    c=[''];
    document.getElementById("no0").style.backgroundColor=("black")
    document.getElementById("no1").style.backgroundColor=("black")
    document.getElementById("no2").style.backgroundColor=("black")
    document.getElementById("no3").style.backgroundColor=("black")
    document.getElementById("no4").style.backgroundColor=("black")
    document.getElementById("no5").style.backgroundColor=("black")
    document.getElementById("no6").style.backgroundColor=("black")
    document.getElementById("no7").style.backgroundColor=("black")
    document.getElementById("no8").style.backgroundColor=("black")
    document.getElementById("no9").style.backgroundColor=("black")
    document.getElementById("body").style.backgroundColor=("black")

}


function no10()
{
  for(let i = 0 ; i<a.length;i++)
  {
    let number = a[i];
   
  
    if (number ==b[i])
        {
         c[i] = "true";
        }
    else
        {
          c= c + "false";
        }  
  }
  console.log(c)
  console.log(c[2])


  for(let i = 0;i<c.length;i++){
    if(c[i]== "true")
    {
        count = count + 1;
    }
}
if ( count==8)
{
    foo.setLang('en-US');
    foo.setVoice('Microsoft Michelle Online (Natural) - English (United States)');
    foo.setVolume(10);
    foo.setRate(0.80);
    foo.speak('Right password');
    
   document.getElementById("body").style.backgroundColor="green";
   window.location.href="hall.html"
}
else{
    document.getElementById("body").style.backgroundColor="red";
    
    
    
    
    foo.setLang('ja');
    foo.setVoice('Microsoft Keita Online (Natural) - Japanese (Japan)');
    foo.setVolume(10);
    foo.setRate(0.05);
    foo.setPitch(0.01);
    foo.speak(' 今死ぬ');

    document.getElementById("body").style.backgroundColor="red";
    
    window.location.href="basement.html";
    
  
    
}
    
    

}




