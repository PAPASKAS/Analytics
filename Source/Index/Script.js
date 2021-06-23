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



//footer
let selectedFooter;
box_footer.onmouseover = function(event){
    let item = event.target.closest('.sentence');
    if(!item) return;
    if(!box_footer.contains(item)) return;

    footerSelected(item);
};
function footerSelected(item){
    if(selectedFooter){
        selectedFooter.querySelector(".heading").style.color = "#FFFFFF";
        selectedFooter.querySelector(".price").style.color = "#FFFFFF";
        selectedFooter.querySelector(".background").classList.remove("background-selected");
        selectedFooter.querySelector("a").classList.remove("a-selected");    
    }

    selectedFooter = item;
    selectedFooter.querySelector(".heading").style.color = "var(--main)";
    selectedFooter.querySelector(".price").style.color = "var(--main)";
    selectedFooter.querySelector(".background").classList.add("background-selected");
    selectedFooter.querySelector("a").classList.add("a-selected");
};



//mob ver footer
let mediaQuery = window.matchMedia('(max-width: 1050px)');
if (mediaQuery.matches) {
    document.querySelector("footer .swiper-container").classList.add("mySwiper");
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});