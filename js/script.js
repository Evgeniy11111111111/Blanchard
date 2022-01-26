// Бургер

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#menu').classList.add('is-active')
      document.body.style.overflow = "hidden";
  })
})

// Закрытие бургера

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#menu-close').addEventListener('click', function() {
    document.querySelector('#menu').classList.remove('is-active')
      document.body.style.overflow = "auto";
  })
})

// раскрытие поиска

document.querySelector(".header__search-form-btn__open").addEventListener("click", function() {
  document.querySelector(".header__form-top").classList.add("form__active");
  this.classList.add("active");
})

document.querySelector(".header__search-form-btn__close").addEventListener("click", function() {
  document.querySelector(".header__form-top").classList.remove("form__active");
  this.classList.remove("active");
})

document.addEventListener("click", function(e) {
  let target = e.target;
  let form = document.querySelector(".header__form-top");
  if (!target.closest(".header__form-container")) {
  form.classList.remove("form__active");
    form.querySelector("input").value = "";
    document.querySelector(".header__search-form-btn__open").classList.remove("active")
  }
})

// Header__bottom Раскрытие меню

document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".header__bottom-list-btn").forEach(item => {
  item.addEventListener("click", function() {
    let btn = this;
    let dropdown = this.parentElement.querySelector(".header__bottom-container-dropdown");

    document.querySelectorAll(".header__bottom-list-btn").forEach(el => {
      if (el != btn) {
        el.classList.remove("active--btn");
      }
    });

    document.querySelectorAll(".header__bottom-container-dropdown").forEach(el => {
      if (el != dropdown) {
        el.classList.remove("active-list--item");
      }
    })
    dropdown.classList.toggle("active-list--item");
    btn.classList.toggle("active--btn")
  })
})

document.addEventListener("click", function(e) {
  let target = e.target;
  if (!target.closest(".header__bottom-list")) {
    document.querySelectorAll(".header__bottom-container-dropdown").forEach(el => {
        el.classList.remove("active-list--item");
    })
     document.querySelectorAll(".header__bottom-list-btn").forEach(el => {
        el.classList.remove("active--btn");
    });
  }
})
})

// Simplbar

document.querySelectorAll(".simplebar").forEach(item => {
  new SimpleBar(item, {
//   /* чтобы изначально ползунок был виден */
   autoHide: false,
//   /* с помощью этого значения вы можете управлять высотой ползунка*/
  scrollbarMaxSize: 25,
 });
 })


// Hero-swipper

const container = document.querySelector(".hero__container")
const swiper = new Swiper('.hero__swiper', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 2000,
  autoplay: {
    delay: 2000
  },
  effect: "fade",
  allowTouchMove: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: '.swiper-bullet-pagination',
    type: 'bullets',
    clickable: true
  }

})

// Gallery select

const element = document.querySelector('.gallery__select');
const choices = new Choices(element, {
  searchEnabled: false,
  shouldSort: false,
});

// Gallery swiper
const container2 = document.querySelector(".gallery__right")
const swiper2 = new Swiper('.gallery__swiper', {
  slidesPerView: 3,
  spaceBetween: 50,
  slidesPerGroup: 3,
  navigation: {
    nextEl: ".gallery__btn-prev",
    prevEl: ".gallery__btn-next"
  },
  pagination: {
    el: '.gallery__swiper-pagination',
    type: 'fraction',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
      slidesPerGroup: 1,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },
    1360: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    }
  }
});

const cardGallery = document.querySelectorAll('.gallery__slide-btn');

for (let card of cardGallery) {
  card.addEventListener('click', function () {
    document.body.style.overflowY = 'hidden';
    //popup
    const popup = document.querySelector('.gallery__modal');
    popup.classList.add('gallery__modal--is-active');
  });
}
//закрываем модальное окно
document.querySelector('.gallery__modal-btn-close').addEventListener('click', function(){
  document.body.style.overflowY = 'auto';
  document.querySelector('.gallery__modal').classList.remove('gallery__modal--is-active');
});


