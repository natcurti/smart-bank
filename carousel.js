const carouselContainer = document.getElementById('carouselContainer');
const allCarouselItems = document.querySelectorAll('[data-item]');
const next = document.getElementById('btnRight');
const prev = document.getElementById('btnLeft');
const bullets = document.querySelectorAll('[data-bullet]');
let active = 0;
let lengthItems = allCarouselItems.length - 1;
let newInterval = setInterval(nextSlide, 3000);

next.addEventListener('click', nextSlide);

function nextSlide(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    showSlider();
}

prev.addEventListener('click', previousSlide);

function previousSlide(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    showSlider();
}

function showSlider(){
    carouselContainer.style.left = -allCarouselItems[active].offsetLeft + 'px';
    let lastActiveBullet = document.querySelector('[data-bullet].bg-purple-dark');
    lastActiveBullet.classList.remove('bg-purple-dark');
    bullets[active].classList.add('bg-purple-dark');
    clearInterval(newInterval);
    newInterval = setInterval(nextSlide, 3000);
}

bullets.forEach((bullet, key) => {
    bullet.addEventListener('click', () => {
        active = key;
        showSlider();
    })
})

window.onresize = function() {
    showSlider();
};