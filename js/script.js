$(document).ready(function(){
    $('.customer__slider').slick({
        speed: 1200,
        slidesToShow: 2,
        slidesToScroll: 1,
        adaptiveHeight: true,
        variableWidth: false,
        prevArrow: '<button type="button" class="slick-prev"><img class="slider__arrow_left" src="icons/arrow_right.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img class="slider__arrow_right" src="icons/arrow_right.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false,
                    customPaging: function(slider, i) {
                        return ''; // Remove button, customize content of "li"
                    }
                }
            },
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                    arrows: false,
                    customPaging: function(slider, i) {
                        return ''; // Remove button, customize content of "li"
                    }
              }
            }
          ]
      });
  });

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__list'),
    menuItem = document.querySelectorAll('.header__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header__list_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header__list_active');
        })
    });

    // Accordion
    let acc = document.getElementsByClassName("accordion");
    let i;

    for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
        panel.style.maxHeight = null;
        } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    });
    }
});