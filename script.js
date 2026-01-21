const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  slidesPerView: 1,
  speed: 750,
  allowTouchMove: false, // ❌ desativa swipe
  effect: 'slide',
  resistanceRatio: 0,
});

const nextButton = document.querySelector('.next-button');

/* Clique para avançar */
nextButton.addEventListener('click', () => {
  swiper.slideNext();
});

/* Esconde botão no último slide */
swiper.on('slideChange', () => {
  if (swiper.isEnd) {
    nextButton.style.opacity = '0';
    nextButton.style.pointerEvents = 'none';
  } else {
    nextButton.style.opacity = '1';
    nextButton.style.pointerEvents = 'auto';
  }
});

/* Pré-carrega a próxima imagem */
swiper.on('slideChangeTransitionStart', () => {
  const nextIndex = swiper.activeIndex + 1;
  const nextSlide = swiper.slides[nextIndex];
  if (nextSlide) {
    const img = nextSlide.querySelector('img');
    if (img && !img.src) {
      img.src = img.dataset.src;
    }
  }
});
