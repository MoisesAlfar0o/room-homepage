const data = [
    {
        title: 'Discover innovative ways to decorate',
        paragraph: `We provide unmatched quality, comfort, and style for property owners across the country. 
            Our experts combine form and function in bringing your vision to life. Create a room in your 
            own style with our collection and make your property a reflection of you and what you love.`,
        imgLarge: '../images/desktop-image-hero-1.jpg',
        imgMobile: '../images/mobile-image-hero-1.jpg'
    },
    {
        title: 'We are available all across the globe',
        paragraph: ` With stores all over the world, it's easy for you to find furniture for your home or place of business. 
            Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
            store locator. Any questions? Don't hesitate to contact us today.`,
        imgLarge: '../images/desktop-image-hero-2.jpg',
        imgMobile: '../images/mobile-image-hero-2.jpg'
    },
    {
        title: 'Manufactured with the best materials',
        paragraph: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
            to ensure that every product is made as perfect and as consistent as possible. With three decades of 
            experience in this industry, we understand what customers want for their home and office.`,
        imgLarge: '../images/desktop-image-hero-3.jpg',
        imgMobile: '../images/mobile-image-hero-3.jpg'
    },
];

const title = document.getElementById('title');
const text = document.getElementById('text');
const img = document.getElementById('img');

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

const swiperWrapper = document.getElementById('swiper-wrapper');

const openMenuBtn = document.getElementById('open-menu');
const navbar = document.getElementById('nav');

const media = window.matchMedia('(width < 700px)');

data.forEach((item) => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
    
    slide.innerHTML = `
      <picture>
        <source media="(max-width: 768px)" srcset="${item.imgMobile}">
        <source media="(min-width: 769px)" srcset="${item.imgLarge}">
        <img src="${item.imgLarge}" class="slide-image img__hero" alt="Interior decoration gallery">
      </picture>
    `;
    
    swiperWrapper.appendChild(slide);
  });


const swiper = new Swiper('.swiper', {
loop: true,
navigation: {
    nextEl: '#next-btn',
    prevEl: '#prev-btn',
},
on: {
    init: function() {
    updateContent(this.realIndex);
    },
    slideChange: function() {
    updateContent(this.realIndex);
    }
}
});

function updateContent(currentIndex) {
    const currentData = data[currentIndex];
    const titleElement = document.getElementById('title');
    const textElement = document.getElementById('text');
    
    titleElement.textContent = currentData.title;
    textElement.textContent = currentData.paragraph;
}

media.addEventListener('change', (e) => updateNav(e));

function updateNav(e){
    const isMobile = e.matches;
    if(isMobile){
        navbar.setAttribute('inert', '');
    }else{
        navbar.removeAttribute('inert');
    }
}

function openMenu(){
    navbar.classList.add('show')
    openMenuBtn.setAttribute('aria-expanded', 'true')
    navbar.removeAttribute('inert');
}

function closeMenu(){
    navbar.classList.remove('show')
    openMenuBtn.setAttribute('aria-expanded', 'false')
    navbar.setAttribute('inert', '');
}

updateNav(media);