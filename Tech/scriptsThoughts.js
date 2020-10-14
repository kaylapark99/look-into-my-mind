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
    var compCaptions = ["i'm currently in a zoom class", "i really should pay attention to what the prof is saying..."];
    var shitCaptions = ["it's really not that much...", "i really gotta start studying for my midterm"];
    openTab = x;
    clickImg[x].classList.remove("hide");
    close.classList.remove("hide");
    currentCaption = captions.innerHTML;
    if(x==0 & compClick < compCaptions.length) {
        captions.innerHTML = compCaptions[compClick];
        compClick++;
    }
    else if(x==1 & shitClick < shitClick.length) {
        captions.innerHTML = shitCaptions[shitClick];
        shitClick++;
    }
}

close.addEventListener("click", function(){
    clickImg[openTab].classList.add("hide");
    close.classList.add("hide");
    resetCaption();
});

document.getElementById("coffee").addEventListener("click", function() {
    currentCaption = captions.innerHTML;
    var coffeeCaptions = ["do you really want to do that?","you know caffeine will just give you anxiety",
    "i guess one sip won't hurt"];
    if(coffeeClick < coffeeCaptions.length) {
        captions.innerHTML = coffeeCaptions[coffeeClick];
    }
    coffeeClick++;
    setTimeout(resetCaption, 5000);
});

function resetCaption() {
    captions.innerHTML = currentCaption;
}

setTimeout(function(){
    changeTime.innerHTML = "it is 10:28 on a monday morning"
}, 60000);
