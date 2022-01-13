document.querySelector(".menu").addEventListener("click", function(){
    document.querySelector(".bg1").classList.toggle("ouvert");
    document.querySelector(".bg2").classList.toggle("ouvertdelay1");
    document.querySelector("nav").classList.toggle("ouvertdelay2");
    document.querySelector(".menu").classList.toggle("menuouvert");
    document.querySelector(".header").classList.toggle("headerouvert");
});

document.querySelector(".dir").addEventListener("click", function(){
    document.querySelector(".bg1").classList.toggle("ouvert");
    document.querySelector(".bg2").classList.toggle("ouvertdelay1");
    document.querySelector("nav").classList.toggle("ouvertdelay2");
    document.querySelector(".menu").classList.toggle("menuouvert");
    document.querySelector(".header").classList.toggle("headerouvert");
});

document.querySelector(".dir2").addEventListener("click", function(){
    document.querySelector(".bg1").classList.toggle("ouvert");
    document.querySelector(".bg2").classList.toggle("ouvertdelay1");
    document.querySelector("nav").classList.toggle("ouvertdelay2");
    document.querySelector(".menu").classList.toggle("menuouvert");
    document.querySelector(".header").classList.toggle("headerouvert");
});

document.querySelector(".dir3").addEventListener("click", function(){
    document.querySelector(".bg1").classList.toggle("ouvert");
    document.querySelector(".bg2").classList.toggle("ouvertdelay1");
    document.querySelector("nav").classList.toggle("ouvertdelay2");
    document.querySelector(".menu").classList.toggle("menuouvert");
    document.querySelector(".header").classList.toggle("headerouvert");
});

document.querySelector(".dir4").addEventListener("click", function(){
    document.querySelector(".bg1").classList.toggle("ouvert");
    document.querySelector(".bg2").classList.toggle("ouvertdelay1");
    document.querySelector("nav").classList.toggle("ouvertdelay2");
    document.querySelector(".menu").classList.toggle("menuouvert");
    document.querySelector(".header").classList.toggle("headerouvert");
});

function setHalfVolume() {
    var myAudio = document.getElementById("audio1");  
    myAudio.volume = 0.5; //Changed this to 0.5 or 50% volume since the function is called Set Half Volume ;)
}



/*
var audio = $("#audio")[0];
$("#son").mouseenter(function() {
audio.play();
});
*/


