// Slider 

    let slideIndex = 1,
        slides = document.querySelectorAll('.slider__item'),
        dots = document.querySelectorAll('.slider__header li'),
        prev = document.querySelector('.slider__prev'),
        next = document.querySelector('.slider__next');

    showSlides(slideIndex);    

    function showSlides(n) {

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');
        dots.forEach((item) => item.classList.remove('dot-active'));

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('li_active');
    }

    function nextSlide (n) {
        showSlides(slideIndex += n);
    }

    function currentSlide (n) {
        showSlides(slideIndex = n);
    }

    next.addEventListener('click', function () {
        nextSlide(1);
    });
    prev.addEventListener('click', function () {
        nextSlide(-1);
    });

    dots.forEach (function (item) {
        item.addEventListener('click', function() {
            for (let i = 0; i < dots.length + 1; i++) {
                if (item.classList.contains('li_active') && item == dots[i-1]) {
                    currentSlide(i);
                }
            }
        });
    });