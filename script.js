console.log('connected')

// carousel for projects

// state variables
let currentImgIndex = 0;
let previousImgIndex = 0;

// grab elements
const images = document.getElementsByClassName('images');
const next = document.querySelector('.next');
// add event listeners
next.addEventListener('click', () => {
previousImgIndex = currentImgIndex++
images[previousImgIndex].style.display = 'none';
if(currentImgIndex >= images.length) {
    currentImgIndex = 0;
   } 
images[currentImgIndex].style.display = 'block';
   
})
const prev = document.querySelector('.prev');

prev.addEventListener('click', () => {
previousImgIndex = currentImgIndex--
images[previousImgIndex].style.display = 'none';
if(currentImgIndex < 0) {
    currentImgIndex = images.length - 1;
}
images[currentImgIndex].style.display = 'block';
})

// submit button function
document.getElementById('submit-button').addEventListener('click', myFunction);

function myFunction() {
    alert("Successfully submitted. Thank you!")
}

// learn more button

function my_Function() {
    var x = document.getElementById("myDIV");
    if(x.style.display === "none") {
        x.style.display = "block";
    }else{
        x.style.display =  "none";
    }
}