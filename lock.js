let a=[''];
let b= [2,8,0,6,2,0,0,3];
let c = ['']
console.log(b);
let count = 0;

function no0()
{
    a = a+ 0;
    console.log(a)
    document.getElementById("No0").style.backgroundColor=("green")
    
}


function no1()
{
    a = a+ 1;
    console.log(a)
    document.getElementById("No1").style.backgroundColor=("green")
}

function no2()
{
    a = a+ 2;
    console.log(a)
    document.getElementById("No2").style.backgroundColor=("green")
}
function no3()
{
    a = a+ 3;
    console.log(a)
    document.getElementById("No3").style.backgroundColor=("green")
}

function no4()
{
    a = a+ 4;
    console.log(a)
    document.getElementById("No4").style.backgroundColor=("green")
}
function no5()
{
    a = a+ 5;
    console.log(a)
    document.getElementById("No5").style.backgroundColor=("green")
}
function no6()
{
    a = a+ 6;
    console.log(a)
    document.getElementById("No6").style.backgroundColor=("green")
}
function no7()
{
    a = a+ 7;
    console.log(a)
    document.getElementById("No7").style.backgroundColor=("green")
}
function no8()
{
    a = a+ 8;
    console.log(a)
    document.getElementById("No8").style.backgroundColor=("green")
}
function no9()
{
    a = a+ 9;
    console.log(a)
    document.getElementById("No9").style.backgroundColor=("green")
}
function no11(){
    a = [''];
    c=[''];
    document.getElementById("No0").style.backgroundColor=("red")
    document.getElementById("No1").style.backgroundColor=("red")
    document.getElementById("No2").style.backgroundColor=("red")
    document.getElementById("No3").style.backgroundColor=("red")
    document.getElementById("No4").style.backgroundColor=("red")
    document.getElementById("No5").style.backgroundColor=("red")
    document.getElementById("No6").style.backgroundColor=("red")
    document.getElementById("No7").style.backgroundColor=("red")
    document.getElementById("No8").style.backgroundColor=("red")
    document.getElementById("No9").style.backgroundColor=("red")
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
   document.getElementById("body").style.backgroundColor="green";
   window.location.href="hall.html"
}
else{
    document.getElementById("body").style.backgroundColor="red";
    window.location.href="basement.html";
}
    
    

}




