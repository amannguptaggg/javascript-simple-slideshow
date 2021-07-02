// simple sliding work

// (function(){
//     'use strict';
// const images = ['image1.jpg','image2.jpg','image3.jpg','image4.jpg','image5.jpg'];

// let currentImage  = 0;

// document.getElementById('next').onclick = nextPhoto;
// document.getElementById('previous').onclick = previousPhoto;
// const container = document.getElementById('content');
// function nextPhoto(){
//     currentImage++;
//     if (currentImage > images.length-1) {
//         currentImage = 0;
//     }
//     document.getElementById('myimage').src = `slides/${images[currentImage]}`;
//     document.getElementById('myimage').className="fadeinimg";
// }

// function previousPhoto(){
//     currentImage--;
//     if (currentImage < 0) {
//         currentImage = images.length-1;
//     }
//     document.getElementById('myimage').src = `slides/${images[currentImage]}`;
//     document.getElementById('myimage').className="fadeinimg";
        
// }
// }());





// fade effect in slide show

const images = ['image1.jpg','image2.jpg','image3.jpg','image4.jpg','image5.jpg'];
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('previous');
const container = document.getElementById('content');
const myImage = document.getElementById('myimage');
let currentImage = 0;


nextBtn.addEventListener('click',function(e){
    e.preventDefault();
    currentImage++;
    if (currentImage > images.length - 1) {
        currentImage = 0;
    }

    // myImage.src = `slides/${images[currentImage]}`;
 swapImage();
});

prevBtn.addEventListener('click',function(e){
    e.preventDefault();
    currentImage--;
    if (currentImage < 0) {
        currentImage = images.length - 1;
    }

    // myImage.src = `slides/${images[currentImage]}`;

    swapImage();

});


function swapImage(){
    let newSlide = document.createElement('img');
    newSlide.src=`slides/${images[currentImage]}`;
    newSlide.className = 'fadeinimg';
    container.appendChild(newSlide);

    if (container.children.length > 2) {
        container.removeChild(container.children[0]);
    }

    console.log('swap is called')
}