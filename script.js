//Display an alert whenever a city is clicked in the top nav-bar
function loading(){
    alert("Loading weather report...")
}

//remove the cookie bar when accept is clicked
function hide(){
    var bar=document.querySelector(".cookie-bar");
    bar.remove();
}

//stores all temps in Celsius and Fahrenheit 
var tempsC=[24,18,27,19,21,16,26,21];
var tempsF=[75,65,80,66,69,61,78,70];

//assigns variables to the temps on the html
var a=document.querySelector("#h1")
var b=document.querySelector("#l1")
var c=document.querySelector("#h2")
var d=document.querySelector("#l2")
var e=document.querySelector("#h3")
var f=document.querySelector("#l3")
var g=document.querySelector("#h4")
var h=document.querySelector("#l4")

//function changes text on page between celsius and fahrenheit
function changeScale(element){
    //changes each vaule from celsius to fahrenheit
    //by replacing the text with the corresponding value from tempsF
    if(element.value=="fahr"){
    a.innerText = tempsF[0]+"°";
    b.innerText = tempsF[1]+"°";
    c.innerText = tempsF[2]+"°";
    d.innerText = tempsF[3]+"°";
    e.innerText = tempsF[4]+"°";
    f.innerText = tempsF[5]+"°";
    g.innerText = tempsF[6]+"°";
    h.innerText = tempsF[7]+"°";
    }

    //changes each value from fahrenheit to celsius
        //by replacing the text with the corresponding value from tempsC
    if(element.value=="cel"){
        a.innerText = tempsC[0]+"°";
        b.innerText = tempsC[1]+"°";
        c.innerText = tempsC[2]+"°";
        d.innerText = tempsC[3]+"°";
        e.innerText = tempsC[4]+"°";
        f.innerText = tempsC[5]+"°";
        g.innerText = tempsC[6]+"°";
        h.innerText = tempsC[7]+"°";
        }
}