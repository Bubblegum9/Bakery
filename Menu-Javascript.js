< html >
    <
    script >

    var menu = document.getElementById("snack-menu");


var img = document.getElementById("Sandwich");


var span = document.getElementsByClassName("close")[0];


img.onclick = function() {
    menu.style.display = "block";
}


span.onclick = function() {
    menu.style.display = "none";
}


window.onclick = function(event) {
        if (event.target == menu) {
            menu.style.display = "none";
        }
    } <
    /script> 
div id = "salad-menu"
class = "menu" >

    <
    div class = "menu-content"
style = "text-align:center" >
    <
    span class = "close" > & times; < /span> <
center > < div class = "ins"
style = "border: dashed;background-color: beige;width: 700px;height: 800px; text-align: center;float: center;font-family: Amatic Sc;sans-serif;color: black;font-size:20px;line-height: 5px;border-radius:15px;  " >
    <
    style > .ins h4 { font - size: 25 px;
        text - decoration: bold } < /style>        <
    h1 > Today 's Menu</h1><br> <
    h3 > SUMMER CORN BHEL < /h3>

Fire Roasted Corn, Spicy Tamarind Dressing, Crispy Puffed Corn, Sev

    <
    h4 > $14 < /h4>




<
h3 > SAMOSA < /h3>

<
/html>