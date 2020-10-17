var black = document.getElementById("black");
var text = document.getElementById("hidden-text")
var white = document.getElementById("circle");
var red = document.getElementById("text-6");
var size = 0;
var posBlack = 48;
var deskImg = document.querySelectorAll(".img-container img");
var switchScreen = false;
sessionStorage.setItem("dayCount", "1");

red.addEventListener("mouseover", function(){
    white.style.backgroundColor = "red";
    white.style.boxShadow = "0 0 50px 80px red";
});

red.addEventListener("mouseout", function(){
    white.style.backgroundColor = "white";
    white.style.boxShadow = "0 0 50px 80px white";
});

red.addEventListener("click", function(){
    if(!switchScreen) {
        window.open("thoughts.html", "_self");
    }
    else {
        window.open("index.html", "_self");
    }
});

function pleaseHelp() {
    var dayNum = sessionStorage.getItem("dayCount")++;
    sessionStorage.setItem("dayCount", "dayNum");
    switchScreen = true;
    setTimeout(function(){
        black.style["background-color"] = "red";
    }, 7000);
    setTimeout(function(){
        black.style["background-color"] = "black";
    }, 9000);
    setTimeout(function(){
        var changeTexts = document.querySelectorAll("#hidden-text h3");
        var replaceText = ["zoned out", "do you have a lot of thoughts?",
        "just take your meds", "please", "is your head empty?", "it's a never ending cycle",
        "do you hide it too?", "tell it to stop", "are you okay?", "you have so much to do", "where are you?",
        "\"just breathe\"", "it's all in your head", "what are you looking for?"];
        var x = 0;
        changeTexts.forEach(function(a) {
            a.innerHTML = replaceText[x];
            x++
        });
    }, 8000);
}

function grow(x) {
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
    }
    if(x) {
        pleaseHelp();
    }
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


text.addEventListener("mousemove", moveLight);