var hoverImg = document.querySelectorAll(".img-container-hover img");
var clickImg = document.querySelectorAll(".img-container-click img");
var close = document.getElementById("x");
var captions = document.getElementById("instruction-1");
var openTab = null;
var currentCaption = "this is a look inside my mind";
var coffeeClick = 0;
var shitClick = 0;
var compClick = 0;
var instructionNum = 0;
var timeSpeed = 60000;
var time = "10:32";

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
    if(x==0) {
        captions.innerHTML = compCaptions[compClick];
        if(compClick < compCaptions.length-1){
            compClick++;
        }
    }
    else if(x==1) {
        captions.innerHTML = shitCaptions[shitClick];
        if(shitClick < shitCaptions.length-1) {
            shitClick++;
        }
    }
}

close.addEventListener("click", function(){
    clickImg[openTab].classList.add("hide");
    close.classList.add("hide");
    resetCaption();
});

document.getElementById("coffee").addEventListener("click", function() {
    currentCaption = captions.innerHTML;
    var coffeeCaptions = ["do i really want to do that?", "i know caffeine will just give me anxiety",
    "i guess one sip won't hurt"];
    if(coffeeClick < coffeeCaptions.length) {
        captions.innerHTML = coffeeCaptions[coffeeClick];
    }
    coffeeClick++;
});

function resetCaption() {
    captions.innerHTML = currentCaption;
}

function changeInstructions() {
    var instructions = ["i am currently in class", "it is always so hard for me to pay attention", "it's also monday, and i hate mondays", 
    "there is just so much i have to do this week", "and i am always so tired", "maybe i should drink some coffee", "please help me"];
    if(instructionNum < instructions.length) {
        captions.innerHTML = instructions[instructionNum];
        currentCaption = captions.innerHTML;
        instructionNum++;
    }
    else {
        document.getElementById("intro").classList.add("hide");
        clearInterval(change);
    }

}

var change = setInterval(changeInstructions, 2500);

setInterval(function(){
    document.getElementById("time").innerHTML = "it is " + time + " on a monday";
    timeArray = time.split(":");
    var hour = timeArray[0];
    var minutes = timeArray[1];
    if(hour == "12") {
        hour = "1";
    }
    else if(minutes == "59") {
        hour = String(parseInt(timeArray[0]) + 1);
        minutes = "00";
    } 
    else if(minutes.charAt(0) == 0) {
        minutes = "0" + String(parseInt(timeArray[1]) + 1);
    }
    else {
        minutes = String(parseInt(timeArray[1]) + 1);
    }
    time = hour + ":" + minutes;
}, timeSpeed);
