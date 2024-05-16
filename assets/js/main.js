

(function() {
  "use strict";
  document.addEventListener('DOMContentLoaded', function () {
    var backgroundCarousel = document.getElementById('backgroundCarousel');
    var carouselInterval = 3000; 
    
    var carouselInstance = new Carousel(backgroundCarousel, carouselInterval);
    carouselInstance.start();
});

function Carousel(element, interval) {
    var self = this;
    this.element = element;
    this.interval = interval;
    this.currentIndex = 0;
    this.slides = this.element.querySelectorAll('.carousel-item');
    this.totalSlides = this.slides.length;

    this.start = function () {
        setInterval(function () {
            self.next();
        }, self.interval);
    };

    this.next = function () {
        self.slides[self.currentIndex].classList.remove('active');
        self.currentIndex = (self.currentIndex + 1) % self.totalSlides;
        self.slides[self.currentIndex].classList.add('active');
    };
}
 
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  let selectTopbar = select('#topbar')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 300) {
        
        selectHeader.classList.add('header-scrolled')
        selectHeader.style.background="#04311ce1";
        selectHeader.style.height="60px";
       
        if (selectTopbar) {
          selectTopbar.classList.add('topbar-scrolled')

        }
      } else {
        selectHeader.classList.remove('header-scrolled')
        selectHeader.style.background="#04311c21";
        selectHeader.style.height="80px";
        if (selectTopbar) {
          selectTopbar.classList.remove('topbar-scrolled')
        }
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }
  
  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()

