let btn = document.querySelector("#btn");

let sidebar = document.querySelector(".sidebar");

btn.onclick = function() {
    sidebar.classList.toggle("active");
    if (btn.classList.contains("bx-menu")) {
        btn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else {
        btn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
}

var pick = document.getElementById('r1');
r1.onclick = function(){
    document.getElementById('wilson').classList.toggle('swap');
}
var pick2 = document.getElementById('r2');
r2.onclick = function(){
    document.getElementById('educacion').classList.toggle('swap');
}
var pick3 = document.getElementById('r3');
r3.onclick = function(){
    document.getElementById('experiencia').classList.toggle('swap');
}
var pick4 = document.getElementById('r4');
r4.onclick = function(){
    document.getElementById('objetivos').classList.toggle('swap');
}

console.log("script loaded");