var initialImg = document.querySelectorAll(".initial");
var hoverImg = document.querySelectorAll(".img-container-hover img");
var clickImg = document.querySelectorAll(".img-container-click img");
var close = document.getElementById("x");
var captions = document.getElementById("instruction-1");
var openTab = null;
var currentCaption = "this is a look inside my mind";
var [coffeeClick, shitClick, compClick, phoneClick, anxietyCount, instructionNum, midtermCount] = [0,0,0,0,0,0,0]; 
var time = "10:32";
var imgOpen = null;

function imgHover(x) {
    hoverImg[x].classList.remove("hide");
}

function imgLeave(x) {
    hoverImg[x].classList.add("hide");
}

function imgClick(x) {
    var compCaptions = ["i'm currently in a zoom class", "i really should pay attention to what the prof is saying..."];
    var shitCaptions = ["it's really not that much...", "i really gotta start studying for my midterm"];
    var phoneCaptions = ["no, i'm in class", "stop, i gotta focus", "agh, i keep getting distracted"];
    openTab = x;
    changeImg = false
    if(x==0) {
        captions.innerHTML = compCaptions[compClick];
        if(compClick < compCaptions.length-1){
            compClick++;
        }
        changeImg = true;
    }
    else if(x==1) {
        captions.innerHTML = phoneCaptions[phoneClick];
        if(phoneClick==2) {
            form(0);
        }
        if(phoneClick < phoneCaptions.length-1){
            phoneClick++;
        }
    }
    else if(x==2) {
        captions.innerHTML = shitCaptions[shitClick];
        if(shitClick < shitCaptions.length-1) {
            shitClick++;
        }
        changeImg = true;
    }
    if(changeImg) {
        clickImg[x].classList.remove("hide");
        imgOpen = clickImg[x];
    close.classList.remove("hide");
    }
}

function form(x) {
    forms = document.querySelectorAll(".img-container-forms div");
    forms[x].classList.remove("hide");
    imgOpen = forms[x];
    initialImg.forEach(a => a.classList.add("hide"));
    hoverImg.forEach(a => a.classList.add("hide"));
    processForm(forms, x);
}

function processForm(f, x) {
    var phoneImg = document.querySelectorAll(".phone-options img");
    var socials =  document.querySelectorAll(".socials");
    var phoneCaptions = ["i always anxiously check my emails", "572 texts...", "i don't even use snapchat, why am i checking it"];
    close.classList.remove("hide");
    socials.forEach(a => a.addEventListener('mouseover', function(){
        a.style["cursor"] = "pointer";
        idx = Array.prototype.indexOf.call(socials, a);
        a.addEventListener("click", function(){
            phoneImg[idx].classList.remove("hide");
            captions.innerHTML = phoneCaptions[idx];
            imgOpen = phoneImg[idx];
            f[x].classList.add("hide");
        });
    })
);
}

close.addEventListener("click", function(){
    imgOpen.classList.add("hide");
    close.classList.add("hide");
    if(initialImg[0].classList.contains("hide")) {
        initialImg.forEach(a => a.classList.remove("hide"));
    }
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
    if(coffeeClick==4) {
        anxiety();
    }
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
function anxiety() {
    captions.innerHTML = "i'm so tired, i need more..."
    var coffeeInterval = setInterval(function(){ 
        var anxietyCoffeeCaptions = ["i do this every time", "coffee always my thoughts run too fast",
        "and i can't focus", "but i always think it will help", "oh f*ck, when is my cs midterm?"];
        if(anxietyCount < anxietyCoffeeCaptions.length) {
            captions.innerHTML = anxietyCoffeeCaptions[anxietyCount];
            currentCaption = captions.innerHTML;
            anxietyCount++;
        }
        else {
            clickImg[2].classList.remove("hide");
            imgOpen = clickImg[2];
            close.classList.remove("hide");
            midterm();
            clearInterval(coffeeInterval);
        }
    }, 1000);
    
}

function midterm() {
    clearInterval(timeInterval);
    setInterval(changeTime, 1000);
    var midtermInterval = setInterval(function(){
        var midtermCaptions = ["i also have to find a partner for my cs project", "oh no, i forgot i have a zoom meetup for my HCI project",
        "ah, i still haven't thought of a concept for my a3 art project"];
        if(midtermCount < midtermCaptions.length) {
            captions.innerHTML = midtermCaptions[midtermCount];
            currentCaption = captions.innerHTML;
            midtermCount++;
        }
        else {
            clearInterval(midtermInterval);
        }
    }, 1000);
}

function changeTime() {
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
}

var change = setInterval(changeInstructions, 500);

var timeInterval = setInterval(changeTime, 60000);
