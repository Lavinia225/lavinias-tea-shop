var width = window.innerWidth;
var height = window.innerHeight;
var topBar = document.getElementById("shopButtons");

if (width > 310 && height > 757){
    topBar.style.maxWidth = "20%";
}

function linkSetter(teatype){
    window.location.href = `./${teatype}.html`;
}

document.getElementById("blackTeaImage").addEventListener('click', function(){
    linkSetter('blackTea');
});

document.getElementById("greenTeaImage").addEventListener('click', function(){
    linkSetter('greenTea');
});

document.getElementById("herbalTeaImage").addEventListener('click', function(){
    linkSetter('herbalTea');
});

document.getElementById("whiteTeaImage").addEventListener('click', function(){
    linkSetter('whiteTea');
});

document.getElementById("banner").addEventListener('click', function(){
    window.location.href = `./index.html`;
});