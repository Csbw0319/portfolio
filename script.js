console.log('connected')

let currentImgIndex = 0;
let previousImgIndex = 0;


const images = document.getElementsByClassName('images');
const next = document.querySelector('.next');

next.addEventListener('click', () => {
    previousImgIndex = currentImgIndex++
    images[previousImgIndex].style.display = 'none';
images[currentImgIndex].style.display = 'block';
if(currentImgIndex >= images.length) {
    currentImgIndex = 0;
   } 
   
})
const prev = document.querySelector('.prev');

prev.addEventListener('click', () => {
previousImgIndex = currentImgIndex--
images[previousImgIndex].style.display = 'none';
images[currentImgIndex].style.display = 'block';
})
if(currentImgIndex < 0) {
    currentImgIndex = images.length - 1;
}