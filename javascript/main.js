
function error() {
    let username = document.getElementById("username").value
    let email = document.getElementById("email").value
    if  (username == "") {
        alert("Enter your name")
    }
    else if (email == "") {
        alert("Enter your email as well, remember to add the message too")
    }
    else {
        alert("You are good to go :)")
    }
}


setInterval(() =>{

const time = new Date();
const current_time = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();

document.getElementById('time').innerHTML = current_time
}, 1000)

const images = document.querySelectorAll('#slider img');
const previousImage = document.getElementById("prev");
const nextImage = document.getElementById("next");
let currentIndex = 0;
function reset() {
  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove('active');
  }
}
function initializeSlider() {
  reset();
  images[currentIndex].classList.add('active');
}
function slideLeft() {
  reset();
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  images[currentIndex].classList.add('active');
}

function slideRight() {
  reset();
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  images[currentIndex].classList.add('active');
}
initializeSlider();

previousImage.addEventListener('click', function() {
  slideLeft();
});

nextImage.addEventListener('click', function() {
  slideRight();
});


