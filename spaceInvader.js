"use strict";


let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

spaceinvader();

function spaceinvader() {

    //ogen
    context.fillStyle = "#BCFE19";
    context.beginPath();
    context.rect(50, 50, 50, 50);
    context.rect(250, 50, 50, 50);
    context.fill();

    //neusgaten
    context.fillStyle = "#BCFE19";
    context.beginPath();
    context.rect(100, 100, 50, 50);
    context.rect(200, 100, 50, 50);
    context.fill();

    //mond
    context.fillStyle = "#BCFE19";
    context.beginPath();
    context.rect(50, 150, 250, 50);
    context.rect(50, 200, 50, 50);
    context.rect(250, 200, 50, 50);
    context.fill();

    //onderstaande blokje
    context.fillStyle = "#BCFE19";
    context.beginPath();
    context.rect(150, 250, 50, 50);
    context.fill();
}