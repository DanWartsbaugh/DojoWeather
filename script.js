//Display an alert whenever a city is clicked in the top nav-bar
function loading(){
    alert("Loading weather report...")
}

//remove the cookie bar when accept is clicked
function hide(){
    var bar=document.querySelector(".cookie-bar");
    bar.remove();
}

//Selects all temps and converts them between celsius and fahrenheit
function convert(element){
    //selects all temps
    var temps=document.querySelectorAll(".tempNum");
    //applies action to each item
    temps.forEach((item) => {
        //convert to fahrenheit by applying conversion formula and replacing text
        if(element.value=="fahr")
        item.innerText=Math.round(item.innerText*1.8+32);

        //convert to celsius by applying conversion formula and replacing text
        if(element.value=="cel")
        item.innerText = Math.round((item.innerText-32)*.5556)
    })
        
    
}