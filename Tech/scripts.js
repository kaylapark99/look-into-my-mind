var eyes = document.getElementById("eyes");
var me = document.getElementById("me");
var me_hover = document.getElementById("me-hover");
var mouseMove = document.querySelector(".container");

me.addEventListener("mouseover", function(){
    me.classList.add("hide")
    me_hover.classList.remove("hide")
    me_hover.style.cursor = "pointer"
});

me_hover.addEventListener("mouseout", function(){
    me_hover.classList.add("hide")
    me.classList.remove("hide")
});

function moveEyes(e) {
    const move = 20;
    const { offsetWidth: width, offsetHeight: height } = mouseMove;
    let { offsetX: x, offsetY: y } = e;
    const cx = me.offsetLeft;    
    const cy = me.offsetTop;

    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }
   
    const xMove= Math.round((x / width * move) - (move / 2));
    const yMove = Math.round((y / height * move) - (move / 2));
    eyes.style.left = xMove + cx +  "px";
    eyes.style.top = yMove + cy + "px";
    
}

mouseMove.addEventListener("mousemove", moveEyes);


