var hoverImg = document.querySelectorAll(".img-container-hover img");
var clickImg = document.querySelectorAll(".img-container-click img");
var close = document.getElementById("x");
var captions = document.getElementById("instruction");
var openTab = null;
var currentCaption = null;
var changeTime = document.getElementById("time");
var coffeeClick = 0;

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
        captions.innerHTML = "test1";
    }
}

close.addEventListener("click", function(){
    clickImg[openTab].classList.add("hide");
    close.classList.add("hide");
    captions.innerHTML = currentCaption;
});

document.getElementById("coffee").addEventListener("click", function(){
    alert("hi");
    currentCaption = captions.innerHTML;
    captions.innerHTML = "do you really want to do that?";
});


setTimeout(function(){
    changeTime.innerHTML = "it is 10:28 on a tuesday morning"
}, 60000);