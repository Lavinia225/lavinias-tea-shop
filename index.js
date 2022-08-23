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