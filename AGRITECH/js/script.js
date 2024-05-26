let searchForm = document.querySelector('.search-form');
let loginForm = document.querySelector('.login-form');
let navbar = document.querySelector('.navbar');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    if (loginForm.classList.contains('active')) {
        loginForm.classList.remove('active');
    }
    if (navbar.classList.contains('active')) {
        navbar.classList.remove('active');
    }
}

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    if (searchForm.classList.contains('active')) {
        searchForm.classList.remove('active');
    }
    if (navbar.classList.contains('active')) {
        navbar.classList.remove('active');
    }
}

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    if (searchForm.classList.contains('active')) {
        searchForm.classList.remove('active');
    }
    if (loginForm.classList.contains('active')) {
        loginForm.classList.remove('active');
    }
}

var swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});


document.querySelector('#cart-btn').onclick = () => {
    document.querySelector('#products').scrollIntoView({ behavior: 'smooth' });
}
