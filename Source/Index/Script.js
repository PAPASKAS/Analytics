"use strict";
//header

menu_header_button.onclick = function(){
    let menu_header = document.querySelector(".menu_header");

    if(menu_header.style.height === "0px" || menu_header.style.height === ""){
        menu_header.classList.add("menu_header_style");
        menu_header.style.height = "145px";
    }else{
        menu_header.classList.remove("menu_header_style");
        menu_header.style.height = "0px";
        
    }
}


//intro

let selectedIntro;
box_intro.onmouseover = function(event){
    let item = event.target.closest('.item-hover');
    if(!item) return;
    if(!box_intro.contains(item)) return;

    introSelected(item);
};
function introSelected(item){
    if(selectedIntro){
        selectedIntro.classList.remove('selected-item-intro');
    }

    selectedIntro = item;
    selectedIntro.classList.add('selected-item-intro');
};