var openBtn = document.getElementById('bars');
var nav = document.getElementById('mySidenav');
var closeBtn = document.getElementById('closebtn');
var scrollNav = document.getElementById('navbar');
var boxes = document.querySelectorAll('.box');
var boxContainer = document.querySelector('.boxes-layout');
//querySelectorAll
//getElementsByClassName
openBtn.addEventListener('click', function(){
    nav.style.width = "200px";
});


closeBtn.addEventListener('click', function(){
    nav.style.width = "0px";
});

window.onscroll = function(){myFunction();};

function myFunction(){
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 100){
        scrollNav.style.top = "0";
    }else{
        scrollNav.style.top = "-50px";
    }
}

boxes.forEach(event => event.addEventListener('click', function(){
    if(event.style.transform == ""){
        event.style['-webkit-transform']="rotateY(180deg)";
        event.style.transform="rotateY(180deg)";
    } else{
        event.style['-webkit-transform']="";
        event.style.transform="";
    }
}));
