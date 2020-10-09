var eyes = document.getElementById("eyes");
var me = document.getElementById("me");
var me_hover = document.getElementById("me-hover");
var mouseMove = document.querySelector(".container");
var black = document.getElementById("black");
var text = document.getElementById("hidden-text")
var white = document.getElementById("circle");
var red = document.getElementById("text-6");
var size = 0;
var posBlack = 48;
var deskImg = document.querySelectorAll(".img-container img");

me.addEventListener("mouseover", function(){
    me.classList.add("hide")
    me_hover.classList.remove("hide")
    me_hover.style.cursor = "pointer"
});

me_hover.addEventListener("mouseout", function(){
    me_hover.classList.add("hide")
    me.classList.remove("hide")
});

red.addEventListener("mouseover", function(){
    white.style.backgroundColor = "red";
    white.style.boxShadow = "0 0 50px 80px red";
});

red.addEventListener("mouseout", function(){
    white.style.backgroundColor = "white";
    white.style.boxShadow = "0 0 50px 80px white";
});

red.addEventListener("click", function(){
    window.open("thoughts.html", "_self");
});

function pleaseHelp() {
    setTimeout(function(){
        var changeTexts = document.querySelectorAll("#hidden-text h3");
        var replaceText = ["zoned out", "do you have a lot of thoughts?",
        "just take your meds", "please", "is your head empty?", "look into your own mind",
        "do you hide it too?", "tell it to stop", "are you okay?", "you have so much to do", "where are you?",
        "\"just breathe\"", "it's all in your head", "what are you looking for?"];
        var x = 0;
        changeTexts.forEach(function(a) {
            a.innerHTML = replaceText[x];
            x++
        });
    }, 30000);
}

function grow() {
    if(size != 200) {
        black.style.width = size + "vw";
        black.style.height = size + "vw";
        black.style.top = posBlack + "vh";
        black.style.left = posBlack + "vw";
        setTimeout(grow, 5);
        size+=1;
        posBlack-=0.5;
    }
    if(size == 25) {
        setTimeout(function(){
            white.classList.remove("hide");
            setTimeout(function(){
                white.classList.add("hide");
                setTimeout(function(){
                    white.classList.remove("hide");
                    setTimeout(function(){
                        white.classList.add("hide");
                        setTimeout(function(){
                            white.classList.remove("hide");
                        }, 200);
                    }, 50);
                }, 100);
            }, 100);
            text.classList.remove("hide");
        }, 2000);
        setTimeout(pleaseHelp, 30000);
    }
}

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

function moveLight(e) {
    const { offsetWidth: width, offsetHeight: height } = text;
    let { offsetX: x, offsetY: y } = e;
    const w = white.offsetWidth / 2;   

    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    white.style.left = x - w +  "px";
    white.style.top = y - w + "px";
}

mouseMove.addEventListener("mousemove", moveEyes);
text.addEventListener("mousemove", moveLight);


