$(document).ready(function(){
    $('.bars').click(function(){
        console.log('hello!!!!!!');
        $('ul.menu2').css('display', 'block');
        $(this).css('display', 'none');
        $('.cross').css('display', 'block');
    });
    $('.cross').click(function(){
        $(this).css('display', 'none');
        $('.bars').css('display', 'block');
        $('ul.menu2').css('display', 'none');
    });
});





let scrollTop = document.querySelector('.box-iconTop')
window.addEventListener('scroll', () => {
    let top = window.scrollY;
    if(top > 200){
        scrollTop.style.display = 'block'
    } else {
        scrollTop.style.display = 'none'
    }
})

scrollTop.addEventListener('click', () => {
    window.scrollTo({top: 0, left: 0, behavior: "smooth"});
})
window.addEventListener('load', () => {
    scrollTop.style.display = 'none';
})




// ------------ Slider ---------------

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },  
  });