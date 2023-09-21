/** Projects professionnal */

const styleImage = document.querySelector(".img1");
const styleImage2 = document.querySelector(".img2");
const hiddenDiv = document.querySelector(".style__hidden");
const hiddenDiv2 = document.querySelector(".style__hidden2");

styleImage.addEventListener('mouseenter', (event) => {
    hiddenDiv.style.opacity = 1;
    hiddenDiv.style.visibility = 'visible';
})

hiddenDiv.addEventListener('mouseleave', (event) => {
    hiddenDiv.style.opacity = 0;
    hiddenDiv.style.visibility = 'hidden';
});

styleImage2.addEventListener('mouseenter', (event) => {
    hiddenDiv2.style.opacity = 1;
    hiddenDiv2.style.visibility = 'visible';
})

hiddenDiv2.addEventListener('mouseleave', (event) => {
    hiddenDiv2.style.opacity = 0;
    hiddenDiv2.style.visibility = 'hidden';
});

/* Carousel */
const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const items = document.querySelectorAll('.carousel-item');

let currentIndex = 0;

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

nextButton.addEventListener('click', () => {
  if (currentIndex < items.length - 1) {
    currentIndex++;
    updateCarousel();
  }
});

function updateCarousel() {
  const translateXValue = -currentIndex * (items[0].offsetWidth + 10); // 10 is the margin-right value
  carousel.style.transform = `translateX(${translateXValue}px)`;
}
  