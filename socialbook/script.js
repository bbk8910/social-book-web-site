function settingsmenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");

}
var settingsmenu=document.querySelector(".settings-menu");
var darkBtn=document.getElementById("dark-btn");
darkBtn.onclick = function (){
    darkBtn .classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

}