// Catalog
// Accordion

$( function() {
  $( ".catalog__accordion" ).accordion();
} );

$( ".catalog__accordion" ).accordion({
  collapsible: true,
  heightStyle: "content",
  active: 0,
});

// Tab

document.querySelectorAll('.catalog__tab-link').forEach(function(tabsBtn){
  tabsBtn.addEventListener('click', function(e){
  const path = e.currentTarget.dataset.path;
  document.querySelectorAll('.catalog__tab-link').forEach(function(btn){
  btn.classList.remove('catalog__tab-link--active')});
  e.currentTarget.classList.add('catalog__tab-link--active');
  document.querySelectorAll('.catalog__tab-box').forEach(function(tabsBtn){
    tabsBtn.classList.remove('catalog__tab-box-active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('catalog__tab-box-active');
  });
});

// Events swiper

const container3 = document.querySelector(".events__container-swiper-main")
const swiper3 = new Swiper('.events__swiper', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  pagination: {
    el: '.events__swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  breakpoints: {
    767: {
      slidesPerView: 2,
      spaceBetween: 34,
    },
    1023: {
      slidesPerView: 3,
      spaceBetween: 27,
    },
    1360: {
      slidesPerView: 3,
      spaceBetween: 50,
      navigation: {
        nextEl: ".events__swiper-button-next",
        prevEl: ".events__swiper-button-prev",
      },
    }
  }
});

// Тултип

const tippy1 = new tippy('.project__tippi-1', {
  content: 'Пример современных тенденций - современная методология разработки  ',
  placement: 'top',
  arrow: true,
  trigger: 'click',
  theme: 'light',
  maxWidth: 264,
});

const tippy2 = new tippy('.project__tippi-2', {
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции  ',
  placement: 'top',
  arrow: true,
  trigger: 'click',
  maxWidth: 264,
});

const tippy3 = new tippy('.project__tippi-3', {
  content: 'В стремлении повысить качество ',
  placement: 'top',
  arrow: true,
  trigger: 'click',
  maxWidth: 264,
});

// Project swiper

const container4 = document.querySelector(".project__partners-container")
const swiper4 = new Swiper('.project__swiper', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  navigation: {
    nextEl: ".project__button-next",
    prevEl: ".project__button-prev",
  },
  breakpoints: {
    767: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },
    1023: {
      slidesPerView: 2,
      spaceBetween: 50,
      slidesPerGroup: 2,
    },
    1360: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    },
  },
});


// Contacts form Маска

var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);


const validation = new JustValidate('.contacts__form', {
  rules: {
    name: {
      required: true,
      minLength: 3,
      maxLength: 10
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      },
    },
  },
});

// Карта

    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            center: [55.75846806898367,37.60108849999989],
            zoom: 19,
            controls: []
      });

      var myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Point", // тип геометрии - точка
            coordinates: [] // координаты точки
        },
      });
      var myPlacemark = new ymaps.Placemark([55.75846806898367,37.60108849999989], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'image/contacts-point.svg',
      iconImageSize: [30, 42],
      iconImageOffset: [-3, -42]
      });
      myMap.controls.add('zoomControl', {
      size: 'small',
      float: 'none',
      position: {
          top: '300px',
          right: '10px'
        },
      });
      myMap.controls.add('geolocationControl', {
        float: 'none',
        position: {
          top: '370px',
          right: '10px'
        }
      });
      myMap.behaviors.disable('drag');
      myMap.behaviors.disable('scrollZoom');
      myMap.geoObjects.add(myPlacemark);
      myMap.controls.remove('searchControl');
      myMap.controls.remove('trafficControl');
      myMap.controls.remove('typeSelector');
      myMap.controls.remove('fullscreenControl');
      myMap.controls.remove('rulerControl');
};

