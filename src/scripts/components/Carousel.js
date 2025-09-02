import Swiper from 'swiper/bundle';

export default class Carousel {
  constructor(element) {
    this.element = element;

    this.options = {
      slidesPerView: 2.5,
      spaceBetween: 40,
      pagination: {
        el: this.element.querySelector('.swiper-pagination'),
      },
      navigation: {
        nextEl: this.element.querySelector('.swiper-button-next'),
        prevEl: this.element.querySelector('.swiper-button-prev'),
      },
    };

    this.init();
  }

  setOptions() {
    if ('split' in this.element.dataset) {
      this.options.breakpoints = {
        930: {
          slidesPerView: 2.5,
          spaceBetween: 40,
        },

        620: {
          slidesPerView: 1.5,
          spaceBetween: 40,
        },

        350: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
      };
    }

    if ('split2' in this.element.dataset) {
      this.options.breakpoints = {
        930: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        620: {
          slidesPerView: 1,
          spaceBetween: 0,
        },

        200: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
      };
    }

    if ('autoplay' in this.element.dataset) {
      this.options.autoplay = {
        delay: 3000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      };
    }

    if ('loop' in this.element.dataset) {
      this.options.loop = true;
    }

    if ('slides' in this.element.dataset) {
      this.options.slidesPerView =
        parseFloat(this.element.dataset.slides, 1.2) ||
        this.options.slidesPerView;
    }
  }

  init() {
    this.setOptions();
    new Swiper(this.element, this.options);
  }
}
