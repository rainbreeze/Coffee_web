const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function() {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});

const badgeE1 = document.querySelector('header .badges');

window.addEventListener('scroll', function() {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
        gsap.to(badgeE1, 1, {
            opacity: 0
        });
    }
    else{
        gsap.to(badgeE1, 1, {
            opacity: 1
        });
    }
});

const fadeinElS = document.querySelectorAll('.fade-in');

fadeinElS.forEach(function(fadeinEl, index){
    gsap.to(fadeinEl, 1, {
        delay: (index + 1) * .7,
        opacity : 1
    });
});

new Swiper ('.notice .swiper', {
    direction: 'vertical',
    autoplay: true,
    loop: true
});