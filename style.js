
let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};

// Card Swiper JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.card-swiper-container');

    sliders.forEach((slider) => {
        const cardSwiper = slider.querySelector('.card-swiper');
        const prevButton = slider.querySelector('.swiper-button.prev');
        const nextButton = slider.querySelector('.swiper-button.next');
        
        let currentPosition = 0;
        const cardWidth = 280; // 270px width + 10px margin
        const totalCards = cardSwiper.querySelectorAll('.card').length;

        function updateSwiperPosition() {
            cardSwiper.style.transform = `translateX(${currentPosition}px)`;
        }

        prevButton.addEventListener('click', () => {
            currentPosition += cardWidth;
            if (currentPosition > 0) {
                currentPosition = -(cardWidth * (totalCards - 5)); // Show last 5 cards
            }
            updateSwiperPosition();
        });

        nextButton.addEventListener('click', () => {
            currentPosition -= cardWidth;
            if (currentPosition < -(cardWidth * (totalCards - 5))) {
                currentPosition = 0;
            }
            updateSwiperPosition();
        });
    });
});
/*-----------------------------------------------------------------------------------------------------------------------------------*/
document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.getElementById('animeCarouselContainer');
    const carousel = document.getElementById('animeCarousel');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    
    let currentPosition = 0;
    const cardWidth = 264.24; // 254.24px width + 10px margin
    const totalCards = 20; 
    const visibleCards = Math.floor(carouselContainer.clientWidth / cardWidth);

    function updateCarouselPosition() {
        carousel.style.transform = `translateX(${currentPosition}px)`;
    }

    prevButton.addEventListener('click', () => {
        currentPosition += cardWidth * visibleCards;
        if (currentPosition > 0) {
            currentPosition = -(cardWidth * (totalCards - visibleCards));
        }
        updateCarouselPosition();
    });

    nextButton.addEventListener('click', () => {
        currentPosition -= cardWidth * visibleCards;
        if (currentPosition < -(cardWidth * (totalCards - visibleCards))) {
            currentPosition = 0;
        }
        updateCarouselPosition();
    });
});