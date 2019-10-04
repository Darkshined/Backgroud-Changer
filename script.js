let h3 = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 =document.querySelector(".color2");
let  body = document.getElementById("bod");


function colorchanger(event){

    body.style.background = "linear-gradient(90.1deg ," + color1.value + " 10% , " + color2.value +" 84.1% )";

    h3.textContent= body.style.background + ";";

}

color1.addEventListener("input",colorchanger);
color2.addEventListener("input" , colorchanger);


/*color1.addEventListener("input", function(){
   
    body.style.background = "linear-gradient(90.1deg ," + color1.value + " 10% , " + color2.value +" 84.1% )";



})*/

