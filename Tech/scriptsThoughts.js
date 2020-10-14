var hoverImg = document.querySelectorAll(".img-container-hover img");
var clickImg = document.querySelectorAll(".img-container-click img");
var close = document.getElementById("x");
var captions = document.getElementById("instruction-1");
var openTab = null;
var currentCaption = null;
var changeTime = document.getElementById("time");
var coffeeClick = 0;
var shitClick = 0;
var compClick = 0;

function imgHover(x) {
    hoverImg[x].classList.remove("hide");
}

function imgLeave(x) {
    hoverImg[x].classList.add("hide");
}

function imgClick(x) {
    openTab = x;
    clickImg[x].classList.remove("hide");
    close.classList.remove("hide");
    currentCaption = captions.innerHTML;
    if(x==0) {
        if(compClick==0) {
            captions.innerHTML = "i'm currently in a zoom class";
        }
        else if(compClick==1) {
            captions.innerHTML = "i really should pay attention to what the prof is saying..."
        }
        compClick++;
    }
    else if(x==1) {
        if(shitClick==0) {
            captions.innerHTML = "it's really not that much...";
        }
        else if(shitClick==1) {
            captions.innerHTML = "i really gotta start studying for my midterm";
        }   
        shitClick++;
    }
}

close.addEventListener("click", function(){
    clickImg[openTab].classList.add("hide");
    close.classList.add("hide");
    captions.innerHTML = currentCaption;
});

document.getElementById("coffee").addEventListener("click", function() {
    currentCaption = captions.innerHTML;
    if(coffeeClick==0){
        captions.innerHTML = "do you really want to do that?";
    } 
    else if(coffeeClick==1) {
        captions.innerHTML = "you know caffeine will just give you anxiety";
    }
    else if(coffeeClick==2) {
        captions.innerHTML = "i guess one sip won't hurt";
        var coffeeCaptions = [""]
        setTimeout(function(){

        }, 1000);
    }
    coffeeClick++;
});


setTimeout(function(){
    changeTime.innerHTML = "it is 10:28 on a monday morning"
}, 60000);
