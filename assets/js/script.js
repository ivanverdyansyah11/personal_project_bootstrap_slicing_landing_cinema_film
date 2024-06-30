AOS.init({
    once: true
});

$('.button-hamburger').on('click', function() {
    $(this).toggleClass('active')
    $('.topbar').toggleClass('active')
})

const cardFilm = document.querySelectorAll('.hero .card-film');
cardFilm.forEach((card) => {
    card.addEventListener('click', (e) => {
        $('.hero .headline').addClass('animation')
        $('.hero .hero-rating').addClass('animation')
        $('.hero .hero-release').addClass('animation')
        $('.hero .description-group').addClass('animation')
        $('.hero .thumbnail-film').addClass('animation')

        let cardImage = card.querySelector('img')
        cardImage = cardImage.getAttribute('src')
        let cardTitle = card.querySelector('h6').innerHTML
        let cardRating = card.querySelectorAll('span')
        let rating = []
        cardRating.forEach((value) => {
            rating.push(value.innerHTML)
        })

        let titleFilm = document.querySelector('.hero .headline')
        let ratingFilm = document.querySelectorAll('.hero .hero-rating span')
        let imageFilm = document.querySelector('.hero .thumbnail-film img')
        titleFilm.innerHTML = cardTitle
        ratingFilm.forEach((value, i) => {
            value.innerHTML = rating[i]
        })
        imageFilm.setAttribute('src', cardImage)

        setTimeout(() => {
            $('.hero .headline').removeClass('animation')
            $('.hero .hero-rating').removeClass('animation')
            $('.hero .hero-release').removeClass('animation')
            $('.hero .description-group').removeClass('animation')
            $('.hero .thumbnail-film').removeClass('animation')
        }, 400)
    })
})

const cardFAQ = document.querySelectorAll('.card-faq');
cardFAQ.forEach((faq) => {
    faq.addEventListener('click', function() {
        const cardFAQActive = document.querySelector('.card-faq.active');
        cardFAQActive.classList.remove('active')
        faq.classList.add('active')
    })
})

let swiperHero = new Swiper(".swiperHero", {
    slidesPerView: 3,
    spaceBetween: 14,
    loop: true,
    breakpoints: {
        768: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 8,
            spaceBetween: 20,
        },
    },
});

let swiperTrending = new Swiper(".swiperTrending", {
    slidesPerView: 2,
    spaceBetween: 14,
    loop: true,
    pagination: {
        el: ".swiper-pagination-trending",
    },
    breakpoints: {
        768: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 6,
            spaceBetween: 20,
        },
    },
});

let swiperComing = new Swiper(".swiperComing", {
    slidesPerView: 2,
    spaceBetween: 14,
    loop: true,
    pagination: {
        el: ".swiper-pagination-coming",
    },
    breakpoints: {
        768: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 6,
            spaceBetween: 20,
        },
    },
});

let swiperFeatured = new Swiper(".swiperFeatured", {
    slidesPerView: 2,
    spaceBetween: 14,
    loop: true,
    pagination: {
        el: ".swiper-pagination-featured",
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});

let swiperTop = new Swiper(".swiperTop", {
    slidesPerView: 2,
    spaceBetween: 14,
    loop: true,
    pagination: {
        el: ".swiper-pagination-top",
    },
    breakpoints: {
        768: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 6,
            spaceBetween: 20,
        },
    },
});

let swiperLatest = new Swiper(".swiperLatest", {
    slidesPerView: 2,
    spaceBetween: 14,
    loop: true,
    pagination: {
        el: ".swiper-pagination-latest",
    },
    breakpoints: {
        768: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 6,
            spaceBetween: 20,
        },
    },
});