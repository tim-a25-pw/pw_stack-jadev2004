export default class Header {
  constructor(element) {
    this.element = element;
    this.options = {
      threshold: 0.1,
      headerAlwaysShow: false,
    };
    this.lastScrollPosition = 0;
    this.scrollPosition = 0;
    this.html = document.documentElement;

    this.init();
    this.initNavMobile();
  }

  init() {
    this.setOptions();
    //console.log('Nouvelle instance de la composante Header');

    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  setOptions() {
    const ValeurThreshold = document.querySelector('[data-threshold]');

    const HeaderShow = document.querySelector('[data-always-show]');

    if (HeaderShow) {
      this.options.headerAlwaysShow = true;
    }

    if (ValeurThreshold != null) {
      //console.log("L'attribut est là");
      this.options.threshold = parseFloat(this.element.dataset.threshold);
    }
  }

  onScroll() {
    //console.log('tu scroll');
    this.lastScrollPosition = this.scrollPosition;
    this.scrollPosition = document.scrollingElement.scrollTop;
    //console.log(this.scrollPosition, this.lastScrollPosition);
    //console.log(this.scrollPosition);

    this.setHeaderState();
    this.setDirections();
  }

  setHeaderState() {
    if (this.options.headerAlwaysShow) {
    } else if (
      this.scrollPosition >=
      document.scrollingElement.scrollHeight * this.options.threshold
    ) {
      this.html.classList.add('header-is-hidden');
    } else {
      this.html.classList.remove('header-is-hidden');
    }
  }

  setDirections() {
    if (this.scrollPosition >= this.lastScrollPosition) {
      //scroll vers le bas

      this.html.classList.add('is-scrolling-down');
      this.html.classList.remove('is-scrolling-up');
    } else {
      //scroll vers le haut

      this.html.classList.remove('is-scrolling-down');
      this.html.classList.add('is-scrolling-up');
    }
  }

  initNavMobile() {
    const toggle = this.element.querySelector('.js-toggle');
    toggle.addEventListener('click', this.onToggleNav.bind(this));
  }

  onToggleNav() {
    this.html.classList.toggle('nav-is-active');
  }
}
