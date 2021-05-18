'use strict';

const box = document.getElementById("box"),
      btns = document.getElementsByTagName("button"),
      circles = document.getElementsByClassName("circle"),
      heart = document.querySelector(".heart"),
      hearts = document.querySelectorAll(".heart"),
      wrapper = document.querySelector(".wrapper");


box.style.backgroundColor = "green";
btns[1].style.borderRadius = "100%";
hearts.forEach(item =>{
    item.style.backgroundColor = "blue";
});

box.style.cssText = "backgroundColor: red; margin-top: 300px; width: 500px";

const h2 = document.createElement("h2");
h2.classList.add("textHD");

wrapper.prepend(h2);
circles[0].replaceWith(hearts[0]); // заменгить круг на сердце
console.log(wrapper);