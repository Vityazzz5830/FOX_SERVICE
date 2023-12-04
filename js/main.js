$('.catalog-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    infinite: true,
    dots: true,
    autoplay: false,
    swipe: false
  });

$('.catalog-slider-item-list-item-uppart').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    infinite: true,
    dots: true,
    autoplay: false,
  });



  // Обработчик события для табов "Хиты продаж"
  $(".label1").on('click', function() {
    // Инициализируем usehouse-slider при клике на таб "Хиты продаж"
    $('.catalog-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: false,
      infinite: true,
      dots: true,
      autoplay: false,
      swipe: false
    });
    $('.catalog-slider-item-list-item-uppart').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: false,
      infinite: true,
      dots: true,
      swipe: true,
      autoplay: false,
    });
    // Отключаем catalog-slider2
    $('.catalog-slider2').slick('unslick');
    $('.catalog-slider-item-list-item-uppart2').slick('unslick');
  });

  // Обработчик события для табов "Акционные товары"
  $(".label2").on('click', function() {
    // Инициализируем usehouse-slider2 при клике на таб "Акционные товары"
    $('.catalog-slider2').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: false,
      infinite: true,
      dots: true,
      autoplay: false,
      swipe: false
    });
    $('.catalog-slider-item-list-item-uppart2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    infinite: true,
    dots: true,
    autoplay: false,
  });
    let refresh2 = document.getElementsByClassName('slick-slide');
    console.log(refresh2);
    // Отключаем catalog-slider
    $('.catalog-slider').slick('unslick');
    $('.catalog-slider-item-list-item-uppart').slick('unslick'); 
      /*$('refresh2').slick('refresh');*/
    let likebtn = document.getElementsByClassName('like_btn');
let likeno = document.getElementsByClassName('like_btn_noactive');
let likeac = document.getElementsByClassName('like_btn_active');



for (let i=0; i<likebtn.length; i++){
  likebtn[i].addEventListener('click', function() {
    likeno[i].classList.toggle("like_btn_noactive_js");
    likeac[i].classList.toggle("like_btn_active_js");
  });
}
  });


let likebtn = document.getElementsByClassName('like_btn');
let likeno = document.getElementsByClassName('like_btn_noactive');
let likeac = document.getElementsByClassName('like_btn_active');



for (let i=0; i<likebtn.length; i++){
  likebtn[i].addEventListener('click', function() {
    likeno[i].classList.toggle("like_btn_noactive_js");
    likeac[i].classList.toggle("like_btn_active_js");
  });
}



$('.servicesec-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,               
  dots: false,
  arrows:false,
  infinite: true, 
  variableWidth: true,  
  centerMode:true,
  autoplay: true
});  

$('.reviewssec-content-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,                
  dots: false,
  arrows:true,
  infinite: false,

  autoplay: false,
});  


window.addEventListener("DOMContentLoaded", function() {
  [].forEach.call( document.querySelectorAll('input[data-tel-input]'), function(input) {
    var keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ ____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a) {
              return i < val.length ? val.charAt(i++) : a
          });
      i = new_value.indexOf("_");
      if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
          function(a) {
              return "\\d{1," + a.length + "}"
          }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
        this.value = new_value;
      }
      if (event.type == "blur" && this.value.length < 5) {
        this.value = "";
      }
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);
  });
});

var nameInputs = document.querySelectorAll('input[data-name-input]');

$(nameInputs).on('keypress', function() {
    var that = this;

    setTimeout(function() {
        var res = /[^аА-яЯ]/g.exec(that.value);
        console.log(res);
        that.value = that.value.replace(res, '');
    }, 0);
});


function initMap (){
    map = new ymaps.Map("yandexmap", {
    center: [55.685550,37.624225],
     zoom: 16,
    controls: []
    });
}

function newMetka (){
    var myPlacemark = new ymaps.Placemark([55.685550, 37.622150], {}, {
    preset: 'islands#redDotIcon'
});
    map.geoObjects.add(myPlacemark); 
}

ymaps.ready(initMap);
ymaps.ready(newMetka);
